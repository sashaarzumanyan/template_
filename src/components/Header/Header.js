import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { memo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/raf_logo_small.png';
import { navConf } from '../../_mock/navConfigs';
import { procurement } from '../../_mock/procurement';
import LanguagePopover from '../LangPopover';
import MegaMenu from '../MegaMenu/MegaMenu';


function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const popoverAnchor = useRef(null);
    const [openedPopover, setOpenedPopover] = useState(false);
    const { t } = useTranslation();
    const [label, setLabel] = useState(null)

    const ul_list = t("Industries", { returnObjects: true });


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

    const popoverEnter = ({ currentTarget }) => {
        setOpenedPopover(true);
        setLabel(currentTarget.attributes.label.nodeValue)
    };

    const popoverLeave = ({ currentTarget }) => {
        setOpenedPopover(false);
    };



    const servicesProps = (path) => ({
        ref: popoverAnchor,
        "aria-owns": "mouse-over-popover",
        "aria-haspopup": true,
        onMouseEnter: path === "services" || "procurement" ? popoverEnter : null,
        onMouseLeave: popoverLeave,
        label: path,
    })


    return (
        <Box className='header' sx={{ display: 'flex' }}>
            <AppBar sx={{ backgroundColor: "white", color: "inherit", padding: '0 4%' }} >
                <Toolbar  >
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
                            <>
                                <Button
                                    {...servicesProps(item.path)}
                                    // aria-owns={open && item.path === "services" ? 'mouse-over-popover' : undefined}
                                    onClick={(e) => handleNavigate(item.path, e)} key={item.path} sx={{ padding: "35px 10px", fontSize: '16px', color: 'inherit' }}
                                >
                                    {item.title}
                                </Button>
                            </>
                        ))}
                    </Box>
                    <MegaMenu content={label === "services" ? ul_list : label === "procurement" ? procurement : null} popoverLeave={popoverLeave} popoverEnter={popoverEnter} popoverAnchor={popoverAnchor} openedPopover={openedPopover} />
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


export default memo(DrawerAppBar)

