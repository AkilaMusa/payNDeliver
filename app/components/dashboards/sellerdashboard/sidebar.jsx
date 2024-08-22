"use client";
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import React from "react";
import { links } from "../../../data/links";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import Link from "next/link";
const Sidebar = ({ window, sideBarWidth, mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <div>
      <Toolbar>
        <img
          src="/images/logo/logo.png"
          alt="Logo"
          className="w-20 h-auto sm:w-24 md:w-32 lg:w-40"
        />

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", ml: 2 }}
        ></Typography>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {/* {links?.map((link, index) =>
          link?.subLinks ? (
            <SidebarItemCollapse {...link} key={index} />
          ) : (
            <SidebarItem {...link} key={index} />
          )
        )} */}

        {links.map((link, index) =>
          link.subLinks ? (
            <SidebarItemCollapse key={index} {...link} />
          ) : (
            <Link
              href={link.url}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText primary={link.name} />
              </ListItemButton>
            </Link>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="border">
      <Box
        component="nav"
        sx={{ width: { md: sideBarWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* For Mobile and Small Sized Tablets. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: sideBarWidth,
              backgroundColor: "sidebar.background",
              color: "sidebar.textColor",
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* For Desktop and large Sized Tablets. */}
        <Drawer
          variant="permanent"
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            "& .MuiDrawer-paper": {
              width: sideBarWidth,
              boxSizing: "border-box",
              borderRight: 0,
              backgroundColor: "sidebar.background",
              color: "sidebar.textColor",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
};

export default Sidebar;
