"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {
  return (
    <button onClick={() => signIn("google")} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;