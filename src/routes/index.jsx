import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";
  
  import Home from "../views/Home";
  import Detail from "../views/Detail";
  import Error404 from "../views/Error404";
  import Profile from "../views/Profile";
  import Info from "../views/Info";
  import Liked from "../views/Liked";
  
  const MyRoutes = () => (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:eventId" element={<Detail />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="my-info" element={<Info />} />
          <Route path="liked-events" element={<Liked />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
  
  export default MyRoutes;