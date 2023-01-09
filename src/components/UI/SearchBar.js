import { useRef } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const searchQuery = useRef();

  const sendQuery = e => {
    e.preventDefault();
    console.log(searchQuery.current.value)
    navigate('/search', { state: { searchQuery: searchQuery.current.value } })
    console.log('sending query');
  }

  return (
    <Form onSubmit={sendQuery}>
      <Form.Control type="search" placeholder="Search Songs/Artists" ref={searchQuery} />
    </Form>
  )
}

export default SearchBar;
