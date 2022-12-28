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

  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: ThemeComponent) => theme.colors.navy};
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }: ThemeComponent) => theme.colors.navy};
  }
`;
export const Bottom = styled.div`
  padding: 10px;
`;
