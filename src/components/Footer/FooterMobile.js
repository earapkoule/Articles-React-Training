import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        minHeight: '250px',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 1)',
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 21vw',
        '@media (max-width:960px)': {
            padding: '20px',
        },
    },
}));

const useStylesFooterTitle = makeStyles((theme) => ({
    title: {
        fontWeight: theme.typography.titleFontWeight,
        fontSize: theme.typography.titleFontSize,
        borderBottom: '2px solid' + theme.palette.text.primary,
        paddingBottom: '5px',
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
            <Typography variant="body2" align="left">
                {`Copyright © ${new Date().getFullYear()}. All rights reserved.`}
            </Typography>
        </div>
    );
};

export default FooterMobile;
