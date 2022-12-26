import styled from "styled-components";
import { ThemeComponent } from "theme/theme";

export const Button = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${({ theme }: ThemeComponent) => theme.colors.blue};
  border-color: ${({ theme }: ThemeComponent) => theme.colors.blue};
  color: white;
  border-radius: 10px;
  padding: 12px 32px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${({ theme }: ThemeComponent) => theme.colors.blue400};
    border-color: ${({ theme }: ThemeComponent) => theme.colors.blue400};
  }
`;
