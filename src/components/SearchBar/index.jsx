import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import "./SearchBar.scss";



const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleType = e => {
    setValue(e.target.value);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  return (
    <div className="search-bar_wrp">
      <PlacesAutocomplete
        value={value}
        onChange={handleType}
        onSelect={handleSelect}
        hasCustomInput
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <TextField
              label="Search for address"
              className="search-bar_input"
              variant="outlined"
            />

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => (
                <div {...getSuggestionItemProps(suggestion)}>
                  <span>{suggestion.description}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </PlacesAutocomplete>

      <Button variant="outlined" margin="normal" color="primary">
        Search
          </Button>
    </div>
  );
};

export default SearchBar;
