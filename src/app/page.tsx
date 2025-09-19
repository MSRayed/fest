import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full bg-cornell-red">
      <div className="flex justify-around items-center p-10">
        <div>
          <h1 className="text-8xl text-white font-bold">
            SCPSC <br /> Cultural <br /> Fest
          </h1>

          <Button className="text-xl font-bold p-5 mt-10">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
