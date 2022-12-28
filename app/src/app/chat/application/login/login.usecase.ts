import LoginRepository from "app/chat/domain/login.repository";

export default class LoginUseCase {
  constructor(private readonly repository: LoginRepository) {}
  execute(username: string) {
    this.repository.sign(username);
  }
}
