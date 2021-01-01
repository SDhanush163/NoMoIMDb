import React from "react";
import { withRouter } from "react-router-dom";
import {
    AppBar,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import MovieIcon from "@material-ui/icons/Movie";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    header: {
        background: "transparent",
        color: "black",
        boxShadow: "0px 0px 0px 0px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const useTooltipStyles = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        padding: 10,
    },
}));

function TooltipWithStyles(props) {
    const classes = useTooltipStyles();
    return <Tooltip arrow classes={classes} {...props} />;
}

const NavBar = ({ history }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePageChange = (pageURL) => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => handlePageChange("/")}
                    >
                        Placeholder
                    </Typography>
                    <IconButton color="inherit" className={classes.menuButton}>
                        <Brightness4Icon />
                    </IconButton>
                    {isMobile ? (
                        <div>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => handlePageChange("/")}>
                                    Home
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handlePageChange("/movies")}
                                >
                                    Movies
                                </MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div>
                            <TooltipWithStyles title="Home">
                                <IconButton
                                    color="inherit"
                                    className={classes.menuButton}
                                    onClick={() => handlePageChange("/")}
                                    disableElevation
                                >
                                    <HomeIcon />
                                </IconButton>
                            </TooltipWithStyles>
                            <TooltipWithStyles title="Movies">
                                <IconButton
                                    color="inherit"
                                    className={classes.menuButton}
                                    onClick={() => handlePageChange("/movies")}
                                    disableElevation
                                >
                                    <MovieIcon />
                                </IconButton>
                            </TooltipWithStyles>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(NavBar);
