import React from "react";
import { Accordion as MUIAccordion, makeStyles } from "@material-ui/core";
import AccordionSummary from "./AccordionSummary";
import AccordionDetail from "./AccordionDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        margin: "0 auto",
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
                const { ranking, movie_name } = item;

                return (
                    <MUIAccordion
                        key={movie_name}
                        expanded={expanded === `panel${ranking}`}
                        onChange={handleChange(`panel${ranking}`)}
                    >
                        <AccordionSummary data={item} />
                        <AccordionDetail data={item} />
                    </MUIAccordion>
                );
            })}
        </div>
    );
};

export default Accordion;
