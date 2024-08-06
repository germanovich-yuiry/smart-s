import styled from "styled-components";
import Form from "../widgets/Form";

const Container = styled.div`
  min-width: 360px;
  max-width: 1980px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Regular";
`;

function App() {
  return (
    <Container>
      <Form />
    </Container>
  );
}

export default App;
