import styled from "styled-components";

const FormContainer = styled.div`
  width: 95%;
  height: auto;
  padding: 24px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 1px 8px 2px #00bfff;
`;

const Form = () => {
  return (
    <FormContainer>
      <div className="form-header">
        <h3>Change your private information</h3>
        <p>
          Please read our <span>terms of use</span> to be informed how we manage
          your private data.
        </p>
      </div>
      <form>
        <label>Enter your first name</label>
        <input type="text" />
        <label>Enter your email</label>
        <input type="text" />
        <label>Bio</label>
        <input type="text" />
        <label>Country</label>
        <input type="text" />
        <label>City</label>
        <input type="text" />
        <label>Enter your address</label>
        <input type="text" />
        <div className="form-footer">
          <div className="note">
            You may also consider to update your{" "}
            <span>billing information.</span>
          </div>
          <input type="submit" />
        </div>
      </form>
    </FormContainer>
  );
};

export default Form;
