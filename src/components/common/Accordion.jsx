import React from "react";
import {
    Accordion as MUIAccordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
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
    image: {
        margin: 10,
        width: "80%",
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
                    url,
                    year,
                    rating,
                    // vote_count,
                    summary,
                    // production,
                    // director,
                    // writers,
                    genres,
                    release_date,
                    // censor_rating,
                    movie_length,
                    // country,
                    // language,
                    // budget,
                    // gross_worldwide,
                    // gross_usa,
                    // opening_week_usa,
                    poster_image,
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
                                {`${rating} / 10`}&nbsp;
                                <i className="fa fa-star"></i>
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Grid container>
                                <Grid item xs={4}>
                                    <img
                                        src={poster_image}
                                        alt={`${movie_name} poster`}
                                        className={classes.image}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography>
                                        {`${year} | ${movie_length} | ${genres
                                            .filter((genre) => {
                                                return genre !== " ";
                                            })
                                            .join(", ")} | ${release_date} | `}
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Link
                                        </a>
                                    </Typography>
                                    <Typography>{summary}</Typography>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </MUIAccordion>
                );
            })}
        </div>
    );
};

export default Accordion;
