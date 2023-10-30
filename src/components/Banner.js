import "./Banner.css"

const Banner = (props) => {

    return (
        <section className={`coverBanner slider1`}>
            {/* <video controls height="100%" autoPlay loop muted playsInline>
  <source src={require("../image/roulette.mp4")} type="video/mp4" />
</video> */}

            <article className="Banner container">
                <h1 className="titleBanner">
                    {props.configData.name} 
                </h1>
                <h1 className="titleBanner">
                    Estrées-Saint-Denis
                </h1>
            </article>
                        {/* <AutoplaySlider
                        play={true}
                        cancelOnInteraction={true} // should stop playing on user interaction
                        interval={5000}
                    >
                    <div style={{backgroundImage:{couscous}}}>
                        <img src={couscous}/>
                    </div>
                    <div>
                        <img src={couscous}/>
                    </div>
            </AutoplaySlider> */}

        </section>
    );
};

export default Banner;
