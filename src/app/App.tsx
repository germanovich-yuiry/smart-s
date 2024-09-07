import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { closeModal } from "../slices/modal/modalSlice";

import { selectModalOpen } from "../slices/modal/modalSelectors";

import NewForm from "../widgets/Form";
import SendForm from "../widgets/SendForm";
import PortalModal from "../shared/ui/Portal";

const Container = styled.div`
  min-width: 360px;
  max-width: 1980px;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 32px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-family: "Regular";
`;

const App: React.FC = () => {
  const open = useSelector(selectModalOpen);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Container>
      <NewForm />
      <PortalModal open={open} onClose={closeHandler}>
        <SendForm />
      </PortalModal>
    </Container>
  );
};

export default App;
