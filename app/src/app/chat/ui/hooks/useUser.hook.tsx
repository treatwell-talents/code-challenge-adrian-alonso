import GetSessionUseCase from "app/chat/application/get-session/get-session.usecase";
import LoginUseCase from "app/chat/application/login/login.usecase";
import SessionStorageLoginRepository from "app/chat/infrastructure/session-storage-login.repository";
import { useEffect, useState } from "react";

const repository = new SessionStorageLoginRepository();

const useUser = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);

  useEffect(() => {
    setUsername(new GetSessionUseCase(repository).execute());
  }, []);

  useEffect(() => {
    if (username) {
      new LoginUseCase(repository).execute(username);
    }
  }, [username]);

  const login = (username: string) => {
    setUsername(username);
  };

  return {
    isLogged: username !== undefined,
    username,
    login,
  };
};

export default useUser;
