import { ComponentStory, ComponentMeta } from "@storybook/react";

import UsernameForm from "./index";

export default {
  title: "Molecules/UsernameForm",
  component: UsernameForm,
} as ComponentMeta<typeof UsernameForm>;

const Template: ComponentStory<typeof UsernameForm> = (args) => (
  <UsernameForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Username",
};
