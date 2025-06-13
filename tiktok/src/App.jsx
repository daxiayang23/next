import Head from "./components/head/Head.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Stage from "./components/stage/stage.jsx";
import {videos} from "./assets/data/videos.js"
import {useRef, useState} from "react";

const App = () => {
    const a = Math.floor(videos.length*Math.random())
    const [count, setCount] = useState(0)
    const [counts, setCounts] = useState([a])
    const currentVideo = useRef(null)
    const handleChangeVideo = (e) => {
        const direction = e.deltaY/100
        const theLastId = counts[counts.length - 1]
        let number = Math.floor(videos.length*Math.random())
        while(number === theLastId) {
            number = Math.floor(videos.length*Math.random())
        }
        setCounts([...counts, number])
        setCount(count+direction*885)
        currentVideo.current.style.transform = `translateY(${-count}px)`
    }
    return <div className={"app"}>
        <div className={"app-sidebar"}>
            <Sidebar />
        </div>
        <div className={"app-container"}>
            <Head />
            <div className={"video-controller-up-and-down"}>
                <div className={"main-stage"} ref={currentVideo} onWheel={handleChangeVideo}>
                    {
                        counts.map((co, index) => (
                            <Stage key={index} video={videos[co]} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
}
export default App