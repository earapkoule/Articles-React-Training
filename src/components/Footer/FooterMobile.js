import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "50px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 1)",

    backgroundColor: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    padding: "30px 21vw",
    "@media (max-width:960px)": {
      padding: "20px",
    },
  },
  innerFooterText: {
    color: theme.palette.text.header,
  },
}));

const useStylesFooterTitle = makeStyles((theme) => ({
  title: {
    fontWeight: theme.typography.titleFontWeight,
    fontSize: theme.typography.titleFontSize,
    borderBottom: "2px solid" + theme.palette.text.primary,
    paddingBottom: "5px",
  },
}));

const FooterTitle = ({ title }) => {
  const classes = useStylesFooterTitle();
  return <Typography className={classes.title}>{title}</Typography>;
};

const FooterMobile = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography
        variant="body2"
        align="left"
        className={classes.innerFooterText}
      >
        {`Team 1`}
        <Divider />
        {`Amarantigos Charalambos - DG 1`}
        <Divider />
        {`Arapkoule Eirini - DG 13`}
        <Divider />
        {`Eythimiou Athanasios - DG 8`}
        <Divider />
        {`Copyright © ${new Date().getFullYear()}. All rights reserved.`}
      </Typography>
    </div>
  );
};

export default FooterMobile;
