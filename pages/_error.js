import styled from "styled-components";

const Error = ({ errorCode = 500 }) => {

  return (
    <Wrapper>
      <ErrorCode>{errorCode}</ErrorCode>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  animation: 0.8s 0.8s cubic-bezier(0.19, 1, 0.22, 1) both fadeInHero;
`;

const ErrorCode = styled.h1`
  margin: 0;
  font-family: "Pragmatica Extended Bold", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-weight: normal;
  font-size: 25vw;
  line-height: 0.9;
  color: rgba(54, 43, 72, 0.15);
`;

Error.displayName = "Error";

export default Error;
