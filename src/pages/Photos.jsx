import React, {useContext} from 'react'
import Image from '../components/Image'
import { Context } from '../context'
import { getClass } from '../utils'


function Photos() {

    const {photos} = useContext(Context)

    const allPhotos = photos.map((photo, index) => {
        return(
            <Image key={photo.id} photo={photo} className={getClass(index)}/>
        )
    })


    return (
        <div className='photos'>
            {allPhotos}
        </div>
    )
}

export default Photos