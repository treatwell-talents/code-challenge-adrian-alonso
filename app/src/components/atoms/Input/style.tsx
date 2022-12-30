import styled from "styled-components";
import { ThemeComponent } from "theme/theme";

export const InputHolder = styled.div`
  position: relative;
  display: flex;
  background: white;
`;

export const Input = styled.input`
  background: transparent;
  padding: 20px 10px 10px 10px;
  outline: 0;
  border: none;
  width: 100%;
  color: ${({ theme }: ThemeComponent) => theme.colors.navy};
  font-weight: bold;
  border: 1px solid ${({ theme }: ThemeComponent) => theme.colors.lightgrey};
  transition: box-shadow 0.3s ease-in-out;

  :hover,
  :focus {
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    outline: 0;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 10px;
  color: ${({ theme }: ThemeComponent) => theme.colors.navy500};
`;
