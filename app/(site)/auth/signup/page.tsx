import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an account | Private Server",

  // other metadata
  description: "Create an account to access Private Server",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
