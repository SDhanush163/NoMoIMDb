import React from "react";
import {
    AccordionSummary as MUIAccordionSummary,
    makeStyles,
    Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
    ranking: {
        fontSize: theme.typography.pxToRem(13),
        flexBasis: "5%",
        flexShrink: 0,
    },
    movieName: {
        fontSize: theme.typography.pxToRem(13),
        [theme.breakpoints.down("xs")]: { flexBasis: "70% " },
        flexBasis: "80%",
        flexShrink: 0,
    },
    rating: {
        fontSize: theme.typography.pxToRem(13),
        color: theme.palette.text.secondary,
    },
}));

const AccordionSummary = ({ data }) => {
    const classes = useStyles();
    const { ranking, movie_name, rating } = data;

    return (
        <MUIAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <Typography className={classes.ranking}>{ranking}</Typography>
            <Typography className={classes.movieName}>{movie_name}</Typography>
            <Typography className={classes.rating}>
                {`${rating} / 10`}&nbsp;
                <i className="fa fa-star"></i>
            </Typography>
        </MUIAccordionSummary>
    );
};

export default AccordionSummary;
