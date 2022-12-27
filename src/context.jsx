import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function CartContext({children}) {
    const [photos, setPhotos] = useState([])
    const [cart, setCart] = useState([])


    function toggleIsFavorite(id) {
        let updatedPhotos = photos.map(photo => {
            if(photo.id == id) {
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite,
                }
            }

            return photo
        })

        setPhotos(updatedPhotos)
    }


    function addToCart(item){
        setCart(prevCart => [...prevCart, item])
    }


    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

        fetch(url)
        .then( response => response.json())
        .then(data => setPhotos(data))
        .catch(error => console.warn(error))
    },[])

    return (
        <Context.Provider value={{photos, toggleIsFavorite, cart, addToCart}}>
            {children}
        </Context.Provider>
    )

}

export {CartContext, Context}