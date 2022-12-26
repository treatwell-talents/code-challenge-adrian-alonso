import { ComponentStory, ComponentMeta } from "@storybook/react";

import ChatForm from "./index";

export default {
  title: "Molecules/ChatForm",
  component: ChatForm,
} as ComponentMeta<typeof ChatForm>;

const Template: ComponentStory<typeof ChatForm> = (args) => (
  <ChatForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Username",
};
