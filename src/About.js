import React from 'react';
import './About.css';
import { useState } from 'react';

import { ArrowBackIosOutlined } from '@material-ui/icons';
import { ArrowForwardIosOutlined } from '@material-ui/icons';
import { Favorite } from '@material-ui/icons';
import { Star } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import Paper from '@material-ui/core/Paper';

// Inputs 
import TextField from '@material-ui/core/TextField';


//  All Images
import CoverImg from "./Images/flavors1.jpg";
import AboutImg from "./Images/flavors8.jpg";
import FoodImg from "./Images/flavors74.jpg";
import DeliverImg from "./Images/flavors59.jpg";
import ChefImg from "./Images/flavorsChef1.jpg";

// site imgs
import AboutImg1 from "./Images/flavors8.jpg";
import AboutImg2 from "./Images/flavors17.jpg";
import AboutImg3 from "./Images/flavors20.jpg";
// site imgs
import FoodImg1 from "./Images/flavors74.jpg";
import FoodImg2 from "./Images/flavors4.jpg";
import FoodImg3 from "./Images/flavors24.jpg";
// chef imgs
import ChefImg1 from "./Images/flavorsChef1.jpg";
import ChefImg2 from "./Images/flavorsChef2.jpg";
import ChefImg3 from "./Images/flavorsWaiter.jpg";
// delivery imgs
import DelImg1 from "./Images/flavors59.jpg";
import DelImg2 from "./Images/flavors60.jpg";



const About = () => {


    const [siteArry, setSiteArry] = useState([
        AboutImg1, AboutImg2, AboutImg3
    ]);

    const [foodArry, setFoodArry] = useState([
        FoodImg1, FoodImg2, FoodImg3
    ]);

    const [deliveryArry, setDeliveryArry] = useState([

        DelImg1, DelImg2
    ]);

    const [chefArry, setChefArry] = useState([
        ChefImg1, ChefImg2, ChefImg3
    ]);

    const [about, setAbout] = useState(0);

    return (
        <div className="about-container">
            <div className="about">
                <div className="about-section">
                    <img src={CoverImg} alt="Logo" className="logo" />
                    <h1 className="about-text">Flavours Pub & Grill</h1>
                </div>
                {/* <div className="arrow-section">
                    <ArrowBackIosOutlined className="arrow-left"></ArrowBackIosOutlined>
                    <ArrowFosrwardIosOutlined className="arrow-right"></ArrowForwardIosOutlined>

                </div> */}
            </div>
            <div className="about-cover">
                <h2 className="about-title">About Us</h2>
                <div className="about-cover-main">

                    <div className="about-cover-1">
                        <div className="about-cover-1-main">
                            <div className="about-photo-cover-1">
                                <ArrowBackIosOutlined onClick={() => {
                                    setAbout(about - 1)
                                }} className="about-arrow-left-1" />

                                {<img src={siteArry[about]} alt="about Photo" className="about-photo" />}

                                <ArrowForwardIosOutlined onClick={() => {
                                    setAbout(about + 1)
                                }} className="about-arrow-right-1"></ArrowForwardIosOutlined>
                            </div>
                            <div className="about-para-section">
                                <h2 className="about-para-text-1">About Our Site</h2>
                                <div className="about-text-1">
                                    <p>Flavours Pub & Grill is a Restaurant located in the city of Livingstone, Along Lusaka road, Town Area in Zambia.</p>
                                    We have enough space to accomodate many people at our restaurant for both open space and shelter space.

                                    <p>We also have a large car parking space to ensure the safety of your car.</p>
                                </div>
                                <Button variant="contained" color="primary" startIcon={<SaveIcon />}>See More</Button>
                            </div>
                        </div>
                    </div>

                    <div className="about-cover-2">
                        <div className="about-cover-2-main">
                            <div className="about-photo-cover-2">
                                <ArrowBackIosOutlined onClick={() => {
                                    setAbout(about - 1)
                                }} className="about-arrow-left-2"></ArrowBackIosOutlined>
                                <img src={foodArry[about]} alt="about Photo" className="about-photo-2" />
                                <ArrowForwardIosOutlined onClick={() => {
                                    setAbout(about + 1)
                                }} className="about-arrow-right-2"></ArrowForwardIosOutlined>
                            </div>
                            <div className="about-para-section-2">
                                <h2 className="about-para-text-2">About Our Food</h2>
                                <div className="about-text-2">
                                    <p>Flavours Pub & Grill is a Restaurant located in the city of Livingstone, Along Lusaka road, Town Area in Zambia.</p>
                                    <p>We serve the best food with the best ingredients at affordable prices</p>
                                    <p>Our chefs and waiters offer the best gesture. they make our customers feel at home.</p>
                                </div>
                                <Button className="btn-2" variant="contained" color="primary" startIcon={<SaveIcon />}>See More</Button>
                            </div>
                        </div>
                    </div>

                    <div className="about-cover-1">
                        <div className="about-cover-1-main">
                            <div className="about-photo-cover-1">
                                <ArrowBackIosOutlined onClick={() => {
                                    setAbout(about - 1)
                                }} className="about-arrow-left-1"></ArrowBackIosOutlined>
                                <img src={deliveryArry[about]} alt="about Photo" className="about-photo" />
                                <ArrowForwardIosOutlined onClick={() => {
                                    setAbout(about + 1)
                                }} className="about-arrow-right-1"></ArrowForwardIosOutlined>
                            </div>
                            <div className="about-para-section">
                                <h2 className="about-para-text-1">About Our Deliveries</h2>
                                <div className="about-text-1">
                                    <p>Flavours Pub & Grill is a Restaurant located in the city of Livingstone, Along Lusaka road, Town Area in Zambia.</p>
                                    <p>We offer the best and quickest kind of deliveries using our delivery van around livingstone.</p>
                                    <p>Make An order by calling us on <span className="about-text-1-caller">0977 682 611</span></p>
                                </div>
                                <Button variant="contained" color="primary" startIcon={<SaveIcon />}>See More</Button>
                            </div>
                        </div>
                    </div>

                    <div className="about-cover-2">
                        <div className="about-cover-2-main">
                            <div className="about-photo-cover-2">
                                <ArrowBackIosOutlined onClick={() => {
                                    setAbout(about - 1)
                                }} className="about-arrow-left-2"></ArrowBackIosOutlined>
                                <img src={chefArry[about]} alt="about Photo" className="about-photo-2" />
                                <ArrowForwardIosOutlined onClick={() => {
                                    setAbout(about + 1)
                                }} className="about-arrow-right-2"></ArrowForwardIosOutlined>
                            </div>
                            <div className="about-para-section-2">
                                <h2 className="about-para-text-2">About Our Chefs</h2>
                                <div className="about-text-2">
                                    <p>Flavours Pub & Grill is a Restaurant located in the city of Livingstone, Along Lusaka road, Town Area in Zambia.</p>
                                    <p>We hire the very best chefs to serve you the best food you ever dream to taste.</p>
                                    <p>Our chefs offer the best gesture. they know how to treat our customers.</p>
                                </div>
                                <Button className="btn-2" variant="contained" color="primary" startIcon={<SaveIcon />}>See More</Button>
                            </div>
                        </div>
                    </div>


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

export default About;
