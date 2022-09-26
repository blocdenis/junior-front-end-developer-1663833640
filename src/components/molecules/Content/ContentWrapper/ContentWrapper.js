import React from "react";
import StatusIcon from "../../../atoms/StatusIcon/StatusIcon";
import Task from "../../../atoms/Task/Task";
import Sidebar from "../Sidebar/Sidebar";
// import { Wrapper } from "../Sidebar/Sidebar.styles";
import { StyledContentWrapper } from "./ContentWrapper.styles";
const ContentWrapper = () => (
  <StyledContentWrapper>
    {/* <Wrapper> */}
    <Sidebar />
    <Sidebar />
    <Sidebar />

    {/* </Wrapper> */}
  </StyledContentWrapper>
);
export default ContentWrapper;
