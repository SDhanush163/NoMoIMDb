import React from "react";
import { makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

const UIPagination = ({ count, page, onPageChange }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="row">
                <Pagination
                    count={count}
                    page={page}
                    shape="rounded"
                    color="primary"
                    showFirstButton
                    showLastButton
                    onChange={(event, value) => onPageChange(event, value)}
                />
            </div>
        </div>
    );
};

export default UIPagination;
