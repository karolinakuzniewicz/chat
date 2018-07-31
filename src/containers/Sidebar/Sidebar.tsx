import React, { Component } from "react";

import { User } from "types/user";

import { Container } from "./styles";

interface SidebarProps {
  readonly users: User[];
}
class Sidebar extends Component<SidebarProps> {
  constructor(props: SidebarProps) {
    super(props);
  }

  public render () {
    return(
      <Container>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default Sidebar
