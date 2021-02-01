import React from 'react'

const Spotify = () => {
    const base_url = 'https://accounts.spotify.com/authorize'
    const client_id = '77a54364c574454aa3065e6546d98944'
    const redirect_uri = 'http://localhost:3000/'
    // const url = window.location.host
    const scope =[
        'user-read-private' ,
        'user-read-email' ,
        'user-modify-playback-state' ,
        'user-read-currently-playing'
    ]
    return (
        <div>
            <h1 style={{color:'white'}}>Hello world</h1>
            <a href={`${base_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&
            scope=${scope.join("%20")}`}>Login spotify</a>
            {
                // console.log(url)
            }
        </div>
    )
}

export default Spotify
