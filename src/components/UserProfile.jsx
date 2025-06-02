import { useContext } from "react";
import { UserContext, UserProvider } from "./UserContext.jsx";

const UserProfile = () => {
    const {user} = useContext(UserContext)
    return (
        <UserProvider>
            {user.name}
        </UserProvider>
    )
}
export default UserProfile