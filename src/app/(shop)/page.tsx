import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>Hola a todos</h1>
      <h2 className={titleFont.className}>Hola a todos 2</h2>
    </div>
  );
}
