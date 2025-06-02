import {useState} from "react";

const ShoppingList = () => {
    const [items, setItems] = useState([])
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(!name || !quantity) {return}
        const newItem = {
            name,
            quantity
        }
        setItems((prev) => [...prev, newItem])
        setName('')
        setQuantity('')
    }
    return (
        <div>
            <h1>Shopping List</h1>
            <form onSubmit={handleSubmit}>
                <input type={'text'} onChange={(e) => setName(e.target.value) } placeholder={'Item Name'} value={name}/>
                <input type={'number'} onChange={(e) => setQuantity(e.target.value) } placeholder={'quantity'} value={quantity} />
                <input type={'submit'} value={'提交'} />
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantity - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList