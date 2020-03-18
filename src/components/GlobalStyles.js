import React from "react";
import { Global, css } from "@emotion/core";
function GloablStyles() {
  return (
    <Global
      styles={theme => css`
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: ${theme.colors.backroundColor};
          position: relative;
        }
      `}
    />
  );
}

export default GloablStyles;
