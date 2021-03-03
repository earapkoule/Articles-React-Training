import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from "../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 102,
      textAlign: "center"
  },
    links: {
    marginRight: theme.spacing(2),
    color: theme.palette.header.secondary,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  activeLink:{
    color: theme.palette.header.primary,
    borderTop: '5px solid ' + theme.palette.header.primary,
    padding: '34px 10px 0 10px'
  },
  title: {
    flexGrow: 1,
    
  },navbar:{
      height: 102,
      justifyContent: "center",
   },
    logo: {
      maxWidth: 212,
      marginRight: '10px'
    }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.navbar}>
        <Toolbar>
          <img src={logo} alt="Intrasoft International" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            <NavLink exact to="/" className={classes.links} activeClassName={classes.activeLink}>
              Home
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/lifestyle" className={classes.links} activeClassName={classes.activeLink}>
              Life style
           </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/travel" className={classes.links} activeClassName={classes.activeLink}>
              Travel
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/fashion" className={classes.links} activeClassName={classes.activeLink}>
              Fashion
        </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/gallery" className={classes.links} activeClassName={classes.activeLink}>
              Gallery
        </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/contact" className={classes.links} activeClassName={classes.activeLink}>
              Contact
        </NavLink>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>

  );
};

export default NavBar;
// <ul className={styles.navList}>
// //       <li>

// //       </li>
// //       <li>
// //         <NavLink to="/lifestyle" activeClassName={styles.red}>
// //           Life style
// //         </NavLink>
// //       </li>
// //       <li>
//         <NavLink to="/travel" activeClassName={styles.red}>
//           Travel
//         </NavLink>
// //       </li>
// //       <li>
//         <NavLink to="/fashion" activeClassName={styles.red}>
//           Fashion
//         </NavLink>
// //       </li>
// //       <li>
//         <NavLink to="/gallery" activeClassName={styles.red}>
//           Gallery
//         </NavLink>
// //       </li>
// //       <li>
//         <NavLink to="/contact" activeClassName={styles.red}>
//           Contact
//         </NavLink>
// //       </li>
// //     </ul>