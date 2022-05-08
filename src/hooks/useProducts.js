import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://marvelous-toy-store.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])
    return [products, setProducts]
}

export default useProducts