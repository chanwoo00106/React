"use client";

import AuthSymbols from "@src/data/auth/constants/AuthSymbols";
import type ILogoutUseCase from "@src/data/auth/interface/ILogoutUseCase";
import Button from "@src/features/ui/Button";
import Input from "@src/features/ui/Input";
import useInjection from "@src/hooks/useInjection";
import { useQuery } from "@tanstack/react-query";

const LoginForm = () => {
  const logoutUseCase = useInjection<ILogoutUseCase>(AuthSymbols.LogoutUseCase);
  useQuery({ queryKey: ["logout"], queryFn: () => logoutUseCase.execute() });

  return (
    <form>
      <Input name="email" placeholder="이메일" />
      <Input name="password" placeholder="비밀번호" />
      <Button>Submit</Button>
    </form>
  );
};

export default LoginForm;
