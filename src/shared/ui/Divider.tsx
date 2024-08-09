import styled from "styled-components";
import { FC } from "react";

const StyledDivider = styled.div`
  height: 0.5px;
  background-color: black;
  opacity: 0.2;
  margin-bottom: 28px;
`;

const Divider: FC = () => {
  return <StyledDivider />;
};

export default Divider;
