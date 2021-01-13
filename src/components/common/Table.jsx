import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: theme.typography.pxToRem(13),
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: 10,
        width: "30%",
    },
    value: {
        fontSize: theme.typography.pxToRem(13),
        marginBottom: 10,
    },
}));

const Table = ({ columns, id }) => {
    const classes = useStyles();
    return (
        <table>
            <tbody>
                {columns.map((column) => {
                    return (
                        <tr key={`${id}_${column.title}`}>
                            <td className={classes.title}>{column.title}</td>
                            <td className={classes.value}>{column.value}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
