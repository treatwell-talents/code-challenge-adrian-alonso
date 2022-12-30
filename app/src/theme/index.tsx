import { GlobalStyle } from "./global";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

interface ThemeConfigProps {
  children: JSX.Element;
}
const ThemeConfig = ({ children }: ThemeConfigProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default ThemeConfig;
