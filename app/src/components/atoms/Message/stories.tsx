import { ComponentStory, ComponentMeta } from "@storybook/react";

import Message from ".";

export default {
  title: "Atoms/Message",
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  date: new Date(),
  username: "Adrian",
};
