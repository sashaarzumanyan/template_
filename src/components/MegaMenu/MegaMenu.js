import { Button, Popover } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPageProps } from "../../redux/actions/setPageInfo";
import barrel from '../../assets/barrel.jpg'
import cargo from '../../assets/cargo.jpg'
import tenderPic from '../../assets/Tender-Participation.jpg'


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

const MegaMenu = ({ popoverLeave, popoverEnter, popoverAnchor, openedPopover, content = [], label }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const classes = useStyles();
    console.log("megaMenu renders")

const imagesArray = [tenderPic, barrel, cargo, barrel ]



    const handleNavigate = (index, e) => {
        label === "services"? navigate('/details') : navigate("procurement")
        dispatch(setPageProps({
            image1:label === "services"? imagesArray[index] : e.image,
            // image2: imagesArray[index+1],
            section: e.section,
            resource: 'Industries'
        }))
    }


    return (
        <>
            {content ? <div>
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
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                        {content.map((e, index) => {
                            return <Button onClick={() => handleNavigate(index, e )} sx={{ color: "black", margin: '10px 0' }} variant="text" href="#contained-buttons">{e.title}</Button>
                        })}
                    </div>
                </Popover>
            </div> : null
            }
        </>
    );
};

export default memo(MegaMenu)
