import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  spacing: {
    paddingBottom: 10,
  },
  codeSkill: {
    color: "#808080",
  },
});

const Skills = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />

      <Typography className="line__tittle">HABILIDADES</Typography>

      <Container maxWidth="md">
        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>HTML5</Typography>
          <Progress percent={90} status="success" />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>CSS3</Typography>
          <Progress percent={90} status="success" />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>
            Javascript + ES6
          </Typography>
          <Progress percent={76} status="success" />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>ReactJS</Typography>
          <Progress percent={50} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Git</Typography>
          <Progress percent={76} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Yarn + npm</Typography>
          <Progress percent={60} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Material-UI</Typography>
          <Progress percent={55} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>SQL</Typography>
          <Progress percent={63} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Java</Typography>
          <Progress percent={12} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>C</Typography>
          <Progress percent={38} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Figma</Typography>
          <Progress percent={80} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Photoshop</Typography>
          <Progress percent={97} status="success" />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Cpanel</Typography>
          <Progress percent={80} status="success" />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Linux</Typography>
          <Progress percent={40} />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Windows</Typography>
          <Progress percent={90} status="success" />
        </div>

        <div className={classes.spacing}>
          <Typography className={classes.codeSkill}>Pacote Office</Typography>
          <Progress percent={90} status="success" />
        </div>
      </Container>
    </div>
  );
};

export default Skills;
