import "./head.css"
import Profile from "./profile/Profile.jsx";
import Search from "./search/Search.jsx";

const Header = () => {
    return <div className={"header"}>
        <div>
            <Search />
        </div>
        <div>
            <Profile />
        </div>
    </div>
}
export default Header