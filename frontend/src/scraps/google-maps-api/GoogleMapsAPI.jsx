import PropTypes from "prop-types";
import AddressInput from "./AddressInput.jsx";

const GoogleMapsAPI = ({
  value,
  onChange,
  onBlur,
  isInvalid,
  errors,
  touched,
}) => {
  return (
    <AddressInput
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      isInvalid={isInvalid}
      errors={errors}
      touched={touched}
    />
  );
};

GoogleMapsAPI.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
  errors: PropTypes.string,
  touched: PropTypes.bool,
};

export default GoogleMapsAPI;
