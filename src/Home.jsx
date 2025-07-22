import { Link } from 'react-router-dom';
import './App.css'; // Make sure you import your CSS

const Home = () => {
  // Get the URL saved in localStorage
  const url = localStorage.getItem('iframeURL');

  return (
    <div className="full-screen-iframe">
      {url ? (
        <iframe
          src={url}
          title="360 View"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="no-url">
          <h2>No 360° URL found</h2>
          <p>Please add one first.</p>
          <Link to="/add">
            <button>Add 360° URL</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
