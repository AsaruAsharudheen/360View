import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Add360Url from './Add360Url';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add360Url />} />
      </Routes>
    </>
  );
};

export default App;
