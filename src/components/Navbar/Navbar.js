import {
  AppBar,
  Badge,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Demand Corner"
              height="50px"
              className={classes.image}
            />
            Demand Corner
          </Typography>
          <div classes={classes.grow} />
          {location.pathname == "/" && (
            <div classes={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show Cart Items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
