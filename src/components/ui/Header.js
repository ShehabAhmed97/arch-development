/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React from "react"
import { Fragment } from "react";
import {Link} from "react-router-dom"
import { useState, useEffect } from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Typography  from "@mui/material/Typography"
import { makeStyles } from "@mui/styles"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import logo from "../../assets/logo.svg";

//Custom styles.................................................................
const useStyles = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar
  },
  logo: {
    minHeight: "64px",
    marginLeft: "0px"
  },
  tabs: {
    marginLeft: "auto",
    width: "60%"
  },
  menuList: {
    color: "#fff",
    backgroundColor: `${theme.palette.common.blue} !important` ,
  }
}))
//...............................................................................

//CUSTOM STYLES USING THE SYSTEM..............................................
const estimateBtn = {
  borderRadius: "50px !important",
  textTransform: "none !important",
  color: "#fff !important",
  fontFamily: "Pacifico !important",
  fontSize: ".7rem",
  maxHeight: "2rem",
  marginRight: "20px !important",
  marginLeft: "20px !important",
  width: "auto",
  padding: "5px"
}
const tab={
  color:"#fff",
  fontSize: ".6rem",
  margin: "0 10px",
  width: "auto",
  padding: "0px"
};
const firstMenuItem= { marginTop: "10px", fontSize: ".7rem"};
const logoSize ={
  height: "64px",
  position: "relative",
  minWidth: "auto"
};
//...............................................................................

//scrolling function from MUI..........................................................
function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
//......................................................................................  


