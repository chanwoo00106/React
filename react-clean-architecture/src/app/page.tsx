"use client";

import { useEffect, useState } from "react";
import container from "@src/core/DIContainer";
import AuthDI from "@src/data/auth/AuthDI";
import type IAuthDataSource from "@src/data/auth/interface/IAuthDataSource";

export default function Home() {
  const [state, setState] = useState<boolean>(true);

  const run = async () => {
    setState((state) => !state);
    const a = container.get<IAuthDataSource>(AuthDI.AuthDataSource);
    await a.logout();
  };

  useEffect(() => {
    (async () => {
      await run();

      setTimeout(run, 5000);
    })();
  }, []);

  return <main>Hello world {state && "hi"}</main>;
}
