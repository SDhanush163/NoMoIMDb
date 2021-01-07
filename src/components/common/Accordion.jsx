import React from "react";
import {
    Accordion as MUIAccordion,
    AccordionDetails,
    AccordionSummary,
    makeStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    ranking: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "5%",
        flexShrink: 0,
    },
    movieName: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexBasis: "85%",
        flexShrink: 0,
    },
    rating: {
        fontSize: theme.typography.pxToRem(15),
    },
}));

const Accordion = ({ data }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {data.map((item) => {
                const {
                    ranking,
                    movie_name,
                    // url,
                    // year,
                    rating,
                    // vote_count,
                    // summary,
                    // production,
                    // director,
                    // writers,
                    // genres,
                    // release_date,
                    // censor_rating,
                    // movie_length,
                    // country,
                    // language,
                    // budget,
                    // gross_worldwide,
                    // gross_usa,
                    // opening_week_usa,
                } = item;
                return (
                    <MUIAccordion
                        key={movie_name}
                        expanded={expanded === `panel${ranking}`}
                        onChange={handleChange(`panel${ranking}`)}
                    >
                        <AccordionSummary
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.ranking}>
                                {ranking}
                            </Typography>
                            <Typography className={classes.movieName}>
                                {movie_name}
                            </Typography>
                            <Typography className={classes.rating}>
                                {rating}&nbsp;<i className="fa fa-star"></i>
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et
                                quam mattis feugiat. Aliquam eget maximus est,
                                id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </MUIAccordion>
                );
            })}
        </div>
    );
};

export default Accordion;
