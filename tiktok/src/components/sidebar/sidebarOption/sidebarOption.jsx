import "./sidebarOption.css"

const SidebarOption = ({children, text}) => {
    return (
        <div className={"SidebarOption"}>
            <div>{children}</div>
            <div>{text}</div>
        </div>
    )
}
export default SidebarOption