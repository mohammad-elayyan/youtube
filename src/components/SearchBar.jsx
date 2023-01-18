import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { SearchFeed } from "./";

const SearchBar = () => {
  const [searchedTerm, setSearchedTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (searchedTerm) {
      
      navigate(`/search/${searchedTerm}`);
      setSearchedTerm('');
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input className="search-bar" placeholder="Search.." value={searchedTerm} onChange={(e)=> setSearchedTerm(e.target.value)} />
      <IconButton type="submit" sx={{ p:'10px', color:'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
