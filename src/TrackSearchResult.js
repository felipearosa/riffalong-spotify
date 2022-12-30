import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TrackSearchResult = ({ track, chooseTrack }) => {
  const navigate = useNavigate();

  const handlePlay = () => {
    chooseTrack(track);
  }

  return (
    <Link to='/song' style={{ color: 'inherit', textDecoration: 'inherit'}} state={{ track }}>
      <div className="d-flex m-2 align-items-center" style={{ cursor: "pointer" }} onClick={handlePlay}>
        <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
        <div className="mx-3">
          <div>{track.title}</div>
          <div className="text-muted">{track.artist}</div>
        </div>
      </div>
    </Link>
  )
}

export default TrackSearchResult;







// const TrackSearchResult = ({ track, chooseTrack }) => {
//   const handlePlay = () => {
//     chooseTrack(track)
//   }

//   return (
//     <div className="d-flex m-2 align-items-center" style={{ cursor: "pointer"}} onClick={handlePlay}>
//       <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
//       <div className="mx-3">
//         <div>{track.title}</div>
//         <div className="text-muted">{track.artist}</div>
//       </div>
//     </div>
//   )
// }

// export default TrackSearchResult;
