import React, {Component} from 'react';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="home-container">
                    <Navbar/>
                    <div id="carouselExampleIndicators" className = "carousel slide" data-ride="carousel">
                        <ol className = "carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className = "active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className = "carousel-container">
                            <div className = "carousel-inner bg-info">
                                <div className = "carousel-item active">
                                <img className = "h-100 w-100" src={require("../images/stevens.jpg")} alt="First slide" />
                                </div>
                                <div className = "carousel-item">
                                <img className = "h-100 w-100" src={require("../images/davis.jpg")} alt="Second slide" />
                                </div> 
                                <div className = "carousel-item">
                                <img className = "h-100 w-100" src={require("../images/logo.jpg")} alt="Third slide" />
                                </div>
                            </div>
                            <a className = "carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className = "carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className = "sr-only">Previous</span>
                            </a>
                            <a className = "carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className = "carousel-control-next-icon" aria-hidden="true"></span>
                                <span className = "sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;