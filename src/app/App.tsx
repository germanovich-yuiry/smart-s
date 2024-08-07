import styled from "styled-components";
import NewForm from "../widgets/Form";
import PortalModal from "../shared/ui/Portal";

import { useState } from "react";

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
  const [open, setOpen] = useState(true);
  return (
    <Container>
      <NewForm />
      <PortalModal open={open} onClose={() => setOpen(false)}>
        <h1>Note!</h1>
      </PortalModal>
    </Container>
  );
}

export default App;
