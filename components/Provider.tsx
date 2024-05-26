"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type ProviderProps = {
  children: React.ReactNode;
  session?: Session;
};

const Provider = ({ children, session }: ProviderProps) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
