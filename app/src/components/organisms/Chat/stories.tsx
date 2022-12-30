import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chat from "./index";
import Message from "app/chat/domain/message";

export default {
  title: "Organisms/Chat",
  component: Chat,
} as ComponentMeta<typeof Chat>;

const Template: ComponentStory<typeof Chat> = (args) => <Chat {...args} />;

const messages: Message[] = [
  Message.create({
    message:
      "Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income",
    author: "Adrian",
  }),
  Message.create({
    message: "Sentiments motionless or principles preference excellence am 😃",
    author: "Adrian",
  }),
  Message.create({
    message: `Goodness doubtful material has denoting suitable she two. 😜 Dear mean she way and poor bred they come. He otherwise me incommode explained so in remaining. Goodness doubtful material has denoting suitable she two. 
      
      😜 Dear mean she way and poor bred they come. He otherwise me incommode explained so in remaining`,
    author: "María",
  }),
  Message.create({
    message:
      "Smiling mention 💩 he in thought equally musical. Wisdom new and valley answer",
    author: "María",
  }),
  Message.create({
    message:
      "High at of in loud rich true. Oh conveying do immediate acuteness in he",
    author: "María",
  }),
];
export const Default = Template.bind({});
Default.args = {
  messages,
};
