import "./content.css"
import {useEffect, useRef} from "react"

const Content = ({isPlaying, videoDetail, onSetPlayDuration, onSetIsPlaying}) => {
    const {
        id,
        url,
        avatar,
        cover,
        creator,
        content,
        date,
        hot,
        comments,
        collect,
        shares,
        relation,
    } = videoDetail
    const video = useRef(null)
    const videoBg = useRef(null)
    useEffect(() => {
        isPlaying? video.current?.pause() : video.current?.play()
    }, [isPlaying])
    useEffect(() => {
        videoBg.current.style.backgroundImage = `url(${cover})`
    }, [cover])
    const handleLoadedMetadata = () => {
        if(video.current) {
            const { duration } = video.current
            onSetPlayDuration(Math.round(duration))
        }
    }
    return <div className={"content"}>
        <div className={"play-video"} ref={videoBg} onClick={() => onSetIsPlaying(!isPlaying)}>
            <div className={"video-container"}>
                <video className={"video-player"} ref={video} loop onLoadedMetadata={handleLoadedMetadata}>
                    <source src={url}/>
                </video>
            </div>
        </div>
        <div className={"user-operator"}>
            <div className={"user-operator-item"}>
                <img className={"user-operator-item-avatar"} src={avatar} alt={id} />
                <div>
                    <span className="iconfont icon-plus"></span>
                </div>
            </div>
            <div className={"user-operator-item"}>
                <span className="iconfont icon-love"></span>
                <div className={"count"}>{hot}</div>
            </div>
            <div className={"user-operator-item"}>
                <span className="iconfont icon-message2"></span>
                <div className={"count"}>{comments}</div>
            </div>
            <div className={"user-operator-item"}>
                <span className="iconfont icon-star1"></span>
                <div className={"count"}>{collect}</div>
            </div>
            <div className={"user-operator-item"}>
                <span className="iconfont icon-share"></span>
                <div className={"count"}>{shares}</div>
            </div>
            <div className={"user-operator-item"}>
                <span className="iconfont icon-Play"></span>
                <div className={"count"}>{relation}</div>
            </div>
            <div className={"user-operator-item"}>
                <span className="iconfont icon-threedots"></span>
            </div>
        </div>
        <div className={"vlog-detail"}>
            <div>
                <h2>@{creator}</h2>
                <span>·</span>
                <span>{date}</span>
            </div>
            <p>{content} </p>
        </div>
    </div>
}
export default Content