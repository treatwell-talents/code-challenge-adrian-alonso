import React from "react";
import ChatProvider from "../src/app/chat/ui/context/chat.context";

const ContextDecorator = (storyFn) => <ChatProvider>{storyFn()}</ChatProvider>;

export default ContextDecorator;
