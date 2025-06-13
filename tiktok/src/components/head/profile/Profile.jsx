import "./profile.css"
import Isolation from "./isolation/Isolation.jsx";

const Profile = () => {
    return <div className={"profile"}>
        <ul>
            <li>
                <div>
                    <div>
                        <span className="iconfont icon-cc-diamond"></span>
                    </div>
                    <div>充钻石</div>
                </div>
            </li>
            <li>
                <div>
                    <div>
                        <span className="iconfont icon-download"></span>
                    </div>
                    <div>客户端</div>
                </div>
            </li>
            <li>
                <div>
                    <div>
                        <span className="iconfont icon-magic-line"></span>
                    </div>
                    <div>壁纸</div>
                </div>
            </li>
            <li>
                <div>
                    <div>
                        <span className="iconfont icon-notification"></span>
                    </div>
                    <div>通知</div>
                </div>
            </li>
            <li>
                <div>
                    <div>
                        <span className="iconfont icon-message"></span>
                    </div>
                    <div>私信</div>
                </div>
            </li>
            <li>
                <div>
                    <div>
                        <span className="iconfont icon-post"></span>
                    </div>
                    <div>投稿</div>
                </div>
            </li>
            <li>
                <img className={"avatar"} src={"src/assets/avatar.png"} alt={"avatar"} />
            </li>
        </ul>
    </div>
}
export default Profile