import React, { Component } from "react";
import { connect } from "react-redux";

import Message, { MessageType } from "components/Message";

import { Container } from "./styles";

interface ConversationContainerProps {
  readonly messages: MessageType[];
}
class ConversationContainer extends Component<ConversationContainerProps> {
  constructor(props: ConversationContainerProps) {
    super(props);
  }

  public render () {
    return(
      <Container>
        {this.props.messages && this.props.messages.map((message) => (
          <Message
            {...message}
            key={message.id}
          />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(ConversationContainer);
