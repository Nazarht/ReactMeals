import './Button.css'

function Button(props) {
    return <button className="button-1" type={props.type} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>;
}

export default Button;