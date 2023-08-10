import "./ProductPage.css";

const ProductPage = props => {
    return (
        <>
            <div className='ProductPage container'>
                <h2 className='ProductPage mobile titleProduct '>
                    {`${props.product.type} ${props.product.title}`}
                </h2>
                <div className='ProductPage illustration'>
                    <img
                        src={props.product.image}
                        style={{ width: "100%" }}
                        alt={props.product.type + "-" + props.product.name}
                    />
                </div>
                <div className='ProductPage presentation'>
                    <h2 className='ProductPage desktop titleProduct'>{`${props.product.type} ${props.product.title}`}</h2>
                    <p>{props.product.paragraphe}</p>
                    <p>&nbsp;</p>
                    <p>Tarifs :</p>
                    <p>{props.configData.price[props.product.price]}</p>
                    <p>
                        {props.product.type === props.type &&
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
