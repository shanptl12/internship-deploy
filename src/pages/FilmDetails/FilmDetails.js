import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {CategoryChips, GenreChips} from '../../components/chips/Chips'
import {filmsData, summaryText, reviews} from '../../films'
import ReviewsCard from '../../components/ReviewsCard/ReviewsCard'
import InfoTab from '../../components/InfoTab/InfoTab'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import './FilmDetails.scss'
import Layout from '../../containers/Layout'
import Embed from './Embed'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>{children}</div>
        )}
      </div>
    );
  }


function FilmDetails () {
    const params = useParams()
    const [film, setFilm] = useState([])
    const [tabsValue, setTabsValue] = useState(0)

    useEffect(() => {
        setFilm(filmsData.filter(i => i.film === params.film)[0])
    }, [])

    return(
        <Layout noSidebar noPadding contentClassName='film-details'>
            <div className='film-details-video'>
            <Embed>
              <iframe title='youtube' className='yt' src="https://www.youtube.com/embed/0yGThj4HskA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </Embed>

            </div>
            <div className='film-details-content'>
              <div className='film-details-summary'>
                  <p className='film-title'><b>{film.film}</b> by {film.filmmaker}</p>
                  <div className='film-details-chips'>
                      {film.category && (<CategoryChips text={film.category.toUpperCase()} />)}
                      {film.genre && (<GenreChips text={film.genre.toUpperCase()} />)}
                  </div>
                  <p className='summary'>{summaryText}</p>
                  <div className='comments'>
                      <Tabs value={tabsValue} onChange={(event, newValue) => setTabsValue(newValue)} >
                          <Tab label='FILM REVIEWS' id={0} />
                          <Tab label='INFO' id={1} />
                      </Tabs>
                      <TabPanel value={tabsValue} index={0}>
                        {reviews.map(review => (
                          <ReviewsCard imgUrl={review.imgUrl} name={review.name} review={review.review} />
                        ))}
                      </TabPanel>
                      <TabPanel value={tabsValue} index={1}>
                          <InfoTab />
                      </TabPanel>
                  </div>
              </div>
            </div>


        </Layout>
    )
}

export default FilmDetails
