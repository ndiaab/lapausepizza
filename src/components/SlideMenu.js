const SlideMenu = props => {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "0",
                margin: "1rem",
                textAlign: "left",
            }}
        >
            {/* address */}
            {props.configData.address.map((lineAddress, index) => (
                <p key={lineAddress + index}>{lineAddress}</p>
            ))}
            {/* phone number */}
            {props.configData.phonesNumber.map((phoneNumber, index) => (
                <a href={`tel:${phoneNumber}`}><p key={phoneNumber + index}>Tél: {phoneNumber}</p></a>
            ))}
            {/* email */}
            <a href={`mailto:${props.configData.email}`}><p>@: {props.configData.email}</p></a>
        </div>
    );
};

export default SlideMenu;
