import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add360Url = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('iframeURL', url); // Save URL to localStorage
    navigate('/'); // Go back to Home page
  };

  return (
    <div>
      <h2>Enter 360° View URL</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter iframe URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: '400px' }}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Add360Url;
