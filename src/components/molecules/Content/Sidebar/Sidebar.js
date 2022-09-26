import React from "react";
import StatusIcon from "../../../atoms/StatusIcon/StatusIcon";
import Task from "../../../atoms/Task/Task";
import { StyledSidebar } from "./Sidebar.styles";
const Sidebar = () => (
  <StyledSidebar>
    <StatusIcon />
    <Task />
  </StyledSidebar>
);
export default Sidebar;
