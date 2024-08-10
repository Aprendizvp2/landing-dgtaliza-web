import { Button, Drawer, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logoWhite from "../../assets/img/logo-dgtaliza-white.png";

interface MenuDrawerProps {
  open: boolean;
  toggleMenuDrawer: () => void;
}

export default function MenuDrawer({
  open,
  toggleMenuDrawer,
}: MenuDrawerProps) {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawer}>
      <Paper
        sx={{
          width: 320,
          height: "100%",
          borderRadius: 0,
        }}
        className="flex flex-col justify-between"
      >
        <div className="flex justify-between items-center p-10">
         
          <IconButton onClick={toggleMenuDrawer}>
            <CloseIcon sx={{ color: "black" }} fontSize="large" />
          </IconButton>
        </div>
        <div className="flex flex-col items-start p-10">
          <Button
            sx={{
              color: "black",
              marginTop: 2,
              marginBottom: 2,
              fontSize: 20,
            }}
            href="#home"
          >
            Inicio
          </Button>
          <div
            style={{
              color: "black",
              width: "100%",
              borderBottom: "2px solid",
            }}
          />
          <Button
            sx={{
              color: "black",
              marginTop: 2,
              marginBottom: 2,
              fontSize: 20,
            }}
            href="#services"
          >
            Servicios
          </Button>
          <div
            style={{
              color: "black",
              width: "100%",
              borderBottom: "2px solid",
            }}
          />
          <Button
            sx={{
              color: "black",
              marginTop: 2,
              marginBottom: 2,
              fontSize: 20,
            }}
            href="#about"
          >
            Clientes
          </Button>
          <div
            style={{
              color: "black",
              width: "100%",
              borderBottom: "2px solid",
            }}
          />
          <Button
            sx={{
              color: "black",
              marginTop: 2,
              marginBottom: 2,
              fontSize: 20,
            }}
            href="#about"
          >
            Nosotros
          </Button>
          <div
            style={{
              color: "black",
              width: "100%",
              borderBottom: "2px solid",
            }}
          />
          <Button
            sx={{
              color: "black",
              marginTop: 2,
              marginBottom: 2,
              fontSize: 20,
            }}
            href="#contact"
          >
            Contáctanos
          </Button>
        </div>
        <div className="flex justify-center mt-auto mb-4">
          <img src={logoWhite} className="w-80" alt="icon" />
        </div>
      </Paper>
    </Drawer>
  );
}
