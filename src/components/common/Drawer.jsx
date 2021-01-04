import React from "react";
import {
    SwipeableDrawer as MUIDrawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    list: {
        width: 200,
    },
});

const Drawer = ({ open, pages, handleOpen, handleClose, onSelectPage }) => {
    const classes = useStyles();
    return (
        <MUIDrawer
            open={open}
            anchor="right"
            onOpen={handleOpen}
            onClose={handleClose}
        >
            <div className={classes.list} role="presentation">
                <List>
                    {pages.map((item, index) => {
                        const { pageName, pageURL, pageIcon } = item;
                        return (
                            <ListItem
                                onClick={() => onSelectPage(pageURL)}
                                button
                                key={pageName}
                            >
                                <ListItemIcon>{pageIcon}</ListItemIcon>
                                <ListItemText primary={pageName} />
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </MUIDrawer>
    );
};

Drawer.prototype = {
    open: PropTypes.bool.isRequired,
    pages: PropTypes.object.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    onSelectPage: PropTypes.func.isRequired,
};

export default Drawer;
