import React from 'react'
import './Home.css';

// Images 
import CoverImg from "./Images/flavors1.jpg";
import AboutImg from "./Images/flavors8.jpg";
import TrendImg1 from "./Images/flavors3.jpg";
import TrendImg2 from "./Images/flavors4.jpg";
import TrendImg3 from "./Images/flavors22.jpg";
import TrendImg4 from "./Images/flavors24.jpg";
import MenuCoverImg from "./Images/flavors28.jpg";
import PromoImg from "./Images/flavors2.jpg";
import EventImg from "./Images/flavors26.jpg";

import { ArrowBackIosOutlined } from '@material-ui/icons';
import { ArrowForwardIosOutlined } from '@material-ui/icons';
import { Favorite } from '@material-ui/icons';
import { Star } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';

// Inputs 
import TextField from '@material-ui/core/TextField';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home">
                <div className="home-section">
                    <img src={CoverImg} alt="Logo" className="logo" />
                    <h1 className="home-text">Flavours Pub & Grill</h1>
                </div>
                <div className="arrow-section">
                    <ArrowBackIosOutlined className="arrow-left"></ArrowBackIosOutlined>
                    <ArrowForwardIosOutlined className="arrow-right"></ArrowForwardIosOutlined>

                </div>
            </div>
            <div className="home-about-cover">
                <div className="home-about">
                    <img src={AboutImg} alt="about Photo" className="home-about-photo" />
                    <div className="home-about-para-section">
                        <h2>About Flavours Pub & Grill</h2>
                        <div className="home-about-text">
                            <p>Text</p>
                        </div>
                        <Button variant="contained" color="primary" startIcon={<SaveIcon />}>Send</Button>
                    </div>
                </div>
            </div>

            <div className="home-trend-section">
                <div className="home-trend">
                    <h2 className="home-trend-header">Trends</h2>
                    <div className="home-trend-photo-section">
                        <Paper className="home-trend-photo-cover">
                            <img src={TrendImg1} alt="photo" className="home-trend-photos" />
                            <div className="home-trend-text-section">
                                <div className="home-trend-text-cover-1">
                                    <h6 className="home-trend-text-1">Burger</h6>
                                    <div className="home-trend-text-1-inner">
                                        <Favorite className="trend-icon"></Favorite>
                                        <Star></Star>
                                    </div>
                                </div>
                                <div className="home-trend-text-cover-2">
                                    <h5 className="home-trend-text-2">K36</h5>
                                    <p className="home-trend-text-3"><i>Chicken . Potatoes . Veg</i></p>
                                </div>
                            </div>
                        </Paper>

                        <Paper className="home-trend-photo-cover">
                            <img src={TrendImg2} alt="photo" className="home-trend-photos" />
                            <div className="home-trend-text-section">
                                <div className="home-trend-text-cover-1">
                                    <h6 className="home-trend-text-1">Sharwama</h6>
                                    <div className="home-trend-text-1-inner">
                                        <Favorite className="trend-icon"></Favorite>
                                        <Star></Star>
                                    </div>
                                </div>
                                <div className="home-trend-text-cover-2">
                                    <h5 className="home-trend-text-2">K23</h5>
                                    <p className="home-trend-text-3"><i>Mice . Potatoes . Veg . salads</i></p>
                                </div>
                            </div>
                        </Paper>

                        <Paper className="home-trend-photo-cover">
                            <img src={TrendImg3} alt="photo" className="home-trend-photos" />
                            <div className="home-trend-text-section">
                                <div className="home-trend-text-cover-1">
                                    <h6 className="home-trend-text-1">Rice & Soup</h6>
                                    <div className="home-trend-text-1-inner">
                                        <Favorite className="trend-icon"></Favorite>
                                        <Star></Star>
                                    </div>
                                </div>
                                <div className="home-trend-text-cover-2">
                                    <h5 className="home-trend-text-2">K69</h5>
                                    <p className="home-trend-text-3"><i>Rice . Chicken . salads . veg</i></p>
                                </div>
                            </div>
                        </Paper>

                        <Paper className="home-trend-photo-cover">
                            <img src={TrendImg4} alt="photo" className="home-trend-photos" />
                            <div className="home-trend-text-section">
                                <div className="home-trend-text-cover-1">
                                    <h6 className="home-trend-text-1">Nshima</h6>
                                    <div className="home-trend-text-1-inner">
                                        <Favorite className="trend-icon"></Favorite>
                                        <Star></Star>
                                    </div>
                                </div>
                                <div className="home-trend-text-cover-2">
                                    <h5 className="home-trend-text-2">K40</h5>
                                    <p className="home-trend-text-3"><i>Nshima . Egg . Kapenta . Veg</i></p>
                                </div>
                            </div>
                        </Paper>

                    </div>
                    <Button size="small" variant="outlined" startIcon={<SaveIcon />}>See More</Button>
                </div>
            </div>
            <div className="home-menu-section">
                <h2 className="home-menu-texts">Our Menu Item List</h2>
                <Paper className="home-menu-cover">
                    <ArrowBackIosOutlined className="arrow-left-menu"></ArrowBackIosOutlined>
                    <img src={MenuCoverImg} alt="Photo" className="home-menu-photo" />
                    <ArrowForwardIosOutlined className="arrow-right-menu"></ArrowForwardIosOutlined>
                </Paper>
            </div>
            <div className="home-promo-section">
                <div className="home-promo-left">

                    <div className="home-promo-left-text-section">
                        <div className="home-promo-left-text-header">
                            <h2>Promotions</h2>
                        </div>
                        <div className="home-promo-left-text-head">
                            <div className="home-promo-left-text-head-1">
                                <div>
                                    <h2><span className="home-promo-left-text-head-span">10 days</span>  Promotion</h2>
                                </div>
                                <div>
                                    <h2><span className="home-promo-left-text-head-span">20%</span> Discount</h2>
                                </div>

                            </div>
                            <div className="home-left-text-head-2">
                                <h3>From</h3>
                                <h3 style={{ color: "red" }}>20th June, 2021</h3>
                            </div>
                            <div className="home-left-text-head-2">
                                <h3>To</h3>
                                <h3 style={{ color: "red" }}>30th June, 2021</h3>
                            </div>


                            <div className="home-promo-left-text-head-3">
                                <h2> <i>Only @FavoursPub&Grill</i></h2>
                            </div>
                        </div>
                    </div>
                    <div className="home-promo-left-promo-section">
                        <div className="home-promo-left-promo">
                            <img src={PromoImg} alt="photo" className="home-promo-photo" />
                            <div className="home-promo-para-section">
                                <div className="home-promo-para-1">
                                    <h5>Traditional Pizza</h5>
                                    <div className="home-promo-para-1-inner">
                                        <Star></Star>
                                        <Star></Star>
                                        <Star></Star>
                                    </div>
                                </div>
                                <div className="home-promo-para-2">
                                    <div className="home-promo-para-2-inner">
                                        <h3 style={{ textDecoration: "line-through", textDecorationColor: 'red', textDecorationThickness: "2px" }}>K52.00</h3>
                                        <h3>K39.00</h3>
                                    </div>
                                    <div className="home-promo-para-2-inner-icon">
                                        <Favorite></Favorite>
                                        <Favorite></Favorite>
                                    </div>
                                </div>
                                <p className="home-promo-description"><i>This contains the following ingredients: Chicken, Potatoes, Vegitables and salads</i></p>
                                <h4 style={{ color: "maroon" }}>*Promotion</h4>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="home-promo-right">
                    <Paper className="home-event-section">
                        <h3 className="home-event-header">EVENTS</h3>
                        <img src={EventImg} alt="photo" className="home-event-img" />
                        <h4 className="home-event-text"><i>Come One! Come All!</i></h4>
                    </Paper>
                </div>
            </div>

            {/* Footer section */}

            <div className="home-footer-section">
                <div className="home-footer-cover">
                    <div className="home-footer-left">
                        <h2>Leave A Message</h2>
                        <div className="home-footer-left-section">
                            <TextField
                                type="text"
                                className="input"
                                label=" Enter Name"
                                variant="outlined"
                                helperText="Please Write Your name"
                                style={{ margin: '5px 0' }}

                            />
                            <TextField
                                type="email"
                                className="input"
                                label=" Enter Email"
                                variant="outlined"
                                helperText="Please Write Your Email"
                                style={{ margin: '5px 0' }}

                            />
                            <TextField
                                type="text"
                                className="input"
                                label=" Write Message"
                                rows="6"
                                variant="outlined"
                                helperText="Please Write Your Message"
                                style={{ margin: '5px 0' }}

                            />
                            <Button color="secondary" className="input-btn" variant="contained" startIcon={<SaveIcon />}>Send</Button>
                        </div>
                    </div>
                    <div className="home-footer-center">
                        <h2>Map Location</h2>
                        <div className="home-footer-center-section">
                            <div className="home-map">
                            </div>
                            <h4>We are Located at Plot # 1200, Town Area</h4>
                        </div>
                    </div>
                    <div className="home-footer-right">
                        <h2>Contact Us</h2>
                        <div className="home-footer-right-section">
                            <img src={CoverImg} alt="Logo" className="home-logo-footer" />
                            <div className="home-footer-right-1">
                                <h4>Cell</h4>
                                <p>0974 893 829</p>
                            </div>
                            <div className="home-footer-right-1">
                                <h4>Tel:</h4>
                                <p>211 120 829</p>
                            </div>
                            <div className="home-footer-right-1">
                                <h4>Email</h4>
                                <p>FlavoursPub&Grill@gmail.com</p>
                            </div>
                            <div className="home-footer-right-1">
                                <h4>Facebook</h4>
                                <p>Flavours Pub & Grill</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default Home;
