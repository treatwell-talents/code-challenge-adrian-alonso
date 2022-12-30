import { Optional } from "utils/types";
import LoginRepository from "app/chat/domain/login.repository";

const SESSION_STORAGE_KEY = "username";

export default class SessionStorageLoginRepository implements LoginRepository {
  getSession(): Optional<string> {
    return sessionStorage.getItem(SESSION_STORAGE_KEY) || undefined;
  }
  sign(username: string): void {
    sessionStorage.setItem(SESSION_STORAGE_KEY, username);
  }
}
