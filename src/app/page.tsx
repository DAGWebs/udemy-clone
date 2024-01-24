import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Welcome to the Home Page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
