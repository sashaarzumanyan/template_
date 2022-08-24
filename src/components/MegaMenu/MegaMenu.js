import { Popover } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useState, useRef } from "react";


const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  popoverContent: {
    pointerEvents: "auto",
    width: "100%"
  },
}));

const MegaMenu = ({popoverLeave, popoverEnter, popoverAnchor, openedPopover}) => {
  
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
        sx={{width: "100%"}}
        open={openedPopover}
        anchorReference="anchorPosition"
        anchorPosition={{top:200, left: 0}}
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
        <div style={{width: "100%" , height: "200px", }}>My popover content...</div>
      </Popover>
    </div>
  );
};

export default MegaMenu;
