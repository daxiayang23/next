function Button({onClickHandler, value, title}) {
    return <button onClick={onClickHandler} value={value} className={'btn'}>{title}</button>
}
export default Button