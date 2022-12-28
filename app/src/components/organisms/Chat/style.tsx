import styled from "styled-components";
import { ThemeComponent } from "theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Top = styled.div``;

export const Content = styled.div`
  width: 100%;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 80vh;
  overflow-y: scroll;
  background: ${({ theme }: ThemeComponent) => theme.colors.lightgrey};
  > * {
    max-width: 70%;
  }
`;
export const Bottom = styled.div`
  padding: 10px;
`;
