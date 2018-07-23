import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "sidebar main";
  grid-template-columns: 1fr 3fr;
  height: 100vh;
  width: 100vw;
`;

export const MessagesContainer = styled.div`
  grid-area: main;
`;
export const Sidebar = styled.div`
  border-right: 1px solid #3f3f3f;
  grid-area: sidebar;
  height: 100%;
  padding: 5px 0 0 5px;
`;
