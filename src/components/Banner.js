import "./Banner.css"

const Banner = (props) => {
    return (
        <section className="coverBanner">
            <article>
                <h1 className="titleBanner">
                    Bienvenue chez {props.configData.name}
                </h1>
            </article>
        </section>
    );
};

export default Banner;
