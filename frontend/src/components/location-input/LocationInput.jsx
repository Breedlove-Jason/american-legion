import { useRef, useState, useEffect } from "react";
import getGoogleMapsPlacesApiClient from "@/lib/googleApiClient.js";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import Message from "@/components/message/Message.jsx";
import { Input } from "@/components/forms/sponsor/SponsorForm.styles.jsx";
import {
  LocationDropdown,
  LocationDropdownItem,
} from "@/components/location-input/LocationInput.styles.jsx"; // Adjust path as necessary

const LocationInput = ({
  value,
  onChange,
  onBlur,
  isInvalid,
  errors,
  touched,
  onLocationSelected = () => {}, // Provide a default function
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const sessionTokenRef = useRef(null);

  // Initialize sessionTokenRef when the component mounts
  useEffect(() => {
    if (window.google && window.google.maps) {
      sessionTokenRef.current =
        new window.google.maps.places.AutocompleteSessionToken();
    }
  }, []);

  const loadSuggestions = async (inputValue) => {
    if (!inputValue || inputValue.trim().length <= 3) {
      setSuggestions([]);
      return;
    }

    clearTimeout(sessionTokenRef.current);

    sessionTokenRef.current = setTimeout(async () => {
      const places = await getGoogleMapsPlacesApiClient();
      if (
        !sessionTokenRef.current ||
        !(
          sessionTokenRef.current instanceof
          window.google.maps.places.AutocompleteSessionToken
        )
      ) {
        sessionTokenRef.current =
          new window.google.maps.places.AutocompleteSessionToken();
      }

      new places.AutocompleteService().getPlacePredictions(
        {
          input: inputValue,
          sessionToken: sessionTokenRef.current,
        },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setSuggestions(predictions);
          } else {
            setSuggestions([]);
          }
        },
      );
    }, 300);
  };

  const handleSuggestionSelected = async (suggestion) => {
    onChange({ target: { name: "address", value: suggestion.description } });
    setSuggestions([]);

    const places = await getGoogleMapsPlacesApiClient();
    const sessionToken = sessionTokenRef.current;
    sessionTokenRef.current =
      new window.google.maps.places.AutocompleteSessionToken();

    new places.PlacesService(
      document.getElementById("googlemaps-attribution-container"),
    ).getDetails(
      {
        placeId: suggestion.place_id,
        fields: ["formatted_address", "name", "geometry.location", "place_id"],
        sessionToken,
      },
      (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          if (typeof onLocationSelected === "function") {
            onLocationSelected(place);
          }
        }
      },
    );
  };

  const handleInput = (e) => {
    loadSuggestions(e.target.value);
    onChange(e);
  };

  return (
    <>
      <Form.Group controlId="formAddress" className="mb-3">
        <Input
          ref={inputRef}
          value={value}
          onChange={handleInput}
          onBlur={onBlur}
          placeholder="Enter your address"
          isInvalid={isInvalid}
        />
        {touched && errors && <Message>{errors}</Message>}
      </Form.Group>
      {suggestions.length > 0 && (
        <LocationDropdown
          className="suggestions"
          // style={{
          //   backgroundColor: "#000",
          //   border: "1px solid #ced4da",
          //   borderRadius: "20px",
          //   // maxHeight: "200px",
          //   // overflowY: "auto",
          //   listStyle: "none",
          //   textAlign: "left",
          // }}
        >
          {suggestions.map((suggestion) => (
            <LocationDropdownItem
              key={suggestion.place_id}
              onClick={() => handleSuggestionSelected(suggestion)}
            >
              <strong>{suggestion.structured_formatting.main_text}</strong>{" "}
              <small>{suggestion.structured_formatting.secondary_text}</small>
            </LocationDropdownItem>
          ))}
        </LocationDropdown>
      )}
      <div id="googlemaps-attribution-container"></div>
    </>
  );
};

LocationInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
  errors: PropTypes.string,
  touched: PropTypes.bool,
  onLocationSelected: PropTypes.func, // Make this prop optional
};

export default LocationInput;
