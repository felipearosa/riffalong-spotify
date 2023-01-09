import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import SpotifyWebApi from "spotify-web-api-node";

import TrackSearchResult from './../components/UI/TrackSearchResult'

const spotifyApi = new SpotifyWebApi({
  clientId: '7ea15b8610d0483f946cdf7ea8615253'
})


const Search = () => {
  const accessToken = useSelector(state => state.auth.accessToken);

  const location = useLocation();
  const search = location.state.searchQuery;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.searchTracks(search).then(data => {
      setSearchResults(
        data.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, track.album.images[0])

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })


  }, [accessToken, searchResults])

  console.log(searchResults)

  return(
    <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>{searchResults.map(track => (
      <TrackSearchResult track={track} key={track.uri} />
      // <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
    ))}</div>
  )
}

export default Search
