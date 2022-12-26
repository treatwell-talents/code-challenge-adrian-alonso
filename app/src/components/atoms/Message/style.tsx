import styled from "styled-components";
import { ThemeComponent } from "theme/theme";

export const Container = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  gap: 5px;
`;

export const MessageUsername = styled.p`
  font-weight: bold;
  font-size: 12px;
`;
export const Message = styled.p`
  display: flex;
  font-size: 14px;
`;

export const MessageHolder = styled.div`
  width: 100%;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  background: ${({ theme }: ThemeComponent) => theme.colors.vividPurple};
`;

export const Hour = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

export const User = styled.div`
  background: ${({ theme }: ThemeComponent) => theme.colors.vividCyan};
  min-width: 30px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
`;
