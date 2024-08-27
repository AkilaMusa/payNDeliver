"use client"
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./loaders/spinner";
import { FaGoogle } from "react-icons/fa";

const LoginPopup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!credentials.email || !credentials.password) {
      setError("Please fill in all required fields");
      return false;
    }
    setError("");
    return true;
  };

  // const handleSignIn = async () => {
  //   if (!validateForm()) return;

  //   try {
  //     const { email, password } = credentials;
  //     setLoading(true);
  //     const login = await signIn("credentials", {
  //       email:email,
  //       password:password,
  //       redirect: false,
  //     });

  //     if (login.error) {
  //       setLoading(false);
  //       if (login.error === "CredentialsSignin") {
  //         setError(login.error)
  //       } else {
  //         setError("Something went wrong");
  //       }
  //       console.log("error from", login.error);
  //       setError(login.error);

  //     } else {
  //       setLoading(false);
  //       router.push("/sess");
  //     }
  //   } catch (e) {
  //     setError(e.message);
  //     console.log(e.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const handleSignIn = async () => {
    if (!validateForm()) return;
      setLoading(true);
    setError(null); 
    try {
      const { email, password } = credentials;
      const login = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
  
      if (login?.error) {
        setError(login.error === "CredentialsSignin" 
          ? "Invalid email or password" 
          : "An unexpected error occurred. Please try again.");
        console.error("Login error:", login.error);
      } else {
        router.push("/sess");
      }
    } catch (e) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Sign-in error:", e);
    } finally {
      setLoading(false);
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
                <h1 className="text-2xl font-extrabold text-gray-600 text-center mb-6">
                  Sign in
                </h1>

                <div>
                  <div className="mb-2"></div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        value={credentials.email}
                        onChange={handleInputChange}
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-sm"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2"></div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        value={credentials.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50  focus:border-cyan-500 focus:ring-cyan-500 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-sm"
                        id="password"
                        type="password"
                        name="password"
                      />
                    </div>
                  </div>
                  {error && <p className="text-red-500 mt-2">{error}</p>}

                  <p className="mt-2 cursor-pointer text-blue-500 hover:text-blue-600">
                    Forgot password?
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleSignIn}
                    disabled={loading}
                    type="submit"
                    className={`w-full flex items-center justify-center py-2 px-4 border bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-md hover:from-purple-600 hover:to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ${
                      loading
                        ? "opacity-80 cursor-not-allowed hover:bg-blue-600"
                        : ""
                    }`}
                  >
                    {loading ? (
                      <span className="inline-flex items-center space-x-2">
                        <div className="flex items-center justify-center pb-4">
                          <Spinner />
                        </div>
                      </span>
                    ) : (
                      "Sign in"
                    )}
                  </button>
                </div>
              </form>

              <div className="min-w-[270px] mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <button
                    onClick={() => signIn("google", { callbackUrl: "/sess" })}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gradient-to-r from-gray-100 to-gray-200 text-sm font-medium text-gray-500 hover:from-gray-200 hover:to-gray-300 transition duration-150 ease-in-out"
                  >
                    <FaGoogle className="w-5 h-5 mr-2" />
                    Sign in with Google
                  </button>
                </div>
              </div>

              <div className="min-w-[270px] mt-4 text-center">
                New user?
                <Link
                  className="mx-1 text-blue-500 underline hover:text-blue-600"
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
  );
};

export default LoginPopup;