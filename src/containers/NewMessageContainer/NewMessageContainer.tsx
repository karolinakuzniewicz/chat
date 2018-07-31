import React, { Component } from "react";

import { Container } from "./styles";

interface NewMessageContainerProps {
  dispatch: (param1: string, param2: string) => void;
}

class NewMessageContainer extends Component<NewMessageContainerProps> {
  constructor(props: NewMessageContainerProps) {
    super(props);
  };

  private sendMessage = (event): void => {
    if (event.key === "Enter") {
      this.props.dispatch(event.target.value, "Me");
    }
  }

  public render () {
    return(
      <Container>
        <input
          onKeyPress={this.sendMessage}
          type="text"
          placeholder="Type a message..."
        />
      </Container>
    );
  }
};

export default NewMessageContainer;
