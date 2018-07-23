import { Component } from 'react';

import { Container, MessagesContainer, Sidebar } from './styles';

class App extends Component {
  public render() {
    return (
      <Container>
        <Sidebar>Users</Sidebar>
        <MessagesContainer>
          <section id="messages-list">Messages list</section>
          <section id="new-message">New message</section>
        </MessagesContainer>
      </Container>
    );
  }
}

export default App;
