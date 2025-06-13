import "./sidebar.css"
import Trademark from "./trademark/Trademark.jsx";
import SidebarOption from "./sidebarOption/sidebarOption.jsx";

const Sidebar = () => {
    return (
        <ul className={"sidebar"}>
            <li><Trademark /></li>
            <li>
                <ul>
                    <li>
                        <SidebarOption text={"精选"}>
                            <span className="iconfont icon-good2"></span>
                        </SidebarOption>
                    </li>
                    <li>
                        <SidebarOption text={"推荐"}>
                            <span className="iconfont icon-star-05"></span>
                        </SidebarOption>
                    </li>
                    <li>
                        <SidebarOption text={"AI搜索"}>
                            <span className="iconfont icon-ai"></span>
                        </SidebarOption>
                    </li>
                </ul>
            </li>
            <li>
                <div className={"split-line"}></div>
            </li>
            <li>
                <ul>
                    <li>
                        <SidebarOption text={"关注"}>
                            <span className="iconfont icon-followed"></span>
                        </SidebarOption>
                    </li>
                    <li>
                        <SidebarOption text={"朋友"}>
                            <span className="iconfont icon-weibiaoti102"></span>
                        </SidebarOption>
                    </li>
                    <li>
                        <SidebarOption text={"我的"}>
                            <span className="iconfont icon-Profile"></span>
                        </SidebarOption>
                    </li>
                </ul>
            </li>
            <li>
                <div className={"split-line"}></div>
            </li>
            <li>
                <ul>
                    <li>
                        <SidebarOption text={"直播"}>
                            <span className="iconfont icon-tv"></span>
                        </SidebarOption>
                    </li>
                    <li>
                        <SidebarOption text={"放映厅"}>
                            <span className="iconfont icon-movie"></span>
                        </SidebarOption>
                    </li>
                    <li>
                        <SidebarOption text={"短剧"}>
                            <span className="iconfont icon-vlog"></span>
                        </SidebarOption>
                    </li>
                </ul>
            </li>
            <div>
                <div className={"font-classes"}>
                    <span className="iconfont icon-settings"></span>
                </div>
                <div className={"font-classes"}>
                    <span className="iconfont icon-Menu"></span>
                </div>
                <div className={"font-classes"}>
                    <span className="iconfont icon-help"></span>
                </div>
            </div>
        </ul>
    )

}
export default Sidebar