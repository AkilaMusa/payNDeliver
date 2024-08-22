import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItemCollapse = ({ name, icon, url, subLinks }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (subLinks) {
      subLinks.forEach((link) => {
        if (pathname === link.url) {
          setOpen(true);
        }
      });
    }
  }, [pathname, subLinks]);

  const CustomListItemText = styled(ListItemText)({
    fontSize: "10px !important",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      border: "2px solid #027edd",
      top: "50%",
      left: "-20px",
      transform: "translateY(-50%)",
    },
  });

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          "&:hover": { backgroundColor: "sidebar.hoverBg" },
          paddingY: "8px",
          paddingX: "24px",
        }}
      >
        <ListItemIcon sx={{ color: "sidebar.textColor" }}>{icon}</ListItemIcon>
        <ListItemText primary={name} sx={{ ml: "-10px" }} />
        {subLinks ? open ? <FiChevronUp /> : <FiChevronDown /> : null}
      </ListItemButton>
      {subLinks && (
        <Collapse in={open} timeout="auto">
          <List>
            {subLinks.map(({ name, url }, index) =>
              url ? ( // Ensure url is defined before rendering Link
                <Link href={url} style={{ textDecoration: "none" }} key={index}>
                  <ListItemButton
                    className={`linkBtn sub-link ${
                      pathname === url ? "active" : ""
                    }`}
                    sx={{
                      "&:hover": { backgroundColor: "sidebar.hoverBg" },
                      paddingY: "8px",
                      paddingLeft: "70px",
                    }}
                  >
                    <CustomListItemText
                      primary={name}
                      sx={{
                        color: "sidebar.textColor",
                      }}
                    />
                  </ListItemButton>
                </Link>
              ) : null
            )}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SidebarItemCollapse;
