import React from 'react'
import './ReviewsCard.scss'

function ReviewsCard ({imgUrl, name, review}) {
    return(
        <div className='reviews-card'>
            <img src={imgUrl} alt='profile pic' />
            <div className='reviews-text'>
                <p className='title'>{name}</p>
                <p className='body'>{review}</p>
            </div>
        </div>
    )
}

export default ReviewsCard