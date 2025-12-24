"use client";
import { Bounce } from "react-toastify";

import Button from "@/components/Button";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import ROUTES from "@/routes";

function AuthForm() {
  const OAuthSignIn = async (type: "google" | "github") => {
    try {
      await signIn(type, {
        redirectTo: ROUTES.HOME,
      });
    } catch (e) {
      if (e instanceof Error) {
        toast.warn(e.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  };
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <Button
        onClick={() => OAuthSignIn("google")}
        icon={<FcGoogle size={18} />}
      >
        Login with Google
      </Button>

      <Button
        onClick={() => OAuthSignIn("github")}
        type="submit"
        icon={<FaGithub size={18} />}
      >
        Login with Github
      </Button>
    </div>
  );
}

export default AuthForm;
