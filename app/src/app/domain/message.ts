class Message {
  constructor(
    private readonly sended: Date,
    private readonly message: string,
    private readonly author: string,
  ) {}
}

export default Message;
