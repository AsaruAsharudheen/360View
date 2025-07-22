import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Home = () => {
  const url = localStorage.getItem('iframeURL');
  const navigate = useNavigate();

  // If no URL, redirect to /add
  useEffect(() => {
    if (!url) {
      navigate('/add');
    }
  }, [url, navigate]);

  return (
    <div className="full-screen-iframe">
      {url && (
        <iframe
          src={url}
          title="360 View"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Home;
