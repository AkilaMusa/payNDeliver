import { Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      sx={{
        boxShadow: "none !important",
        borderRadius: "12px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "divider",
        py: "10px",
        mb: "20px",
        textAlign: "center",
      }}
    >
      <Typography>
        <span style={{ color: "#027edd" }}></span>
        &copy;
        {new Date().getFullYear()}
      </Typography>
    </Paper>
  );
};

export default Footer;
