import UserPic from './assets/User-Pic.png'
import UserPic1 from './assets/User-Pic1.png'
import UserPic2 from './assets/User-Pic2.png'
import UserPic3 from './assets/User-Pic3.png'


const createFilms = (film, filmmaker, category, genre, length, time) => {
    return {film, filmmaker, category, genre, length, time}
}

export const filmsData = [
    createFilms('The Countdown', 'M S N Karthik', 'short', 'sci-fi', 9, '24 Jun, 23:12:00'),
    createFilms('Everything is fine', 'Timothy Thompson', 'docu', 'drama', 31, '24Jun, 24:15:00'),
    createFilms('800 Soldiers', 'Alexander Neal', 'travel', 'adventure', 10, '24 Jun, 24:27:02'),
    createFilms('Apple iPad Pro', 'Bertha Dixon', 'advert', 'event', 9, '24 Jun 24:59:02'),
    createFilms('Bodh Gaya: The seat of Enlightment', 'M S N Karthik', 'docu', 'drama', 21, '24 Jun, 24:59:02'),
    createFilms('Pursuit of happyness', 'Minerva Hammond', 'short', 'crime', 16, '24 Jun 23:12:00'),
    createFilms('Secret in the Himalays', 'Calvin Simmons', 'docu', 'drama', 5, '24 Jun, 24:15:00'),
    createFilms('My Secret Escape', 'M S N Karthik', 'travel', 'biopic', 1, '24 Jun, 24:27:00'),
    createFilms('Google Search: Re-union', 'Rachel Allison', 'advert', 'corporate', 4, '24 Jun, 24:59:02'),
    createFilms('The Last Fall', 'Eula Chandler', 'docu', 'crime', 19, '24 Jun, 24:59:02'),
    createFilms('The Social Dilemma', 'Gabriel Christensen', 'docu', 'sports', 8, '24 Jun, 24:59:02'),
    createFilms('Bodh Gaya: The seat of Enlightment', 'M S N Karthik', 'docu', 'drama', 21, '24 Jun, 24:59:02'),
    createFilms('Pursuit of happyness', 'Minerva Hammond', 'short', 'crime', 16, '24 Jun 23:12:00'),
    createFilms('Secret in the Himalays', 'Calvin Simmons', 'docu', 'drama', 5, '24 Jun, 24:15:00'),
    createFilms('My Secret Escape', 'M S N Karthik', 'travel', 'biopic', 1, '24 Jun, 24:27:00'),
    createFilms('Google Search: Re-union', 'Rachel Allison', 'advert', 'corporate', 4, '24 Jun, 24:59:02'),
    createFilms('The Last Fall', 'Eula Chandler', 'docu', 'crime', 19, '24 Jun, 24:59:02'),
    createFilms('The Social Dilemma', 'Gabriel Christensen', 'docu', 'sports', 8, '24 Jun, 24:59:02'),
    createFilms('The Countdown', 'M S N Karthik', 'short', 'sci-fi', 9, '24 Jun, 23:12:00'),
    createFilms('Everything is fine', 'Timothy Thompson', 'docu', 'drama', 31, '24Jun, 24:15:00'),
    createFilms('800 Soldiers', 'Alexander Neal', 'travel', 'adventure', 10, '24 Jun, 24:27:02'),
    createFilms('Apple iPad Pro', 'Bertha Dixon', 'advert', 'event', 9, '24 Jun 24:59:02'),
    createFilms('Bodh Gaya: The seat of Enlightment', 'M S N Karthik', 'docu', 'drama', 21, '24 Jun, 24:59:02'),
    createFilms('Pursuit of happyness', 'Minerva Hammond', 'short', 'crime', 16, '24 Jun 23:12:00'),
    createFilms('Secret in the Himalays', 'Calvin Simmons', 'docu', 'drama', 5, '24 Jun, 24:15:00'),
    createFilms('My Secret Escape', 'M S N Karthik', 'travel', 'biopic', 1, '24 Jun, 24:27:00'),
    createFilms('Google Search: Re-union', 'Rachel Allison', 'advert', 'corporate', 4, '24 Jun, 24:59:02'),
    createFilms('The Last Fall', 'Eula Chandler', 'docu', 'crime', 19, '24 Jun, 24:59:02'),
]

export const summaryText = "The Countdown can best be described as a tale of hope or the story of survival of humanity. It's an experimental film in the Sci-Fi Thriller genre, in which an astronaut stuck on an unknown planet struggles to get back to his ship only to find that things are actually worse than expected. The film also revolves around the subject of the future of life on the planet."

export const reviews = [
    {
        imgUrl: UserPic1,
        name: 'Glen Ortega',
        review: 'This is an amazing film.'
    },
    {
        imgUrl: UserPic2,
        name: 'Martha Vasquez',
        review: 'The Great Waves is the essential resource each person needs to prepare themselves mentally, emotionally and practically for the great change that is coming. Wonderful effort overall. Liked a lot.'
    },
    {
        imgUrl: UserPic,
        name: 'Billy Hudson',
        review: 'Nice message oriented short film, Well done.'
    },
    {
        imgUrl: UserPic3,
        name: 'Frontend Error',
        review: 'Ironically true,"living on your own planet as aliens!"'
    },
]