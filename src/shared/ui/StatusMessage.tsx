import styled from "styled-components";

const Message = styled.p`
  padding-top: 6px;
  padding-left: 8px;
  color: blue;
  font-size: 16px;
`;

const Error = styled.p`
  padding-top: 6px;
  padding-left: 8px;
  color: red;
  font-size: 16px;
`;

const StatusMessage: React.FC<{
  emailStatus: string;
  emailError: string | null;
}> = ({ emailStatus, emailError }) => {
  if (emailStatus === "loading") return <Message>Sending...</Message>;
  if (emailError) return <Error>Error: {emailError}</Error>;
  if (emailStatus === "succeeded")
    return <Message>Email sent successfully!</Message>;
  return null;
};

export default StatusMessage;
