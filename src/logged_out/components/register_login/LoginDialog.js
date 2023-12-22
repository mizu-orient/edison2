import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";

import dummyUser from "../../../shared/dummy_data/dummyUser.json";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

function LoginDialog(props) {
  const {
    setStatus,
    history,
    classes,
    onClose,
    openChangePasswordDialog,
    status,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const loginUsername = useRef();
  const loginPassword = useRef();

  const login = useCallback(() => {
    setIsLoading(true);
    setStatus(null);
    const inputUsername = loginUsername.current.value;
    const inputPassword = loginPassword.current.value;

    // ユーザー名が存在するかどうかをチェック
    const userExists = dummyUser.users.some(
      (user) => user.username === inputUsername
    );

    // ユーザー名が存在する場合、そのユーザーのパスワードをチェック
    const passwordCorrect =
      userExists &&
      dummyUser.users.some(
        (user) =>
          user.username === inputUsername && user.password === inputPassword
      );

    // 本のIDを取得する
    const bookId = dummyUser.users.find(
      (user) => user.username === inputUsername
    ).bookId;

    // ユーザー名が無効な場合
    if (!userExists) {
      setTimeout(() => {
        setStatus("invalidUsername");
        setIsLoading(false);
      }, 1500);
    }
    // パスワードが無効な場合
    else if (!passwordCorrect) {
      setTimeout(() => {
        setStatus("invalidPassword");
        setIsLoading(false);
      }, 1500);
    }
    // ユーザー名とパスワードが正しい場合
    else {
      localStorage.setItem("loggedInUsername", inputUsername);
      localStorage.setItem("userBookId", bookId);
      console.log("Logged In:", localStorage.getItem("loggedInUsername"));
      console.log("User BookId:", localStorage.getItem("userBookId"));
      setTimeout(() => {
        history.push("/c/toppage");
      }, 150);
    }
  }, [setIsLoading, loginUsername, loginPassword, history, setStatus]);

  return (
    <Fragment>
      <FormDialog
        open
        onClose={onClose}
        loading={isLoading}
        onFormSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        hideBackdrop
        headline="Login"
        content={
          <Fragment>
            <TextField
              variant="outlined"
              margin="normal"
              error={status === "invalidUsername"}
              required
              fullWidth
              label="Username"
              inputRef={loginUsername}
              autoFocus
              autoComplete="off"
              type="text"
              onChange={() => {
                if (status === "invalidUsername") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidUsername" && "This username does not exist"
              }
              FormHelperTextProps={{ error: true }}
            />
            <VisibilityPasswordTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={status === "invalidPassword"}
              label="Password"
              inputRef={loginPassword}
              autoComplete="off"
              onChange={() => {
                if (status === "invalidPassword") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidPassword" ? (
                  <span>
                    Incorrect password. Try again, or click on{" "}
                    <b>&quot;Forgot Password?&quot;</b> to reset it.
                  </span>
                ) : (
                  ""
                )
              }
              FormHelperTextProps={{ error: true }}
              onVisibilityChange={setIsPasswordVisible}
              isVisible={isPasswordVisible}
            />
            <FormControlLabel
              className={classes.formControlLabel}
              control={<Checkbox color="primary" />}
              label={<Typography variant="body1">Remember me</Typography>}
            />
            {status === "verificationUsernameSend" ? (
              <HighlightedInformation>
                We have send instructions on how to reset your password to your
                username
              </HighlightedInformation>
            ) : (
              <HighlightedInformation>
                Username is: <b>test</b>
                <br />
                Password is: <b>test</b>
              </HighlightedInformation>
            )}
          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              disabled={isLoading}
              size="large"
            >
              Login
              {isLoading && <ButtonCircularProgress />}
            </Button>
            <Typography
              align="center"
              className={classNames(
                classes.forgotPassword,
                isLoading ? classes.disabledText : null
              )}
              color="primary"
              onClick={isLoading ? null : openChangePasswordDialog}
              tabIndex={0}
              role="button"
              onKeyDown={(event) => {
                // For screenreaders listen to space and enter events
                if (
                  (!isLoading && event.keyCode === 13) ||
                  event.keyCode === 32
                ) {
                  openChangePasswordDialog();
                }
              }}
            >
              Forgot Password?
            </Typography>
          </Fragment>
        }
      />
    </Fragment>
  );
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

export default withRouter(withStyles(styles)(LoginDialog));
