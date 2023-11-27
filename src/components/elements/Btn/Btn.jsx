import "./Btn.css"
const Btn = (props) => {
    const handleEventClick = () => {
        console.log("handle Click")
    }
    return (
        <div>
            <button onClick={() => handleEventClick()}>{props.name}</button>
        </div>
    )
}

export default Btn
