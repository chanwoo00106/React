"use client";

import { useEffect } from "react";
import container from "@src/core/DIContainer";
import AuthDI from "@src/data/auth/AuthDI";
import type IAuthDataSource from "@src/data/auth/interface/IAuthDataSource";

export default function Home() {
  useEffect(() => {
    const a = container.get<IAuthDataSource>(AuthDI.AuthDataSource);
    a.logout();
  }, []);
  return <main>Hello world</main>;
}
