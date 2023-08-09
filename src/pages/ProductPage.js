import "./ProductPage";

const ProductPage = (props) => {
    return (
        <>
            <div style={{ display: "inline-flex", width: "100%" }}>
                <div style={{ width: "50%", height: "500px" }}>
                    <img src={props.product.image} style={{ width: "100%" }} />
                </div>
                <div
                    style={{
                        width: "50%",
                        height: "500px",
                        fontSize: "1rem",
                        color: "#2d2b2d",
                        fontWeight: "400",
                        textAlign: "left",
                        lineHeight: "1.75rem",
                        color: "#71706c",
                        margin: ".5rem",
                    }}
                >
                    <h2
                        style={{
                            borderBottom: "1px solid black",
                            width: "fit-content",
                            textTransform:"capitalize"
                        }}
                    >{`${props.product.type} ${props.product.title}`}</h2>
                    <p>{props.product.paragraphe}</p>
                    <p>&nbsp;</p>
                    <p>Tarifs :</p>
                    <p>{props.product.price}</p>
                    {/* hard code */}
                    <p>
                        {props.product.type === "pizza" &&
                            props.configData.pizzaDetails}
                    </p>
                    <p>&nbsp;</p>
                    <p>{props.configData.productDetails}</p>
                    <p>&nbsp;</p>
                    <p>{props.configData.presentation}</p>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
