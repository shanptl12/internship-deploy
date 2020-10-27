import React from 'react'
import './Chips.css'

const categoryColorMapper = {
    'short': 'darkturquoise',
    'docu': 'cornflowerblue',
    'travel': 'mediumpurple',
    'advert': 'mediumorchid',
}

const genreColorMapper = {
    'sci-fi': 'mediumorchid',
    'drama': 'sandybrown',
    'adventure': 'cornflowerblue',
    'event': 'mediumpurple',
    'crime': 'lightcoral',
    'biopic': 'mediumseagreen',
    'corporate': 'mediumpurple',
    'sports': 'cornflowerblue'
}
export function CategoryChips ({text}) {
    console.log(text)
    return(
        <div className={`chips ${categoryColorMapper[text.toLowerCase()]}`}>
            <p>{text}</p>
        </div>
    )
}

export function GenreChips ({text}) {
    return(
        <div className={`chips ${genreColorMapper[text.toLowerCase()]}`}>
            <p>{text}</p>
        </div>
    )
}
