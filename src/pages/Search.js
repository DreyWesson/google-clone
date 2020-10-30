import { Button } from "@material-ui/core";
import { Mic, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Search.css";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const [{ term }, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchOutlined className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search__buttonsHidden">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
