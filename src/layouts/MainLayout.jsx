import {
  Outlet,
  ScrollRestoration,
} from "react-router-dom";

import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollManager from "../components/ScrollManager";

function MainLayout() {
  return (
    <>
      {/* <AnnouncementBar /> */}

      <Navbar />
      <Outlet />
      <Footer />
         <ScrollManager />
    </>
  );
}

export default MainLayout;