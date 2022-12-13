import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import useAuth from "./hooks/useAuth"
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResult from "./TrackSearchResult";

const spotifyApi = new SpotifyWebApi({
  clientId: '7ea15b8610d0483f946cdf7ea8615253'
})

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

    }, 1500);


    return () => {
      cancel = true
      clearTimeout(timeout)
    }

  }, [search, accessToken])



  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Form.Control type="search" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>{searchResults.map(track => (
        <TrackSearchResult track={track} key ={track.uri} />
      ))}</div>
      <div>Bottom</div>
    </Container>
  )
}

export default Dashboard
