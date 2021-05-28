import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import LoopIcon from "@material-ui/icons/Loop";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BusinessIcon from "@material-ui/icons/Business";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  inline: {
    display: "inline",
  },
}));

const Information = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Typography className="line__tittle">Informações</Typography>

      <Container
        maxWidth="md"
        className={classes.containerInfo}
        id="info__container"
      >
        {/* <  */}
        <List className={classes.root}>
          {/* ITEM 1  */}

          <ListItem alignItems="center">
            <ListItemAvatar>
              <LoopIcon style={{ color: "#455075" }} />
            </ListItemAvatar>
            <ListItemText
              style={{ color: "#ababab" }}
              primary="Status de busca"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Aberto a propostas!
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          {/* ITEM 2  */}
          <ListItem alignItems="center">
            <ListItemAvatar>
              <AttachMoneyIcon style={{ color: "#455075" }} />
            </ListItemAvatar>
            <ListItemText
              style={{ color: "#ababab" }}
              primary="Pretensão salarial"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Entre R$2.000 e R$2.500
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>

        {/* >  */}
        <List className={classes.root}>
          {/* ITEM 3  */}
          <ListItem alignItems="center">
            <ListItemAvatar>
              <BusinessCenterIcon style={{ color: "#455075" }} />
            </ListItemAvatar>
            <ListItemText
              style={{ color: "#ababab" }}
              primary="Tipo(s) de contrato "
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    CLT ou PJ ou Estágio
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>

          {/* ITEM 4  */}
          <ListItem alignItems="center">
            <ListItemAvatar>
              <GTranslateIcon style={{ color: "#455075" }} />
            </ListItemAvatar>
            <ListItemText
              style={{ color: "#ababab" }}
              primary="Nível de Inglês  "
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Nível básico a intermediário
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>

        {/* \/ */}

        <List className={classes.root} id="bottom__info__container">
          {/* ITEM 5  */}
          <ListItem alignItems="center">
            <ListItemAvatar>
              <BusinessIcon style={{ color: "#455075" }} />
            </ListItemAvatar>
            <ListItemText
              style={{ color: "#ababab" }}
              primary="Tenho interesse em trabalhar em "
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Startup ou Pequena/média empresa ou Grande empresa
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
    </div>
  );
};

export default Information;
