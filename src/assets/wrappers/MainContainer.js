import styled from "styled-components";

const Wrapper = styled.section`
  width: 75vw;
  background-color: #121212;
  border-radius: 7px;
  margin:15px 10px 0 5px;

  .header {
    display: flex;
    justify-content: space-between;
    background-color: #0a0a0a;
    border-radius: 7px 7px 0 0;
  }
  .header > * {
    padding: 20px;
  }
`;

export default Wrapper;
