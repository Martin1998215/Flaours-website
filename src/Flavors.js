import React from 'react';
import Home from "./Home";
import Image from "./Images/flavors1.jpg";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';

import SaveIcon from '@material-ui/icons/Save';

import HomeIcon from '@material-ui/icons/Home';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyle = makeStyles({
    root: {
        width: '200px',
        height: '100px'
    },

    about: {
        display: 'none'
    }
});



function Flavors() {
    const [sideBar, setSideBar] = useState(true);
    const Show = () => {
        setSideBar(!sideBar);
    }

    const use = useStyle();
    return (
        <div className="container">
            <AppBar className='flavors-menus'>
                <Toolbar className="flavors-cover">
                    <IconButton>
                        <MenuIcon onClick={Show} />
                    </IconButton>
                    {/* <Button className='all-about' >About</Button> */}
                </Toolbar>
            </AppBar>
            <div className={sideBar ? "flav-sidebar active" : "flav-sidebar"}>
                <Paper className="sidebar">
                    <h2 className="flav-h2" color="primary">Menu</h2>
                    <div className="flav-ul">
                        <Button startIcon={<HomeIcon />}>Home</Button>
                        <Button startIcon={<SaveIcon />}>About</Button>
                        <Button>Trends</Button>
                        <Button>Footer</Button>
                        <Button>Food</Button>
                        <Button>Contact</Button>
                        <Button>Promotions</Button>
                        <Button>Events</Button>
                    </div>
                </Paper>

            </div>
            <Home />
        </div>
    )
}


export default Flavors;
