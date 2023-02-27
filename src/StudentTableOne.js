import React from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
import { Check } from "@mui/icons-material";
import { TextField } from "@aws-amplify/ui-react";

const row = (
    x,
    i,
    header,
    handleRemove,
    startEditing,
    editIdx,
    handleChange,
    stopEditing
) => {
    const currentlyEditing = editIdx === i;
    return(
        <TableRow key={'tr-${i}'} selectable="false">
            {header.map((y, k) => (
                <TableCell key={'trc-${k}'} >
                    {currentlyEditing ? (
                        <TextField
                            name={y.prop}
                            onChange={e => handleChange(e, y.prop, i)}
                            value={x[y.prop]}
                        />
                    ) : (
                        x[y.prop]
                    )}
                </TableCell>
            ))}
            <TableCell>
                {currentlyEditing ? (
                    <Check onClick={() => stopEditing()} />
                ) : (
                    <Edit onClick={() => startEditing(i)} />
                )}
            </TableCell>
            <TableCell>
                <Delete onClick={() => handleRemove(i)} />
            </TableCell>
        </TableRow>
    );
};

export function StudentTable({ data, header, handleRemove, startEditing, editIdx, handleChange, stopEditing}){
    return(
        <Table>
            <TableHead>
                <TableRow>
                    {header.map((x, i) => (
                        <TableCell key={`thc-${i}`}>{x.name}</TableCell>
                    ))}
                    <TableCell />
                    <TableCell />
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((x, i) =>
                    row(
                        x,
                        i,
                        header,
                        handleRemove,
                        startEditing,
                        editIdx,
                        handleChange,
                        stopEditing
                    )
                )}
            </TableBody>
        </Table>
    );
};