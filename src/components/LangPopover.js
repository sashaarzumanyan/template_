import { useEffect, useRef, useState } from 'react';
import i18next from "i18next";
// material
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton } from '@mui/material';
// components
import MenuPopover from './ManuPopover';
// svg
import en from "../assets/ic_flag_en.svg"
import ru from "../assets/russia-flag-icon.svg"
import am from "../assets/armenia-flag-icon.svg"


// ----------------------------------------------------------------------

const LANGS = [
    {
        value: 'en',
        label: 'English',
        icon: en,
    },
    {
        value: 'ru',
        label: 'Russian',
        icon: ru,
    },
    {
        value: 'am',
        label: 'Armenian',
        icon: am,
    },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
    const selected = localStorage.getItem("i18nextLng") || "en";

    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [langIndex, setLangIndex] = useState(0);

    console.log(langIndex);
    // useEffect(() => {
      
    // }, [langIndex])
    

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeLang = (value, index) => {
        i18next.changeLanguage(value);
        setLangIndex(index);
        handleClose();
    }

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                    }),
                }}
            >
                <img src={LANGS[langIndex].icon} alt={LANGS[langIndex].label} />
            </IconButton>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{
                    mt: 1.5,
                    ml: 0.75,
                    width: 180,
                    '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                }}
            >
                <Stack spacing={0.75}>
                    {LANGS.map((option, index) => (
                        <MenuItem key={option.value} selected={option.value === LANGS[langIndex].value} onClick={() => handleChangeLang(option.value, index)}>
                            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>
            </MenuPopover>
        </>
    );
}