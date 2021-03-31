import React from "react";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
`;

const Loader = () => {
  return <FadeLoader color="#0C8671" loading="true" css={override} size={30} />;
};

export default Loader;
