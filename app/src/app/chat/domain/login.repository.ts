import { Optional } from "utils/types";

type Username = string;
interface LoginRepository {
  sign(username: Username): void;
  getSession(): Optional<Username>;
}
export default LoginRepository;
