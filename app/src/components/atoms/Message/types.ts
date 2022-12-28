export interface MessageProps {
  message: string;
  date: Date;
  username: string;
  direction?: "left" | "right";
}
