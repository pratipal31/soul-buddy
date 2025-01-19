/* eslint-disable @typescript-eslint/no-unused-vars */
// app/signup/page.tsx
import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  return (
    <SignUp
      path="/signup"
      routing="path"
      signInUrl="/signin"
      redirectUrl="/user-details" // This will redirect to your form after successful signup
      afterSignUpUrl="/user-details" // Backup redirect URL
    />
  );
}
