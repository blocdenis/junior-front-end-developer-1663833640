import React from "react";
import { GlobalStyle } from "../assets/GlobalStyles/GlobalStyle";
import ContentWrapper from "../components/molecules/Content/ContentWrapper/ContentWrapper";
import Header from "../components/molecules/Header/Header";
// import Window from "../components/organisms/Window";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentWrapper />
    </>
  );
};

export default Root;
