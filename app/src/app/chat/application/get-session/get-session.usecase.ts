import LoginRepository from "app/chat/domain/login.repository";
import { Optional } from "utils/types";

export default class GetSessionUseCase {
  constructor(private readonly repository: LoginRepository) {}
  execute(): Optional<string> {
    return this.repository.getSession();
  }
}
