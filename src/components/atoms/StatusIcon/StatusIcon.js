import React from "react";
import { ReactComponent as SuccessIcon } from "../../../assets/icons/success.svg";
import { StyledStatusIcon } from "./StatusIcon.styles";

const StatusIcon = () => (
  <StyledStatusIcon>
    <SuccessIcon />
  </StyledStatusIcon>
);
export default StatusIcon;
