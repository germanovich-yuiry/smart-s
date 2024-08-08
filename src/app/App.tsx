import styled from "styled-components";
import NewForm from "../widgets/Form";
import PortalModal from "../shared/ui/Portal";

import SendForm from "../widgets/SendForm";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../slices/modalSlice";

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

function App() {
  const open = useSelector((state) => state.modal.open);
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
}

export default App;
