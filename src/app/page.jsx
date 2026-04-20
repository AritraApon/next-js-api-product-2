import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1 className="text-center text-5xl font-bold">hello next js </h1>
   <Button variant="tertiary">Hero</Button>
   <Button variant="danger">Hero</Button>
   </div>
  );
}
