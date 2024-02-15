import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Card, CardMedia, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import defaultCover from "./images/notavailable.png";

// スタイル付きコンポーネントの作成
const CustomCard = styled(Card)({
  boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  borderRadius: "10px",
  "&:hover": {
    boxShadow: "0 16px 32px 0 rgba(0,0,0,0.2)",
    transform: "scale(1.05)",
  },
  maxWidth: 345, // カードの最大幅を設定
});

const CustomCardMedia = styled(CardMedia)({
  paddingTop: "56.25%", // 16:9 アスペクト比
  border: "2px solid #3f51b5", // 画像を囲む線のスタイル
});

const Book = ({ bookId, coverImage, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={`/c/bookviewer/${bookId}`} style={{ textDecoration: "none" }}>
        <CustomCard>
          <CustomCardMedia image={coverImage || defaultCover} title={title} />
          <Box padding={2}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        </CustomCard>
      </Link>
    </Grid>
  );
};

Book.propTypes = {
  bookId: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Book;
