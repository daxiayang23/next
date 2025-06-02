import { useContext, useState } from "react"
import {UserContext} from "./UserContext.jsx";


const UpdateUser = ()  => {
    const { updateUser } = useContext(UserContext)
    const [user, setUser] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if(user.trim()) {
            updateUser(user)
            setUser('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type={'text'} value={user} onChange={e => setUser(e.target.value)} />
                <input type={'submit'} value={'update'} />
            </form>
        </div>
    )
}
export default UpdateUser