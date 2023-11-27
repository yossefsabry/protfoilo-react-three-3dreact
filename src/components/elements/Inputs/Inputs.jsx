import "./Inputs.css"

const Inputs = (props) => {
    return (
        <div className="inputs-container-style">
            <input type={`${props.type}`} placeholder={`${props.type === "text" ? "Enter Name..." : "Enter Email..."}`} required />
        </div>
    )
}
Inputs.sumbit = () => {
    return (
        <input type="sumbit" value="sumbit" />
    )
}
export default Inputs
