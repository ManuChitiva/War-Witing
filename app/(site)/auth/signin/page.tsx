import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Private Wow",

  // other metadata
  description: "Server Game world of warcraft",
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
