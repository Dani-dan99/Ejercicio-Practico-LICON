import { titleFont } from "@/config/fonts";
import Image from "next/image";
import { Card } from "@/components";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card
        title="Ejercicio Práctico"
        subtitle="Check the status of your task below:"
        className="mt-auto mb-2 px-0 sm:px-20"
      />
    </div>
  );
}
