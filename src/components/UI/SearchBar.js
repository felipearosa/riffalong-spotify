import { Form } from "react-bootstrap";

const SearchBar = () => {
  const sendQuery = e =>{
    e.preventDefault();
    console.log('sending query')
  }

  return(
    <Form.Control type="search" placeholder="Search Songs/Artists" onChange={sendQuery} />
  )
}

export default SearchBar;
