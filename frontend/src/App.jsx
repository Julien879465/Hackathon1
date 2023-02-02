import { UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home.jsx";


export default function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col justify-between items-center w-full">
        <h1 className="text-3xl font-bold underline text-yellow-500	bg-red-500	">
         
        </h1>
        <Home />
      </div>
     
    </UserContextProvider>
  );
}
