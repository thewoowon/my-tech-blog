// ActionProvider starter code
class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  createClientMessage: any;
  stateRef: any;
  createCustomMessage: any;
  constructor(
    createChatBotMessage: any,
    setStateFunc: any,
    createClientMessage: any,
    stateRef: any,
    createCustomMessage: any,
    ...rest: any
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
}

export default ActionProvider;
