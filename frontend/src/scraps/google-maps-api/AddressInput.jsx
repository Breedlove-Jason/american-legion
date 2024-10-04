import PropTypes from "prop-types";
import usePlacesAutocomplete from "use-places-autocomplete";
import { useJsApiLoader } from "@react-google-maps/api";
import useOnclickOutside from "react-cool-onclickoutside";
import { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import Message from "@/components/message/Message.jsx";
import { Input } from "@/components/forms/sponsor/SponsorForm.styles.jsx";

const libraries = ["places"];

const AddressInput = ({
  value,
  onChange,
  onBlur,
  isInvalid,
  errors,
  touched,
}) => {
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const inputRef = useRef(null);
  const autoCompleteRef = useRef(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey,
    libraries,
  });

  const {
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  useEffect(() => {
    if (isLoaded) {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "us" },
          fields: ["formatted_address"],
          types: ["geocode"],
        },
      );

      autoCompleteRef.current.addListener("place_changed", () => {
        const place = autoCompleteRef.current.getPlace();
        const address = place.formatted_address || inputRef.current.value;
        onChange({ target: { name: "address", value: address } });
        setValue(address, false);
      });

      // Clean up the event listener on component unmount
      return () => {
        window.google.maps.event.clearInstanceListeners(
          autoCompleteRef.current,
        );
      };
    }
  }, [isLoaded, onChange]);

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  const handleSelect = (suggestion) => {
    const address = suggestion.description;
    console.log("Selected Address: ", address);
    setValue(address, false);
    onChange({ target: { name: "address", value: address } });
    clearSuggestions();
  };

  const renderSuggestions = () => {
    if (status === "OK") {
      return data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;

        return (
          <li
            key={place_id}
            onClick={() => handleSelect(suggestion)}
            className="suggestion-item"
          >
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
    }
    return null;
  };

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Form.Group controlId="formAddress" className="mb-3" ref={ref}>
      <Input
        ref={inputRef}
        value={value}
        onChange={handleInput}
        onBlur={onBlur}
        placeholder="Enter your address"
        isInvalid={isInvalid}
        className="full-width"
      />
      {status === "OK" && (
        <ul className="suggestions">{renderSuggestions()}</ul>
      )}
      {touched && errors && <Message>{errors}</Message>}
    </Form.Group>
  );
};

AddressInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
  errors: PropTypes.string,
  touched: PropTypes.bool,
};

export default AddressInput;
