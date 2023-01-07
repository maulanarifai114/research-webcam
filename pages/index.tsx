import { Montserrat } from "@next/font/google";

const primaryFont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={primaryFont.className + " h-full flex items-center justify-center"}>
      <h1 className="text-6xl text-center">WebCam Test</h1>
    </main>
  );
}
