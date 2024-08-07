import styled from "styled-components";
import Form from "../widgets/Form";

const Container = styled.div`
  min-width: 360px;
  max-width: 1980px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
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
