import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import movieDetails from "../../utils/MovieDetailsUtil";
import Table from "./Table";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightBold,
        margin: "10px 0",
    },
}));

const DetailsTable = ({ data }) => {
    const classes = useStyles();
    const { ranking } = data;
    const [detailsColumns, budgetColumns] = movieDetails({ data });

    return (
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Typography className={classes.heading}>Details</Typography>
                <Table columns={detailsColumns} id={ranking} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography className={classes.heading}>Budget</Typography>
                <Table columns={budgetColumns} id={ranking} />
            </Grid>
        </Grid>
    );
};

export default DetailsTable;
