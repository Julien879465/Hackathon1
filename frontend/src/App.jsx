import { UserContextProvider } from "./contexts/UserContext";
import Resto from "./pages/Resto";

export default function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center w-full h-full m-auto bg-bg-sable">
        <Resto />
      </div>
    </UserContextProvider>
  );
}
