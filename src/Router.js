import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import PageNotFound from "./pages/PageNotFound";
import Ending from "./pages/Ending";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
        <Route path="/ending" element={<Ending></Ending>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </HashRouter>
  );
};
export default Router;
