"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "./loaders/spinner";
import { FaGoogle } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const LoginModal = ({ isOpen, onClose }) => {
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
        setError(
          login.error === "CredentialsSignin"
            ? "Invalid email or password"
            : "An unexpected error occurred. Please try again."
        );
        console.error("Login error:", login.error);
      } else {
        onClose();
        router.push("/stores");
      }
    } catch (e) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Sign-in error:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <h1 className="text-2xl font-extrabold text-gray-600 text-center mb-6">
          Sign in
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
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
          <div className="mb-4">
            <input
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 focus:border-cyan-500 focus:ring-cyan-500 dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-sm"
              id="password"
              type="password"
              name="password"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <p className="mb-4 cursor-pointer text-blue-500 hover:text-blue-600">
            Forgot password?
          </p>
          <button
            onClick={handleSignIn}
            disabled={loading}
            type="submit"
            className={`w-full flex items-center justify-center py-2 px-4 border bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-md hover:from-purple-600 hover:to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ${
              loading ? "opacity-80 cursor-not-allowed hover:bg-blue-600" : ""
            }`}
          >
            {loading ? (
              <span className="inline-flex items-center space-x-2">
                <Spinner />
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <div className="mt-6">
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

          <div className="mt-6">
            <button
              onClick={() => signIn("google", { callbackUrl: "/sess" })}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-gradient-to-r from-gray-100 to-gray-200 text-sm font-medium text-gray-500 hover:from-gray-200 hover:to-gray-300 transition duration-150 ease-in-out"
            >
              <FaGoogle className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          New user?
          <Link
            className="mx-1 text-blue-500 underline hover:text-blue-600"
            href="/signup"
          >
            Create account here
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
