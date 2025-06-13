import "./stage.css"
import Content from "./content/Content.jsx";
import Operator from "./operator/Operator.jsx";
import {useState} from "react";

const Stage = ({video}) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const [playDuration, setPlayDuration] = useState(0)
    return <div className="stage">
        <Content isPlaying={isPlaying} onSetIsPlaying={setIsPlaying} onSetPlayDuration={setPlayDuration} videoDetail={video} />
        <Operator isPlaying={isPlaying} playDuration={playDuration} onSetIsPlaying={setIsPlaying} />
    </div>
}
export default Stage