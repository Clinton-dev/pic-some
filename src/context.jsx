import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function CartContext({children}) {
    const [photos, setPhotos] = useState([])


    useEffect(() => {
        const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

        fetch(url)
        .then( response => response.json())
        .then(data => setPhotos(data))
        .catch(error => console.warn(error))
    },[])

    return (
        <Context.Provider value={{photos}}>
            {children}
        </Context.Provider>
    )

}

export {CartContext, Context}