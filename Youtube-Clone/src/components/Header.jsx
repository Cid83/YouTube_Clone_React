import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  return (
    <header className="flex justify-between items-center p-2 sticky">
      <Link to={'/'}>
        <div className="flex items-center">
          <img
            className="w-[100px]"
            src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
          />
          <h1 className="text-white text-2xl font-bold">YouTube</h1>
        </div>
      </Link>
      <form className="flex items-center bg-white rounded">
        <input
          type="text"
          className="px-2 py-1 rounded-full text-black outline-none"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link to={`/results?search_query=${query}`} className="mr-2">
          <FiSearch className="text-black" />
        </Link>
      </form>
      <FaBell className="mr-3" />
    </header>
  );
};

export default Header;