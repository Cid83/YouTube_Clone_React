import { categories } from '../utils/constants';
import { useContext } from 'react';
import { YoutubeContext } from '../context/youtubeContext';

const SideNav = () => {

  const { selectedCategory, setSelectedCategory } =
  
    useContext(YoutubeContext);

  return (
    <nav className="flex flex-col pt-4">
      {categories.map((item) => (
        <>
          <div
         
            onClick={() => setSelectedCategory(item.name)}
            
            className={`${
              selectedCategory === item.name && 'bg-gray-400 text-black'
            } flex items-center gap-2 p-3 py-2 text-lg cursor-pointer hover:bg-gray-700 rounded-2xl `}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          
          {item.divider && <hr />}
        </>
      ))}
    </nav>
  );
};

export default SideNav;