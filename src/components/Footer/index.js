import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((_theme) => ({
    footer: {
        minHeight: '250px',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 1)',
    },
    innerFooter: {
        margin: '0px 15vw',
        padding: '20px 0',
        '@media (max-width:960px)': {
            margin: '0',
        },
    },
}));

const useStylesFooterTitle = makeStyles((theme) => ({
    title: {
        borderBottom: '2px solid' + theme.palette.text.primary,
        paddingBottom: '5px',
    },
}));

const FooterTitle = ({ title }) => {
    const classes = useStylesFooterTitle();
    return <Typography className={classes.title}>{title}</Typography>;
};

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <div className={classes.innerFooter}>
                <Typography variant="body2" align="left">
                    {`Copyright © ${new Date().getFullYear()}. All rights reserved.`}
                </Typography>
            </div>
        </div>
    );
};

export default Footer;