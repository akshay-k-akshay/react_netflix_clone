import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import YouTube from 'react-youtube';

import './Suggestions.css'
import { api } from '../../Apis'
import { Constants } from '../../Constants'

function Suggestions(props) {
    const [movies, setMovies] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [UrlId, setUrlId] = useState('');
    const closeModal = () => {
        setIsOpen(false);
        setUrlId('')
    }
    useEffect(async () => {
        const response = await api.originals(props.url)
        setMovies(response)
    }, [])
    const opts = {
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const playVideo = (id) => {
        api.videos(id).then((response) => {
            if (response.length !== 0) {
                setUrlId(response[Math.floor(0)].key)
            }
        })
        setIsOpen(true)
    }
    const customStyles = {
        content: {
            top: '45%',
            right: '50%',
            bottom: '0%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className='posters'>
                {
                    movies.map((movie) => {
                        return (
                            <img className='poster' onClick={() => playVideo(movie.id)} src={`${Constants.IMAGE_URL + movie.backdrop_path}`} alt="" />
                        )
                    })
                }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
            >
                <div>
                    <span style={{ color: '#000', fontSize: '30px', float: 'right', cursor: 'pointer' }} onClick={() => closeModal()}>x</span>
                </div>
                {UrlId ? <YouTube videoId={UrlId} opts={opts} /> : <h3 style={{ color: '#000', fontSize: '30px' }}>Videos not available</h3>}
            </Modal>
        </div>
    )
}

export default Suggestions

// import React from 'react'
// import './Suggestions.css'
// function Suggestions() {
//     const [movies, setMovies] = useState([])
//     const [modalIsOpen, setIsOpen] = useState(false);
//     const [UrlId, setUrlId] = useState('');
//     const closeModal = () => {
//         setIsOpen(false);
//         setUrlId('')
//     }
//     useEffect(async () => {
//         const response = await api.originals(props.url)
//         setMovies(response)
//     }, [])
//     const opts = {
//         width: '100%',
//         playerVars: {
//             autoplay: 1,
//         },
//     };
//     const playVideo = (id) => {
//         api.videos(id).then((response) => {
//             if (response.length !== 0) {
//                 setUrlId(response[Math.floor(0)].key)
//             }
//         })
//         setIsOpen(true)
//     }
//     const customStyles = {
//         content: {
//             top: '45%',
//             right: '50%',
//             bottom: '0%',
//             left: '50%',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//         },
//     };
//     return (
//         <div className='row'>
//             <h2>Title</h2>
//             <div className='posters'>
//                 <img className='poster' alt='poster' src='https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w' />
//             </div>
//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 ariaHideApp={false}
//                 style={customStyles}
//             >
//                 <div>
//                     <span style={{ color: '#000', fontSize: '30px', float: 'right', cursor: 'pointer' }} onClick={() => closeModal()}>x</span>
//                 </div>
//                 {UrlId ? <YouTube videoId={UrlId} opts={opts} /> : <h3 style={{ color: '#000', fontSize: '30px' }}>Videos not available</h3>}
//             </Modal>
//         </div>
//     )
// }

// export default Suggestions