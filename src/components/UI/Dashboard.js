import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "./TrackSearchResult";
import Player from "../Player/Player";
import { useSelector } from "react-redux";

const spotifyApi = new SpotifyWebApi({
  clientId: '7ea15b8610d0483f946cdf7ea8615253'
})

const Dashboard = () => {
  const accessToken = useSelector(state => state.auth.accessToken);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  const chooseTrack = track => {
    setPlayingTrack(track);
    setSearch('')
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return;
    if (!search) return setSearchResults([]);
    let cancel = false

    const timeout = setTimeout(() => {
      spotifyApi.searchTracks(search).then(data => {
        if (cancel) return
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

    }, 1000);


    return () => {
      cancel = true
      clearTimeout(timeout)
    }

  }, [search, accessToken])


  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Form.Control type="search" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>{searchResults.map(track => (
        <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
      ))}</div>
      <div><Player accessToken={accessToken} trackUri={playingTrack?.uri} /></div>
    </Container>
  )
}

export default Dashboard
