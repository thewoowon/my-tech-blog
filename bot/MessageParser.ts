// MessageParser starter code
class MessageParser {
  actionProvider: any;
  state: any;
  constructor(actionProvider: any, state: any) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message: any) {
    console.log(message);
  }
}

export default MessageParser;
