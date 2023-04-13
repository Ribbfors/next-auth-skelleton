import Display from "./components/DisplayData";
import Log from "./components/Log";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <h1 className="text-center text-2xl">Next auth Skelleton</h1>
      <Display />
      <Log />
    </main>
  );
}
