import React, { Component } from "react"

import ConversationContainer from "containers/ConversationContainer"
import NewMessageContainer from "containers/NewMessageContainer"
import Sidebar from "containers/Sidebar"

import { Container, MessagesContainer } from "styles"

class App extends Component {
  public render() {
    return (
      <Container>
        <Sidebar>Users</Sidebar>
        <MessagesContainer>
          <ConversationContainer>Messages list</ConversationContainer>
          <NewMessageContainer>
            New message
          </NewMessageContainer>
        </MessagesContainer>
      </Container>
    );
  }
}

export default App
