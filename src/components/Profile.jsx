import {useState} from "react";

const Profile = () => {
    const [info, setInfo] = useState({
        name: '',
        age: ''
    })
    const handleChange = e => {
        const {name, value} = e.target
        setInfo((preInfo) => ({
            ...preInfo,
            [name]: value
        }))
    }
    return (
        <div>
            <h2>user profile</h2>
            <input type='text' name={'name'} value={info.name} onChange={handleChange} />
            <input type='text' name={'age'} value={info.age}  onChange={handleChange} />
            <p>name: {info.name}</p>
            <p>age: {info.age}</p>
        </div>
    )
}
export default Profile