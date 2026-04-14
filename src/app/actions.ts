"use server";

import { cookies } from "next/headers";

export async function setSecret(secret:string) {
  (await cookies()).set("secret", secret, {
    httpOnly: true,
    secure: true,
    path: "/",
  });
};

export async function getSecret() {
  let c = await cookies();
  let secret = await c.get("secret");
  return secret?.value;
};
