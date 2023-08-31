import "./Banner.css"

const Banner = (props) => {
    return (
        <section className="coverBanner">
            <article>
                <h1 className="titleBanner">
                    {props.configData.name} 
                </h1>
                <h1 className="titleBanner">
                    Estrées-Saint-Denis
                </h1>
            </article>
        </section>
    );
};

export default Banner;
