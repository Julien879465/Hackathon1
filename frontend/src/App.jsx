import Manger from "@pages/Manger";
import { UserContextProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center w-full h-full m-auto bg-bg-sable px-4">
        <Manger />
      </div>
    </UserContextProvider>
  );
}
