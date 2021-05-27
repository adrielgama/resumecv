import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

// import Navbar from "../Components/Navbar/Navbar";
import Skills from "../Components/Skills/Skills";
import Information from "../Components/Information/Information";
import Experience from "../Components/Experience/Experience";
import Education from "../Components/Education/Education";
import Certifications from "../Components/Certifications/Certifications";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import LanguageIcon from "@material-ui/icons/Language";
import WorkIcon from "@material-ui/icons/Work";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      height: 0,
      marginLeft: drawerWidth,
      backgroundColor: "white",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: 10,
    marginBottom: 40,
    marginTop: 40,
  },
  subtitle: {
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 40,
    color: "#808080",
    lineHeight: 1.2,
  },
  lists: {
    fontSize: "12px",
    marginTop: 10,
  },
  iconLists: {
    fontSize: 20,
  },
}));

function Index(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Avatar alt="Avatar" src="adriel.jpg" className={classes.large} />
        <Typography variant="h5" gutterBottom align="center">
          Adriel Gama
        </Typography>
        <Typography variant="subtitle" alignCenter className={classes.subtitle}>
          Dev. Júnior | Front-End
          <br />
          Programador Front-end
        </Typography>
      </div>
      <Divider />

      <List component="nav">
        <ListItem className={classes.lists}>
          <ListItemIcon>
            <MailOutlineIcon className={classes.iconLists} />
          </ListItemIcon>
          adrielgama@gmail.com
        </ListItem>

        <ListItem button className={classes.lists}>
          <a
            href="https://api.whatsapp.com/send?phone=5571996559476&text=Ol%C3%A1%2C%20vim%20do%20seu%20curr%C3%ADculo%20online."
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon>
              <WhatsAppIcon className={classes.iconLists} />
            </ListItemIcon>
            (71) 99655-9476
          </a>
        </ListItem>

        <ListItem button className={classes.lists}>
          <a
            href="https://www.linkedin.com/in/adrielgama/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon>
              <LinkedInIcon className={classes.iconLists} />
            </ListItemIcon>
            Ver perfil LinkedIn
          </a>
        </ListItem>

        <ListItem button className={classes.lists}>
          <a
            href="https://github.com/adrielgama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon>
              <GitHubIcon className={classes.iconLists} />
            </ListItemIcon>
            Ver perfil Github
          </a>
        </ListItem>

        <ListItem className={classes.lists}>
          <ListItemIcon>
            <LocationOnIcon className={classes.iconLists} />
          </ListItemIcon>
          Salvador, BA
        </ListItem>

        <ListItem className={classes.lists}>
          <ListItemIcon>
            <WorkIcon className={classes.iconLists} />
          </ListItemIcon>
          Aceito trabalhar remotamente
        </ListItem>
      </List>

      {/* <Divider /> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "#171c27" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Navbar /> */}
        <Skills />
        <div className={classes.toolbar} />
        <Information />
        <div className={classes.toolbar} />
        <Experience />
        <div className={classes.toolbar} />
        <Education />
        <div className={classes.toolbar} />
        <Certifications />
      </main>
    </div>
  );
}

export default Index;
