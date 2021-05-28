import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  subHeading: {
    fontSize: theme.typography.pxToRem(12),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "100%",
  },
  helper: {
    borderLeft: `3px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
    marginLeft: 20,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Experience = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Typography className="line__tittle">Experiência</Typography>
      <Container maxWidth="md">
        <div className={classes.root}>
          {/* Beta Sistemas */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Beta Sistemas
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography
                  className={classes.subHeading}
                  style={{ textAlign: "center" }}
                >
                  maio 2021 - atual
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography variant="primary">
                Desenvolvedor Front-end Jr
              </Typography>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Criar websites, landing pages, hotsites, SPA, blogs ou
                  aplicações web otimizadas e responsivas. Realizar a manutenção
                  e melhoria constante dessas plataformas, otimizar aplicações
                  para garantir usabilidade e responsividade mantendo o bom
                  funcionamento em diferentes navegadores e dispositivos.
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            {/* <Divider /> */}
          </Accordion>

          {/* Ramiro Campelo  */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Ramiro Campelo Comércio de Utilidades Ltda
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography
                  className={classes.subHeading}
                  style={{ textAlign: "center" }}
                >
                  janeiro 2021 - atual
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography variant="primary">
                Assistente de Projetos - TI
              </Typography>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Identificar inconsistências para o Analista, realizar
                  atividades relacionadas a coleta de dados utilizando consultas
                  SQL, realizar importação de dados utilizando Report Builder,
                  implantação e homologação de sistemas, reportar resultados
                  para liderança do projeto, realizar cronograma, suporte e
                  correções de incidentes dos sistemas e aplicativos de
                  desenvolvimento interno.
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            {/* <Divider /> */}
          </Accordion>

          {/* COREN/BA  */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Conselho Regional de Enfermagem da Bahia
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography
                  className={classes.subHeading}
                  style={{ textAlign: "center" }}
                >
                  agosto 2019 - janeiro 2021
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography variant="primary">Suporte TI - Estágio</Typography>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Auxiliar no suporte e manutenção de micros, programação de
                  micros, internet, rede local, suporte a redes e manutenção
                  física e lógica, suporte técnico em impressoras,
                  desenvolvimento web.
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            {/* <Divider /> */}
          </Accordion>

          {/* Colegio 3º Milênio  */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Axé Cultura e Lazer LTDA (Colégio 3º Milênio)
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography
                  className={classes.subHeading}
                  style={{ textAlign: "center" }}
                >
                  junho 2019 - agosto 2019
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography variant="primary">Suporte TI - Estágio</Typography>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Auxiliar no suporte e manutenção de micros, programação de
                  micros, internet, digitação, gerenciamento de rede social,
                  rede local, suporte a redes e manutenção física e lógica,
                  ministração de aulas de informática sobre manuseio de
                  dispositivos móveis e segurança básica do ensino fundamental
                  ao 3º ano do ensino médio.
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            {/* <Divider /> */}
          </Accordion>

          {/* Techserv  */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  Techserv Serviços Prediais LTDA
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography
                  className={classes.subHeading}
                  style={{ textAlign: "center" }}
                >
                  agosto 2013 - novembro 2014
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography variant="primary">Supervisor Operacional</Typography>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Organização de documentos operacionais, atendimento telefônico
                  e presencial, gerência de funcionários, controle de planilhas
                  e supervisão de folha de ponto.
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            {/* <Divider /> */}
          </Accordion>

          {/* WorldService  */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>
                  World Service Terceirização LTDA
                </Typography>
              </div>
              <div className={classes.column}>
                <Typography
                  className={classes.subHeading}
                  style={{ textAlign: "center" }}
                >
                  outubro 2011 - agosto 2013
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography variant="primary">Supervisor Operacional</Typography>
              <div className={clsx(classes.column, classes.helper)}>
                <Typography variant="caption">
                  Organização de documentos operacionais, atendimento telefônico
                  e presencial, gerência de funcionários, controle de planilhas
                  e supervisão de folha de ponto.
                  <br />
                </Typography>
              </div>
            </AccordionDetails>
            {/* <Divider /> */}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
