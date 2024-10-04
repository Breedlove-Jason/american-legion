import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is loaded
import "./Banner.styles.css"; // Custom styles for the banner
// import bannerImage from '../../assets/images/soldiers-saluting-flag.webp';

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        // src={bannerImage}
        alt="Soldiers Saluting Flag"
        className="img-fluid banner-image"
      />
      <div className="banner-text">
        <h1 className="display-4">Richard W. Townsend Post 84</h1>
        <p className="lead">Honoring Our Heroes</p>
      </div>
    </div>
  );
};

export default Banner;
