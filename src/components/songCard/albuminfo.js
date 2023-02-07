import React from "react";
import "./albuminfo.css"

const AlbumInfo = ({album}) => {
    const artists = []
    album.artists.forEach(element => {
        artists.push(element.name);
    });
    return(
        <div>
            <div className="albumName-container">
            <p>{album?.name + " - " + artists?.join(", ")}</p>
            </div>
            <div className="album-info">
                <p>{`${album?.name} is an ${album?.album_type}`}</p>
            </div>
            <div className="album-release">
                <p></p>
            </div>
        </div>
    )
}


export default AlbumInfo;