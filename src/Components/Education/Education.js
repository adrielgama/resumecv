import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Avatar } from "@material-ui/core";

import IFBA from "../../Images/IFBA.png";

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

const Education = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Typography className="line__tittle">Educação</Typography>

      <Container
        maxWidth="md"
        className={classes.containerInfo}
        id="info__container"
      >
        <List className={classes.root} id="education__container">
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar
                src={IFBA}
                style={{ width: "20vh", height: "auto" }}
                id="logo__ifba"
              />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <h2 style={{ color: "#668fcc" }}>
                    Instituto Federal de Educação, Ciência e Tecnologia da Bahia
                    - IFBA
                  </h2>
                  <br />
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    <h3 style={{ color: "#2f5263" }}>
                      Análise e Desenvolvimento de Sistemas
                    </h3>
                    <h4
                      style={{
                        color: "#7b8488",
                        fontWeight: "normal",
                        fontStyle: "italic",
                      }}
                    >
                      2017.2 - Previsão 2022.2
                    </h4>
                    <br />
                  </Typography>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Capacidade de compreender e dominar o processo de construção
                    de desenvolvimento de software e assim, realizar atividades
                    de análise, especificação, projeto, implementação, teste,
                    suporte e manutenção de sistemas computacionais. Isto se
                    deve refletir em formação prática, com uso de ferramentas e
                    técnicas atualizadas, bem como em um nível de fluência em
                    Língua Inglesa adequado à atuação profissional.
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

export default Education;
