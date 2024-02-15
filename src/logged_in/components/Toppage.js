import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import "../../index.css";

/** @jsx jsx */
import { jsx } from "@emotion/react";

const Toppage = (props) => {
  const { selectToppage } = props;
  useEffect(() => {
    selectToppage();
  }, [selectToppage]);

  return (
    <div
      css={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 991px)": {
          padding: "0 20px",
        },
        padding: "50px 70px",
      }}
    >
      <div
        css={{
          justifyContent: "space-between",
          marginTop: "32px",
          width: "834px",
          maxWidth: "100%",
        }}
      >
        <div
          css={{
            gap: "20px",
            display: "flex",
            "@media (max-width: 991px)": {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "0px",
            },
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "35%",
              marginLeft: "0px",
              "@media (max-width: 991px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d9042f19aca11e4b1ea37e80f300a969232162f65a0707689d2bcbc80185e54?apiKey=12a7be855aa34cb198eafabbae79d58a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9042f19aca11e4b1ea37e80f300a969232162f65a0707689d2bcbc80185e54?apiKey=12a7be855aa34cb198eafabbae79d58a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9042f19aca11e4b1ea37e80f300a969232162f65a0707689d2bcbc80185e54?apiKey=12a7be855aa34cb198eafabbae79d58a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9042f19aca11e4b1ea37e80f300a969232162f65a0707689d2bcbc80185e54?apiKey=12a7be855aa34cb198eafabbae79d58a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9042f19aca11e4b1ea37e80f300a969232162f65a0707689d2bcbc80185e54?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9042f19aca11e4b1ea37e80f300a969232162f65a0707689d2bcbc80185e54?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9042f19aca11e4b1ea37e80f300a969232162f65a0707689d2bcbc80185e54?apiKey=12a7be855aa34cb198eafabbae79d58a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d9042f19aca11e4b1ea37e80f300a969232162f65a0707689d2bcbc80185e54?apiKey=12a7be855aa34cb198eafabbae79d58a&"
              css={{
                aspectRatio: "1.16",
                objectFit: "auto",
                objectPosition: "center",
                width: "100%",
                boxShadow: "10px 12px 10px -6px rgba(61, 60, 60, 0.36)",
                flexGrow: "1",
                "@media (max-width: 991px)": {
                  marginTop: "39px",
                },
              }}
            />
          </div>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "65%",
              marginLeft: "20px",
              "@media (max-width: 991px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            <div
              css={{
                justifyContent: "space-between",
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                fontSize: "36px",
                color: "var(--gray-800, #3D3C3C)",
                fontWeight: "400",
                whiteSpace: "nowrap",
                "@media (max-width: 991px)": {
                  maxWidth: "100%",
                  marginTop: "39px",
                  whiteSpace: "initial",
                },
              }}
            >
              <div
                css={{
                  fontFamily: "Unica One, sans-serif",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                  },
                }}
              >
                UserName
              </div>
              <div
                css={{
                  borderRadius: "20px",
                  border: "2px dashed var(--gray-800, #3D3C3C)",
                  backgroundColor: "var(--white, #FFF)",
                  marginTop: "19px",
                  justifyContent: "center",
                  alignItems: "start",
                  color: "var(--gray-600, #676767)",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                    whiteSpace: "initial",
                    padding: "0 20px",
                  },
                  padding: "23px 60px 23px 26px",
                  font: "500 16px Syne, sans-serif ",
                }}
              >
                プロフィール文
              </div>
              <div
                css={{
                  justifyContent: "space-between",
                  display: "flex",
                  marginTop: "19px",
                  gap: "4px",
                  fontSize: "20px",
                  textAlign: "center",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                    flexWrap: "wrap",
                    whiteSpace: "initial",
                  },
                }}
              >
                <div
                  css={{
                    display: "flex",
                    flexGrow: "1",
                    flexBasis: "0%",
                    flexDirection: "column",
                    justifyContent: "center",
                    "@media (max-width: 991px)": {
                      whiteSpace: "initial",
                    },
                  }}
                >
                  <div
                    css={{
                      fontFamily: "Syne, sans-serif",
                      borderRadius: "20px",
                      border: "2px solid var(--gray-800, #3D3C3C)",
                      backgroundColor: "var(--yellow-500, #FDBF0F)",
                      justifyContent: "center",
                      alignItems: "center",
                      "@media (max-width: 991px)": {
                        whiteSpace: "initial",
                        padding: "0 20px",
                      },
                      padding: "15px 60px",
                    }}
                  >
                    Kids
                  </div>
                </div>
                <div
                  css={{
                    display: "flex",
                    flexGrow: "1",
                    flexBasis: "0%",
                    flexDirection: "column",
                    justifyContent: "center",
                    "@media (max-width: 991px)": {
                      whiteSpace: "initial",
                    },
                  }}
                >
                  <div
                    css={{
                      fontFamily: "Syne, sans-serif",
                      borderRadius: "20px",
                      border: "2px solid var(--gray-800, #3D3C3C)",
                      backgroundColor: "var(--orange-500, #F9784B)",
                      justifyContent: "center",
                      alignItems: "center",
                      "@media (max-width: 991px)": {
                        whiteSpace: "initial",
                        padding: "0 20px",
                      },
                      padding: "13px 60px",
                    }}
                  >
                    プラン
                  </div>
                </div>
              </div>
              <div
                css={{
                  color: "var(--orange-500, #F9784B)",
                  fontFamily: "Syne, sans-serif",
                  marginTop: "19px",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                  },
                }}
              >
                あとXX冊作成できます
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        css={{
          backgroundColor: "#676767",
          alignSelf: "stretch",
          marginTop: "52px",
          height: "2px",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
            marginTop: "40px",
          },
        }}
      />
      <div
        css={{
          justifyContent: "space-between",
          marginTop: "54px",
          width: "100%",
          maxWidth: "1205px",
          "@media (max-width: 991px)": {
            maxWidth: "100%",
            marginTop: "40px",
          },
        }}
      >
        <div
          css={{
            gap: "20px",
            display: "flex",
            "@media (max-width: 991px)": {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "0px",
            },
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "75%",
              marginLeft: "0px",
              "@media (max-width: 991px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            <div
              css={{
                justifyContent: "space-between",
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                "@media (max-width: 991px)": {
                  maxWidth: "100%",
                  marginTop: "40px",
                },
              }}
            >
              <div
                css={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "16px",
                  fontSize: "36px",
                  color: "var(--gray-800, #3D3C3C)",
                  fontWeight: "400",
                  whiteSpace: "nowrap",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                    flexWrap: "wrap",
                    whiteSpace: "initial",
                  },
                  padding: "5px 0",
                }}
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/119bafd481cfbf4d99af554d4462ea282b72aa6ab9dbcace1f91b3b62d6c225d?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                  css={{
                    aspectRatio: "1.23",
                    objectFit: "auto",
                    objectPosition: "center",
                    width: "26px",
                    margin: "auto 0",
                  }}
                />
                <div
                  css={{
                    fontFamily: "Unica One, sans-serif",
                    flexGrow: "1",
                    flexBasis: "auto",
                    "@media (max-width: 991px)": {
                      maxWidth: "100%",
                    },
                  }}
                >
                  最近アクセスした本
                </div>
              </div>
              <div
                css={{
                  justifyContent: "space-between",
                  marginTop: "18px",
                  "@media (max-width: 991px)": {
                    maxWidth: "100%",
                  },
                }}
              >
                <div
                  css={{
                    gap: "20px",
                    display: "flex",
                    "@media (max-width: 991px)": {
                      flexDirection: "column",
                      alignItems: "stretch",
                      gap: "0px",
                    },
                  }}
                >
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "33%",
                      marginLeft: "0px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <div
                      css={{
                        display: "flex",
                        flexGrow: "1",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: "24px",
                        color: "var(--gray-800, #3D3C3C)",
                        fontWeight: "400",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                          whiteSpace: "initial",
                        },
                      }}
                    >
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                        css={{
                          aspectRatio: "0.67",
                          objectFit: "auto",
                          objectPosition: "center",
                          width: "200px",
                          boxShadow:
                            "10px 12px 10px -6px rgba(61, 60, 60, 0.36)",
                        }}
                      />
                      <div
                        css={{
                          fontFamily: "Syne, sans-serif",
                          marginTop: "19px",
                        }}
                      >
                        Momotaro
                      </div>
                      <div
                        css={{
                          fontFamily: "Syne, sans-serif",
                          borderRadius: "20px",
                          border: "2px solid var(--gray-800, #3D3C3C)",
                          backgroundColor: "var(--yellow-500, #FDBF0F)",
                          alignSelf: "stretch",
                          marginTop: "20px",
                          justifyContent: "center",
                          "@media (max-width: 991px)": {
                            whiteSpace: "initial",
                            padding: "0 20px",
                          },
                          padding: "12px 52px",
                        }}
                      >
                        作成する
                      </div>
                    </div>
                  </div>
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "33%",
                      marginLeft: "20px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <div
                      css={{
                        display: "flex",
                        flexGrow: "1",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: "24px",
                        color: "var(--gray-800, #3D3C3C)",
                        fontWeight: "400",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                          whiteSpace: "initial",
                        },
                      }}
                    >
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                        css={{
                          aspectRatio: "0.67",
                          objectFit: "auto",
                          objectPosition: "center",
                          width: "200px",
                          boxShadow:
                            "10px 12px 10px -6px rgba(61, 60, 60, 0.36)",
                        }}
                      />
                      <div
                        css={{
                          fontFamily: "Syne, sans-serif",
                          marginTop: "19px",
                        }}
                      >
                        Momotaro
                      </div>
                      <div
                        css={{
                          fontFamily: "Syne, sans-serif",
                          borderRadius: "20px",
                          border: "2px solid var(--gray-800, #3D3C3C)",
                          backgroundColor: "var(--yellow-500, #FDBF0F)",
                          alignSelf: "stretch",
                          marginTop: "20px",
                          justifyContent: "center",
                          "@media (max-width: 991px)": {
                            whiteSpace: "initial",
                            padding: "0 20px",
                          },
                          padding: "12px 52px",
                        }}
                      >
                        作成する
                      </div>
                    </div>
                  </div>
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: "normal",
                      width: "33%",
                      marginLeft: "20px",
                      "@media (max-width: 991px)": {
                        width: "100%",
                        marginLeft: 0,
                      },
                    }}
                  >
                    <div
                      css={{
                        display: "flex",
                        flexGrow: "1",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: "24px",
                        color: "var(--gray-800, #3D3C3C)",
                        fontWeight: "400",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                        "@media (max-width: 991px)": {
                          marginTop: "40px",
                          whiteSpace: "initial",
                        },
                      }}
                    >
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                        css={{
                          aspectRatio: "0.67",
                          objectFit: "auto",
                          objectPosition: "center",
                          width: "200px",
                          boxShadow:
                            "10px 12px 10px -6px rgba(61, 60, 60, 0.36)",
                        }}
                      />
                      <div
                        css={{
                          fontFamily: "Syne, sans-serif",
                          marginTop: "19px",
                        }}
                      >
                        Momotaro
                      </div>
                      <div
                        css={{
                          fontFamily: "Syne, sans-serif",
                          borderRadius: "20px",
                          border: "2px solid var(--gray-800, #3D3C3C)",
                          backgroundColor: "var(--yellow-500, #FDBF0F)",
                          alignSelf: "stretch",
                          marginTop: "20px",
                          justifyContent: "center",
                          "@media (max-width: 991px)": {
                            whiteSpace: "initial",
                            padding: "0 20px",
                          },
                          padding: "12px 52px",
                        }}
                      >
                        作成する
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "normal",
              width: "25%",
              marginLeft: "20px",
              "@media (max-width: 991px)": {
                width: "100%",
                marginLeft: 0,
              },
            }}
          >
            <div
              css={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                flexGrow: "1",
                flexDirection: "column",
                fontSize: "24px",
                color: "var(--gray-800, #3D3C3C)",
                fontWeight: "400",
                whiteSpace: "nowrap",
                textAlign: "center",
                "@media (max-width: 991px)": {
                  marginTop: "40px",
                  whiteSpace: "initial",
                },
              }}
            >
              <div
                css={{
                  alignSelf: "stretch",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "13px",
                  fontSize: "36px",
                  "@media (max-width: 991px)": {
                    whiteSpace: "initial",
                  },
                  padding: "3px 0",
                }}
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29c30db2c892c633f13806e466f07b450ffe2c40dcaed5c4a2d577ee5cdac242?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                  css={{
                    aspectRatio: "0.73",
                    objectFit: "auto",
                    objectPosition: "center",
                    width: "27px",
                  }}
                />
                <div
                  css={{
                    fontFamily: "Unica One, sans-serif",
                    flexGrow: "1",
                    "@media (max-width: 991px)": {
                      whiteSpace: "initial",
                    },
                    margin: "auto 0",
                  }}
                >
                  Trending Books
                </div>
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b35125abe1391634cecfada3c0a2ed256cf429114446fd74e5a3c4f473824d4e?apiKey=12a7be855aa34cb198eafabbae79d58a&"
                css={{
                  aspectRatio: "0.67",
                  objectFit: "auto",
                  objectPosition: "center",
                  width: "200px",
                  boxShadow: "10px 12px 10px -6px rgba(61, 60, 60, 0.36)",
                  marginTop: "18px",
                  maxWidth: "100%",
                }}
              />
              <div
                css={{
                  fontFamily: "Syne, sans-serif",
                  marginTop: "19px",
                }}
              >
                Momotaro
              </div>
              <div
                css={{
                  fontFamily: "Syne, sans-serif",
                  borderRadius: "20px",
                  border: "2px solid var(--gray-800, #3D3C3C)",
                  backgroundColor: "var(--yellow-500, #FDBF0F)",
                  marginTop: "20px",
                  justifyContent: "center",
                  "@media (max-width: 991px)": {
                    whiteSpace: "initial",
                    padding: "0 20px",
                  },
                  padding: "12px 54px",
                }}
              >
                作成する
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  Toppage.propTypes = {
    selectToppage: PropTypes.func.isRequired,
  };
};

export default Toppage;
