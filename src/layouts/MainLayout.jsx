import { Outlet } from "react-router-dom";

import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      {/* <AnnouncementBar /> */}

      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default MainLayout;