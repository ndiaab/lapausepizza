import "./Popup.css";

const Popup = (props) => {
    return  (
        <>
        {props.isOpen && (<div className="toto">
            <div>This is the content of the pop-up.</div>
            <button onClick={() => props.setIsOpen(false)}>
                Close Pop-up
            </button>
        </div>)}
        </>
    );
}

export default Popup;