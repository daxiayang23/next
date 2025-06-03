import Navigation from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommanded/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import {useState} from "react";
import products from "./db/data.jsx";
import Card from "./components/Card.jsx";

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState("")
    const handleInputChange = e => {
        setQuery(e.target.value)
    }
    const filteredItems = products.filter(item => item.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)
    const handleChange = e => {
        setSelectedCategory(e.target.value)
    }
    const handleClick = e => {
        setSelectedCategory(e.target.value)
    }

    function fillteredData(products, selected, query) {
        let filteredProducts = products

        if(query) {
            filteredProducts = filteredItems
        }

        if(selected) {
            filteredProducts = filteredProducts.filter(({category,
                                                            color,
                                                            company,
                                                            newPrice,
                                                            title}) =>
                category === selected ||
                color === selected ||
                newPrice === selected ||
                company === selected ||
                title === selected
            )
        }
        return filteredProducts.map(({img ,title, star, reviews, newPrice, prevPrice}) => (
            <Card key={Math.random()}
                  img={img}
                  title={title}
                  star={star}
                  reviews={reviews}
                  newPrice={newPrice}
                  prevPrice={prevPrice}
            />
        ))
    }
    const result = fillteredData(products, selectedCategory, query)
    return <>
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
    </>
}
export default App