export default function Header(props) {
  //The drawer functions.............................................................................
  const drawerWidth = 200;

  const { windo } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = windo !== undefined ? () => windo().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //.................................................................................................

  //The list functions...............................................................................
  const [nestedListOpen, setListOpen] = React.useState(false);

  const handleNestedList = () => {
    setListOpen(!nestedListOpen);
  };
  //.................................................................................................

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  function handleTabChange(e, value) {
    setValue(value)
  }
  const [value, setValue] = useState(0);
  useEffect(() => {
    if(window.location.pathname === "/" && value !== 0){
      setValue(0);
    }else if(window.location.pathname === "/services" && value !== 1){
      setValue(1);
    }else if(window.location.pathname === "/revolution" && value !== 2){
      setValue(2);
    }else if(window.location.pathname === "/about" && value !== 3){
      setValue(3);
    }else if(window.location.pathname === "/contact" && value !== 4){
      setValue(4);
    }
  },[value])

  //Menues functions........................................................................
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuMouseOver = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  //........................................................................................

  //TAPS ...........................................................................................
  const tabs = () => {
    return (
      <Fragment>
        <Tabs variant="fullWidth" value={value} onChange={handleTabChange} indicatorColor="primary" textColor="secondary" className={classes.tabs} >
          <Tab label="Home" className={classes.tab} sx={tab} component={Link} to="/" onMouseOver={handleMenuClose} />
          <Tab
            label="Services"
            className={classes.tab}
            sx={tab} 
            component={Link}
            to="/services"
            id="services-tab"
            aria-controls="services-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onMouseOver={handleMenuMouseOver}
          />
          <Tab label="The Revolution" className={classes.tab} sx={tab} component={Link} to="/revolution" onMouseOver={handleMenuClose}/>
          <Tab label="About us" className={classes.tab} sx={tab} component={Link} to="/about" onMouseOver={handleMenuClose}/>
          <Tab label="Contact us" className={classes.tab} sx={tab} component={Link} to="/contact" onMouseOver={handleMenuClose}/>
        </Tabs>
        <Button color="secondary" variant="contained" sx={estimateBtn} component={Link} to="/estimate" onMouseOver={handleMenuClose}>Free Estimate</Button>
  
        <Menu
          id="services-menu"
          anchorEl={anchorEl}
          open={open}
          disableAutoFocusItem
          onClose={handleMenuClose}
          MenuListProps={{
            'aria-labelledby': 'services-tab',
            onMouseLeave: handleMenuClose,
          }}
          classes={{paper: classes.menuList}}
        >
          <MenuItem
            onClick={() => {handleMenuClose();setValue(1)}}
            sx={firstMenuItem}
            component={Link}
            to="/customservices"
          >Custom softwares</MenuItem>
  
          <MenuItem
            onClick={() => {handleMenuClose();setValue(1)}}
            component={Link}
            to="/websites"
            sx={{fontSize: ".7rem"}}
          >Websites</MenuItem>
  
          <MenuItem
            onClick={() => {handleMenuClose();setValue(1)}}
            component={Link}
            sx={{fontSize: ".7rem"}}
            to="/mobileapps"
          >Mobile Apps</MenuItem>
        </Menu>
      </Fragment>
    )
  }  
  //...................................................................................................

    return (
      <React.Fragment>
        {/* <HideOnScroll {...props}> */}
            <AppBar
              position="fixed"
              color="primary"
            >
                <Toolbar disableGutters sx={{padding: "0px", ml: "-10px"}}>
                <Button disableRipple component={Link} to="/" onClick={() => setValue(0)} sx={logoSize}>
                  <img alt="Company logo" src={logo} className={classes.logo}/>
                </Button>
                {/* <Typography variant="h3">Arch development</Typography> */}
                {matches ? null : tabs()}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, ml: "auto", display: { md: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
            </AppBar>
            <Box
              component="nav"
              sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, bgcolor: 'background.paper' }}
              aria-label="mailbox folders"
            >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: "64px", backgroundColor: theme.palette.common.blue },
          }}
        >
            <List
              sx={{ width: '100%', maxWidth: 360 }}
            >
              <ListItemButton selected={value === 0} onClick={(e) => {handleDrawerToggle(); setValue(0)}} divider component={Link} to="/">
                <ListItemText disableTypography primary="Home" />
              </ListItemButton>

              <ListItem selected={value === 1} onClick={(e) => { setValue(1)}} button disablePadding divider sx={{padding: "2px 12px"}}>
              <Button onClick={handleDrawerToggle} disableRipple  component={Link} to="/services" sx={{textTransform: "none" ,color: "#fff", mr: "auto", padding:"0px"}}>
                Services
              </Button>
                <IconButton disableRipple edge="end" sx={{color: "#fff"}}>
                {nestedListOpen ? <ExpandLess onClick={handleNestedList}/> : <ExpandMore onClick={handleNestedList}/>}
                </IconButton>
              </ListItem>

              <Collapse in={nestedListOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton onClick={handleDrawerToggle} divider component={Link} to="/customservices" sx={{ pl: 4, fontSize: ".8rem" }}>
                    <ListItemText disableTypography primary="Custom software" />
                  </ListItemButton>
                  <ListItemButton onClick={handleDrawerToggle} divider component={Link} to="/websites" sx={{ pl: 4, fontSize: ".8rem" }}>
                    <ListItemText disableTypography primary="Websites" />
                  </ListItemButton>
                  <ListItemButton onClick={handleDrawerToggle} divider component={Link} to="/mobileapps" sx={{ pl: 4, fontSize: ".8rem" }}>
                    <ListItemText disableTypography primary="Mobile apps" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton selected={value === 2} onClick={(e) => {handleDrawerToggle(); setValue(2)}} divider component={Link} to="/revolution" >
                <ListItemText disableTypography primary="The revolution" />
              </ListItemButton>
              <ListItemButton selected={value === 3} onClick={(e) => {handleDrawerToggle(); setValue(3)}} divider component={Link} to="/about">
                <ListItemText disableTypography primary="About us" />
              </ListItemButton>
              <ListItemButton selected={value === 4} onClick={(e) => {handleDrawerToggle(); setValue(4)}} divider component={Link} to="/contact">
                <ListItemText disableTypography primary="Contact us" />
              </ListItemButton>
              <ListItemButton onClick={handleDrawerToggle} divider component={Link} to="/estimate" sx={{backgroundColor: theme.palette.common.orange}}>
                <ListItemText disableTypography primary="Free estimate" />
              </ListItemButton>
            </List>
        </Drawer>
      </Box>
        {/* </HideOnScroll> */}
        {/* <div className={classes.tooBarMargin} /> */}
      </React.Fragment>
    )
}