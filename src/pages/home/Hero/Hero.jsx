import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import { Banner } from "../../../utils/Image";


function Hero() {
    return (
        <Carousel className="mx-w-7xl">
            <div>
                <img src={Banner[0]} />
            </div>
            <div>
                <img src={Banner[1]} />
            </div>
            <div>
                <img src={Banner[2]} />
            </div>
            <div>
                <img src={Banner[3]} />
            </div>
            <div>
                <img src={Banner[4]} />
            </div>
            {/* <div>
                <img src={Banner[5]} />
            </div> */}

        </Carousel>
    )
}

export default Hero