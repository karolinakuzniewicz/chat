import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export const MessagesContainer = styled.div`
  grid-area: main;
`;
