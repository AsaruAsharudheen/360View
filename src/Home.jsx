import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  const url = localStorage.getItem('iframeURL');

  return (
    <div className="full-screen-iframe">
      {/* Add button to go to Add360Url page */}
      <div className="top-bar">
        <Link to="/add">
          <button className="add-button">Add / Update 360° URL</button>
        </Link>
      </div>

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
