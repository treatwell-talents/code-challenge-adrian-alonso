export interface Theme {
  colors: {
    blue: string;
    blue400: string;
    navy: string;
    navy500: string;
    lightgrey: string;
    vividCyan: string;
    vividPurple: string;
    orange: string;
  };
}

export interface ThemeComponent {
  theme: Theme;
}

const theme: Theme = {
  colors: {
    blue: "#4036ed",
    blue400: "#7972f2",
    navy: "#071948",
    navy500: "#838ca3",
    lightgrey: "#E6E8ED",
    vividCyan: "#0693e3",
    vividPurple: "#9b51e0",
    orange: "#ff5c39",
  },
};

export default theme;
