import React from "react";
import {
    AccordionDetails as MUIAccordionDetails,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import DetailsTable from "./DetailsTable";

const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.down("xs")]: { margin: "auto", width: "90%" },
        margin: 10,
        width: "80%",
    },
    text: {
        fontSize: theme.typography.pxToRem(13),
        marginBottom: 10,
    },
    summaryText: {
        fontSize: theme.typography.pxToRem(16),
    },
}));

const AccordionDetail = ({ data }) => {
    const classes = useStyles();
    const {
        movie_name,
        url,
        year,
        censor_rating,
        summary,
        genres,
        release_date,
        movie_length,
        poster_image,
    } = data;

    return (
        <MUIAccordionDetails>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <img
                        src={poster_image}
                        alt={`${movie_name} poster`}
                        className={classes.image}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography className={classes.text}>
                        {`${censor_rating} | ${year} | ${movie_length} | ${genres
                            .filter((genre) => {
                                return genre !== " ";
                            })
                            .join(", ")} | ${release_date} | `}
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            Link
                        </a>
                    </Typography>
                    <Typography className={classes.summaryText}>
                        {summary}
                    </Typography>
                    <DetailsTable data={data} />
                </Grid>
            </Grid>
        </MUIAccordionDetails>
    );
};

export default AccordionDetail;
