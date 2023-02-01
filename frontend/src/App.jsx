import Navbar from "@components/Navbar";
import { Button } from "@material-tailwind/react";

export default function App() {
  return (
    <div className="flex flex-col justify-between w-full">
      <Navbar />
      <h1 className="text-3xl font-bold underline text-yellow-500	bg-red-500	">
        Hello world!
      </h1>
      <Button className="bg-indigo-400">Button</Button>
    </div>
  );
}
