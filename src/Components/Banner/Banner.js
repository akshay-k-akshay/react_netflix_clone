import React, { useEffect, useState } from 'react'


import { Constants } from '../../Constants'
import { api } from '../../Apis'
import './Banner.css';

function Banner() {
    const [banner, setBanner] = useState()
    useEffect(async () => {
        const response = await api.banner()
        setBanner(response[Math.floor(Math.random() * 20)])

    }, [])
    return (
        <div
            style={{ backgroundImage: `url(${banner ? Constants.IMAGE_URL + banner.backdrop_path : ""})` }}
            className='banner'>
            <div className='content' >
                <h1 className='title'>{banner ? banner.title : "title"}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>
                    {banner ? banner.overview : ""}
                </h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
