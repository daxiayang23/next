import "./operator.css"
import {useEffect, useState} from "react";
import Switch from "./switch/Switch.jsx";

const Operator = ({isPlaying, onSetIsPlaying, playDuration}) => {
    const [isAct1, setIsAct1] = useState(true)
    const [isAct2, setIsAct2] = useState(true)
    const [color1, setColor1] = useState("")
    const [color2, setColor2] = useState("")
    const [transform1, setTransform1] = useState("")
    const [transform2, setTransform2] = useState("")
    const [isMute, setIsMute] = useState(false)
    const [formatDuration, setFormatDuration] = useState("")
    const handleAlter = (id) => {
        if(id===0) {
            return setter(id, isAct1)
        } else {
            return setter(id, isAct2)
        }
    }
    const setter = (id, isAct) => {
        const act = isAct
        if(isAct) {
            id===0?setColor1("#e61450"):setColor2("#e61450")
            id===0?setTransform1("translateX(8px)"):setTransform2("translateX(8px)")
        } else {
            id===0?setColor1("#bebec1"):setColor2("#bebec1")
            id===0?setTransform1("translateX(0px)"):setTransform2("translateX(0px)")
        }
        id===0?setIsAct1(!isAct1):setIsAct2(!isAct2)
        return act
    }
    const handleSetMute = () => {
        setIsMute(!isMute)
    }
    const handlePlay = () => {
        onSetIsPlaying(!isPlaying)
    }
    useEffect(() => {
        const remainder = playDuration%60
        const num = Math.floor(playDuration / 60)
        if(num<10){
            if(remainder<10){
                setFormatDuration(`0${num}:0${remainder}`)
            } else {
                setFormatDuration(`0${num}:${remainder}`)
            }
        } else {
            if(remainder<10){
                setFormatDuration(`${num}:0${remainder}`)
            } else {
                setFormatDuration(`${num}:${remainder}`)
            }
        }

    }, [playDuration])
    return <div className={"operator"}>
        <div className={"left"}>
            <div className={"play-pot"} onClick={handlePlay}>
                {
                    isPlaying && <span className="iconfont icon-play"></span>
                }
                {
                    !isPlaying && <span className="iconfont icon-pause"></span>
                }
            </div>
            <div className={"play-duration"}>
                00:00 / {formatDuration}
            </div>
            <div className={"danmu-bar"}>
                <div className={"danmu"}>
                    <span className="iconfont icon-danmukaiqi"></span>
                    <span className="iconfont icon-danmuguanbi"></span>
                </div>
                <div className={"split-line"}></div>
                <div className={"danmu-input"}>
                    <form>
                        <input type={"text"} placeholder={"发一条友好的弹幕吧"} />
                    </form>
                </div>
                <div className={"danmu-emoji"}>
                    <span className="iconfont icon-emoji"></span>
                </div>
            </div>
        </div>
        <div className={"right"}>
            <div onClick={() => handleAlter(0)}>
                <Switch color={color1} transform={transform1} />
                <div>连播</div>
            </div>
            <div onClick={() => handleAlter(1)}>
                <Switch color={color2} transform={transform2} />
                <div>清屏</div>
            </div>
            <div>
                <div>智能</div>
            </div>
            <div>
                <div>倍速</div>
            </div>
            <div>
                <span className="iconfont icon-listen-later"></span>
            </div>
            <div onClick={handleSetMute}>
                {
                    isMute && <span className="iconfont icon-mute"></span>
                }
                {
                    !isMute && <span className="iconfont icon-sound"></span>
                }

            </div>
            <div>
                <span className="iconfont icon-fullscreen"></span>
            </div>
            <div>
                <span className="iconfont icon-full-screen"></span>
            </div>
        </div>
    </div>
}
export default Operator