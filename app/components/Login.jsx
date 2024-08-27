"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./loaders/spinner";

const LoginPopup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    try {
      const { email, password } = credentials;
      setLoading(true);
      const login = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (login.error) {
        setLoading(false);
        if (login.error === "CredentialsSignin") {
          setError("Invalid email or password. Please try again.");
        } else {
          setError("An unexpected error occurred. Please try again later.");
        }
        console.log("error:", login.error);
      } else {
        setLoading(false);
        router.push("/sess");
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="py-20">
      <div className="flex h-full items-center justify-center">
        <div className="rounded-lg border border-gray-200 bg-white shadow-md flex-col flex h-full items-center justify-center sm:px-4">
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
              <form
                className="flex flex-col gap-4 pb-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <h1 className="mb-4 text-2xl font-bold dark:text-white">
                  Login
                </h1>
                <div>
                  <div className="mb-2">
                    <label className="text-sm font-medium " htmlFor="email">
                      Email:
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        value={credentials.email}
                        onChange={handleInputChange}
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <label className="text-sm font-medium" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        value={credentials.password}
                        onChange={handleInputChange}
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50  focus:border-cyan-500 focus:ring-cyan-500 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        id="password"
                        type="password"
                        name="password"
                        required
                      />
                    </div>
                  </div>
                  <p className="text-red-500">{error}</p>

                  <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">
                    Forgot password?
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleSignIn}
                    disabled={loading}
                    type="submit"
                    className={`w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      loading
                        ? "opacity-80 cursor-not-allowed hover:bg-blue-600"
                        : ""
                    }`}
                  >
                    {loading ? (
                      <span className="inline-flex items-center space-x-2">
                        <div className="flex items-center justify-center pb-4">
                          {/* <span className="mx-4">Signing in...</span> */}
                          <Spinner />
                        </div>
                      </span>
                    ) : (
                      "Sign in"
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      signIn("google", { callbackUrl: "/dashboard" })
                    }
                    className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100  border border-gray-200  rounded-lg"
                  >
                    <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                      {/* <GoogleIcon /> */}
                      Sign in with Google
                    </span>
                  </button>
                  <button
                    type="button"
                    className="transition-colors focus:ring-2 p-0.5 disabled:cursor-not-allowed bg-white hover:bg-gray-100 border border-gray-200  rounded-lg"
                  >
                    {/* <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base">
                      <FacebookIcon />
                      Sign in with Facebook
                    </span> */}
                  </button>
                </div>
              </form>
              <div className="min-w-[270px]">
                <div className="mt-4 text-center">
                  New user?
                  <Link
                    className="text-blue-500 underline hover:text-blue-600"
                    href="/signup"
                  >
                    Create account here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
