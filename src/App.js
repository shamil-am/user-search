import UsersTablePg from "./pages/UsersTablePg";
import WelcomePg from "./pages/WelcomePg";
import { useContext } from "react";
import { userContext } from "./context/UserContextProvider";

//component
function App() {
  //states
  const { logged } = useContext(userContext);
  //component's return
  return (
    <>
      {logged || <WelcomePg />}
      {logged && <UsersTablePg />}
    </>
  );
}

export default App;
