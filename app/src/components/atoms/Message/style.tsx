import styled from "styled-components";
import { ThemeComponent } from "theme/theme";

type ContainerProps = {
  $direction: "left" | "right";
};

type MessageHolderProps = {
  $color: "purple" | "cyan";
  $isRecent: boolean;
} & ThemeComponent;

export const Container = styled.div<ContainerProps>`
  display: inline-flex;
  gap: 5px;
  flex-direction: ${({ $direction }: ContainerProps) =>
    $direction === "right" ? "row" : "row-reverse"};
  justify-content: "flex-end";
`;

export const MessageUsername = styled.p`
  font-weight: bold;
  font-size: 12px;
`;
export const Message = styled.p`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;

export const MessageHolder = styled.div<MessageHolderProps>`
  width: 100%;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  display: flex;
  max-width: 70%;
  flex-direction: column;
  transition: background 1s ease-in;
  background: ${({ $color, theme }: MessageHolderProps) =>
    $color === "purple" ? theme.colors.vividPurple : theme.colors.vividCyan};

  ${({ $isRecent, theme }: MessageHolderProps) =>
    $isRecent &&
    `
    background: ${theme.colors.orange}
  `}
`;

export const Hour = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

export const User = styled.div`
  background: ${({ theme }: ThemeComponent) => theme.colors.blue400};
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
