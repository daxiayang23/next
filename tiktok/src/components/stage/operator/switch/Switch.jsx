import "./swtich.css"
import {useEffect, useRef} from "react";
const Switch = ({color, transform}) => {
    const switcher = useRef(null)
    const ball = useRef(null)
    useEffect(() => {
        switcher.current.style.backgroundColor = color
        ball.current.style.transform = transform
    }, [color, transform])
    return <div className={"switch"} ref={switcher}>
        <div className={"ball"} ref={ball}></div>
    </div>
}
export default Switch