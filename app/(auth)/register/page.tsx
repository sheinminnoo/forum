import Image from "next/image";
import Link from "next/link";

import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthForm from "../components/AuthForm";
import ROUTES from "@/routes";

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white">
      <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
        {/* LEFT */}
        <section className="relative flex min-h-screen items-center justify-center bg-[#071735] px-6 py-10 lg:px-12">
          <div className="absolute inset-0 bg-gradient-to-b from-[#071a3b] via-[#071735] to-[#06132e]" />

          <div className="relative w-full max-w-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Tempest <span className="text-[#0B84D9]">Code</span> Forum
              </h1>
            </div>

            <p className="mt-8 max-w-[58ch] text-base leading-7 text-white/85">
              A modern community built for{" "}
              <span className="font-medium text-white">developers</span> to ask
              questions, share knowledge, and discuss{" "}
              <span className="font-medium text-[#0B84D9]">
                real-world coding problems
              </span>
              .
            </p>

            <p className="mt-3 max-w-[58ch] text-sm leading-6 text-white/60">
              Create an account to join discussions, follow topics, and build
              your profile.
            </p>

            <div className="mt-6">
              <Link
                href={ROUTES.LOGIN}
                className="inline-flex w-full items-center justify-center rounded-md border border-[#0B84D9] bg-transparent px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-[#0B84D9]/10"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </section>

        {/* RIGHT */}
        <section className="flex min-h-screen items-center justify-center bg-[#030315] px-6 py-10 lg:px-12">
          <div className="w-full max-w-xl">
            <div className="rounded-2xl bg-[#05062A]/60 p-8 ring-1 ring-white/5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]">
              <h2 className="text-center text-lg font-semibold text-white/90">
                Create your account
              </h2>

              <div className="mt-8 space-y-5">
                <Input
                  id="name"
                  type="text"
                  label="Full Name"
                  placeholder="Enter your name"
                />

                <Input
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                />

                <Input
                  id="password"
                  type="password"
                  label="Password"
                  placeholder="Create a password"
                />

                <Input
                  id="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                />

                <Button variant="primary">Create account</Button>

                <AuthForm />

                <p className="pt-2 text-center text-xs text-white/50">
                  Already have an account?{" "}
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-white/90 underline underline-offset-4"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-white/40">
              By creating an account, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
