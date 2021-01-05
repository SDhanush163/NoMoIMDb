import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
    AppBar,
    IconButton,
    makeStyles,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import MovieIcon from "@material-ui/icons/Movie";
import Drawer from "./common/Drawer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 70,
    },
    header: {
        background: "white",
        boxShadow: "0px 0px 0px 0px",
        color: theme.palette.type === "light" ? "black" : "white",
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

const NavBar = ({ appTheme, baseURL, history, location }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    let [pages, setPages] = useState([
        {
            pageName: "Home",
            pageURL: "/",
            pageIcon: <HomeIcon />,
            selected:
                location.pathname === `${baseURL}` ||
                location.pathname === `${baseURL}/`
                    ? true
                    : false,
        },
        {
            pageName: "Movies",
            pageURL: "/movies",
            pageIcon: <MovieIcon />,
            selected: location.pathname === `${baseURL}/movies` ? true : false,
        },
    ]);

    const handleDrawer = (event) => {
        setAnchorEl("open");
    };

    const handleDrawerClose = () => {
        setAnchorEl(null);
    };

    const handlePageChange = (pageURL, pageName) => {
        let newpages = [...pages];
        for (var i in newpages) {
            newpages[i].selected = false;
            if (newpages[i].pageName === pageName) newpages[i].selected = true;
        }
        setPages(pages);

        history.push(`${baseURL}${pageURL}`);
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.header}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        onClick={() => handlePageChange("/")}
                    >
                        Placeholder
                    </Typography>
                    {isMobile ? (
                        <div>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                open={open}
                                handleOpen={handleDrawer}
                                handleClose={handleDrawerClose}
                                pages={pages}
                                onSelectPage={(url) => handlePageChange(url)}
                            />
                        </div>
                    ) : (
                        <div>
                            {pages.map((page) => (
                                <TooltipWithStyles
                                    key={page.pageName}
                                    title={page.pageName}
                                >
                                    <IconButton
                                        color={
                                            !page.selected
                                                ? "inherit"
                                                : "primary"
                                        }
                                        className={classes.menuButton}
                                        onClick={() =>
                                            handlePageChange(
                                                page.pageURL,
                                                page.pageName
                                            )
                                        }
                                    >
                                        {page.pageIcon}
                                    </IconButton>
                                </TooltipWithStyles>
                            ))}
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(NavBar);
