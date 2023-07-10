import Orders from "./components/main_page/Orders";
import {Route, Routes} from "react-router-dom";

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Orders/>}/>
      </Routes>


  );
}

export default App;
