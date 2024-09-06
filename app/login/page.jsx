"use client";
import LoginModal from "../components/Login";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    router.back();
  };

  return <LoginModal isOpen={true} onClose={handleClose} />;
}
