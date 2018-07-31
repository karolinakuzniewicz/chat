import React, { SFC } from "react"

interface MessageProps {
  readonly message: string
  readonly author: string
}

const Message: SFC<MessageProps> = (props: MessageProps) => (
  <div>
    <p>
      <i>{props.author}</i>: {props.message}
    </p>
  </div>
)

export default Message
