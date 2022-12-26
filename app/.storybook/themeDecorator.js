import React from "react";
import ThemeConfig from "../src/theme/index";

const ThemeDecorator = (storyFn) => <ThemeConfig>{storyFn()}</ThemeConfig>;

export default ThemeDecorator;
