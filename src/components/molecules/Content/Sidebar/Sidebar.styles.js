import styled from "styled-components";
export const StyledSidebar = styled.li`
  /* width: 16px;
  height: 17.65px;
  top: 27.57px;
  left: 24px;
  position: absolute;
  left: 7.5%;
  right: 87.5%;
  top: 3.84%;
  bottom: 93.7%;
 */

  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
  }
`;
