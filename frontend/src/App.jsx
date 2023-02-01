import Navbar from "@components/Navbar";
import { Button } from "@material-tailwind/react";
import { UserContextProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col justify-between items-center w-full">
        <Navbar />
        <h1 className="text-3xl font-bold underline text-yellow-500	bg-red-500	">
          Hello world!
        </h1>
        <Button className="bg-indigo-400">Button</Button>
      </div>
    </UserContextProvider>
  );
}
