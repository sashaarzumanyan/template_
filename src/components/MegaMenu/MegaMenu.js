import { Button, Popover } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";


const useStyles = makeStyles(theme => ({
    popover: {
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center"
    },
    popoverContent: {
        pointerEvents: "auto",
        width: "100%"
    },
}));

const MegaMenu = ({ popoverLeave, popoverEnter, popoverAnchor, openedPopover, content }) => {

    const { t } = useTranslation();

    const ul_list = t("Industries", { returnObjects: true });
    console.log("aaaaa", ul_list);

    const classes = useStyles();

    return (
        <div>
            {/* <span
        ref={popoverAnchor}
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        Hover this el !
      </span> */}
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.popoverContent
                }}
                sx={{ width: "100%" }}
                open={openedPopover}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 100, left: "auto" }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}
                PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
            >
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                    {ul_list.map((e)=> {
                        return <Button sx={{color: "#042E76", borderColor: "#042E76", margin: '10px 0'}} variant="outlined" href="#contained-buttons">{e.title}</Button>
                    })}
                </div>
            </Popover>
        </div>
    );
};

export default MegaMenu;
