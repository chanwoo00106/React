"use client";

import AuthSymbols from "@src/data/auth/constants/AuthSymbols";
import LoginRequestDto from "@src/data/auth/dto/request/LoginRequestDto";
import type ILoginUseCase from "@src/data/auth/interface/ILoginUseCase";
import Button from "@src/features/ui/Button";
import Input from "@src/features/ui/Input";
import DIContext from "@src/libs/DIContext";
import { useContext } from "react";

const LoginForm = () => {
  const { container } = useContext(DIContext);

  const submit = async (form: FormData) => {
    const loginUseCase = container?.get<ILoginUseCase>(
      AuthSymbols.LoginUseCase,
    );
    if (!loginUseCase) return;

    ("use server");

    await loginUseCase.execute(
      new LoginRequestDto(
        form.get("email") as string,
        form.get("password") as string,
      ),
    );
  };

  return (
    <form action={submit}>
      <Input name="email" placeholder="이메일" />
      <Input name="password" placeholder="비밀번호" />
      <Button>Submit</Button>
    </form>
  );
};

export default LoginForm;
