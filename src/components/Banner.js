import sliderOne from "../image/slider-1.png";
import sliderTwo from "../image/slider-2.jpg";
import sliderThree from "../image/slider-3.jpg";

import "./Banner.css"

const Banner = () => {
    return (
        <section className="coverBanner">
            <article>
                <h1 className="titleBanner">
                    Bienvenue chez la Pause Pizza{" "}
                </h1>
                <h1 className="titleBanner">
                    Estrées Saint Denis
                </h1>
            </article>
        </section>
        // on mobile height:"250px"
        // <img src={sliderOne} style={{width:"100%", height:"500px", objectFit:"cover"}}></img>
    );
};

export default Banner;
