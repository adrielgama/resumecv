import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Typography className="line__tittle">Sobre mim</Typography>
      <Container maxWidth="md" className={classes.containerInfo}>
        <List className={classes.root}>
          <ListItem alignItems="center" id="aboutme">
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Estudante do curso de Análise e Desenvolvimento de Sistemas
                    - IFBA. Tenho 27 anos, solteiro e moro em Salvador/BA. Com
                    foco e paixão em tecnologias de desenvolvimento web,
                    atualmente trabalho com HTML, CSS, e Javascript. Iniciei os
                    estudos aprofundados na tecnologia ReactJS e futuramente em
                    ReactNative. Também possuo experiência com versionamento de
                    código utilizando Git e Github, experiência com SQL Server,
                    além de um conhecimento avançado na ferramenta de edição de
                    imagens Photoshop e intermediário com Figma. Sempre em busca
                    de novos desafios, e colocar uma ótima experiência de
                    usuário em cada projeto desenvolvido.
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

export default AboutMe;
