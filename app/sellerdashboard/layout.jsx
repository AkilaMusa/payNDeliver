"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/dashboards/sellerdashboard/nav";
import Sidebar from "../components/dashboards/sellerdashboard/sidebar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  const sideBarWidth = 250;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar
        sideBarWidth={sideBarWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar
          sideBarWidth={sideBarWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          // className="bg-gray-100"
          sx={{
            flexGrow: 1,
            px: { xs: 1, md: 2 },
            width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
          }}
        >
          {children}
        </Box>
      </Box>
      {/* <Footer />  */}
    </Box>
  );
};

export default Layout;
