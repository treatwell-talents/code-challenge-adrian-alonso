import { addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import contextDecorator from "./contextDecorator";

addDecorator(themeDecorator);
addDecorator(contextDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
