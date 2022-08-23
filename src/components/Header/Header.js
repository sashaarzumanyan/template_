import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { navConf } from '../../_mock/navConfigs'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useNavigate, useParams } from 'react-router-dom';
import { useTransform, motion } from 'framer-motion';
import LanguagePopover from '../LangPopover';
import Logo from '../../assets/raf_logo_small.png';
import { click } from '@testing-library/user-event/dist/click';
import MegaMenu from '../MegaMenu/MegaMenu';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: '12ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));

function DrawerAppBar(props) {
    const { window, scrollY, offsetY } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavigate = (path, e) => {
        console.log(e);
        if (path === "home") {
            navigate("/")
        } else {
            navigate(path)
        }
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img alt='logo' className='logoSvg' src={Logo} width={'30%'} />
            </Typography>
            <Divider />
            <List>
                {navConf.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton onClick={() => handleNavigate(item.path)} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    //...........popover funtions............

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);



    const servicesProps = {
        // "aria-owns": open ? 'mouse-over-popover' : undefined,
        "aria-haspopup": true,
        onMouseEnter:  handlePopoverOpen ,
        // onMouseLeave:  handlePopoverClose 
    }



    return (
        <Box className='header' sx={{ display: 'flex' }}>
            <AppBar sx={{ backgroundColor: "white", color: "inherit", padding: '0 4%' }} >
                <Toolbar >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        width='5%'
                        sx={{ flexGrow: 1, display: { xs: 'none', lg: 'block' } }}
                    >
                        <img alt='logo' className='logoSvg' src={Logo} width={'90px'} onClick={() => {
                            handleNavigate('home');
                        }} />
                    </Typography>
                    <Box sx={{ paddingRight: '3%', display: { xs: 'none', lg: 'block' } }}>
                        {navConf.map((item) => (
                            <Button
                                {...servicesProps}
                                aria-owns={open && item.path === "services" ? 'mouse-over-popover' : undefined}
                                onClick={(e) => handleNavigate(item.path, e)} key={item.path} sx={{ fontSize: '16px', color: 'inherit' }}
                            >
                                {item.title}
                            </Button>

                        ))}
                        {/* <MegaMenu handlePopoverClose={handlePopoverClose} anchorEl={anchorEl} open={open}/> */}
                    </Box>
                    {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                    <LanguagePopover />
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}


export default DrawerAppBar;

/* import React, { useState } from 'react'
import { navConf } from '../../_mock/navConfigs'

import SearchPanel from './SearchPanel'

const Header = () => {
    const [open, setOpen] = useState(false)
    const { pathname } = window.location

    return (
        <div className='headerMain'>
            <span className='logo'>
                <img alt='logo' className='logoSvg' src={Logo} />
            </span>
            <div className='headerManuDiv'>
                <ul className='manu-ul'>
                    {navConf.map((item, index) => {
                        // debugger
                        return (
                            <li className='li' key={index} >
                                <a style={{ color: `/${item.path}` === pathname ? "#003DA5" : "black" }} href={item.path}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                {
                    open ? <SearchPanel onClose={setOpen} open={open} /> :
                        <button
                            className='searchBtn'
                            onClick={() => setOpen(!open)}
                        >
                            <p>Search</p>
                        </button>
                }
            </div>
        </div >
    )
}

export default Header */