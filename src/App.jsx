import {useRoutes} from "react-router-dom";
import routes from "./router/index.jsx";
import {Header} from "./components/basic/Header.jsx";

function App() {
    const router = useRoutes(routes);

  return (
    <>
        <Header/>
        {router}
    </>
  )
}

export default App
