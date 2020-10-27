import React from 'react'
import Embed from '../../pages/FilmDetails/Embed'
import './InfoTab.css'

function InfoTab() {
    return (
        <div className='info-tab'>
            <div className='info'>
                <div className='location'>
                </div>
                <div className='info-text'>
                    <div className='col1'>
                        <p className='info-title'>USER</p>
                        <p className='info-detail'>M S N Karthik</p>
                    </div>
                    <div className='col1'>
                        <p className='info-title'>TIMESTAMP</p>
                        <p className='info-detail'>24 Jun,  23:12:00</p>
                    </div>
                    <div className='col1'>
                        <p className='info-title'>LOCATION</p>
                        <p className='info-detail'>Hyderabad, India</p>
                    </div>
                    <div className='col1'>
                        <p className='info-title'>ROLE</p>
                        <p className='info-detail'>Writer, Director</p>
                    </div>
                </div>
                <div className='bio'>
                    <p className='bio-title'>FILMMAKER BIOGRAPHY</p>
                    <p className='bio-body'>For many, films are a hobby. For some, they are 
                        a passion. But Karthik is a sort of a person, 
                        who always lived his life in 24 frames. Films 
                        were what shaped him since childhood. He 
                        says that he watched Rob Williams in awe, as 
                        he stood up on his desk to inspire his students 
                        to seize the day, in Dead Poets Society.</p>
                </div>
            </div>
        </div>
    )
}

export default InfoTab