import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola a todos</h1>
      <h2 className={titleFont.className}>Hola a todos 2</h2>
    </main>
  );
}
