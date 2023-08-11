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
                <p key={phoneNumber + index}>Tél: {phoneNumber}</p>
            ))}
            {/* email */}
            <p>@: {props.configData.email}</p>
        </div>
    );
};

export default SlideMenu;
