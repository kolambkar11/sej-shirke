import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./component/main/Main";
import Notfound from "./component/notfound/Notfound";
import Reels from "./component/reels/Reels";
import Youtube from "./component/youtube/Youtube";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route activeClassName="active_class" exact path="/sej-shirke" element={<Main />}></Route>
          <Route activeClassName="active_class" exact path="/youtube" element={<Youtube />}></Route>
          <Route activeClassName="active_class" exact path="/reels" element={<Reels />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
