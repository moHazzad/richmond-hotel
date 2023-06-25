import { useState, useEffect } from "react";
import axios from "axios";

const FilterBy = () => {
  const [isChecked, setIsChecked] = useState({}); // Use an object to store the checked state of each checkbox
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    axios.get('filtersBy.json')
      .then(response => {
        const items = response.data;
        setFilters(items);
      })
      .catch(error => {
        console.error('Error retrieving data:', error);
      });
  }, []);

  const handleCheckboxChange = (categoryId) => {
    setIsChecked(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId]
    }));
  };

  return (
    <div>
      <h1>Filter By</h1>
      <div className="divider"></div>
      <div>
        <div className="flex flex-col gap-4 text-[#DCC69C]">
          {filters.map(category => (
            <div className="flex gap-6" key={category.id}>
              
                <input
                  type="checkbox"
                  checked={isChecked[category.id]}
                  className="checkbox checkbox-sm bg-[#DCC69C]"
                  onChange={() => handleCheckboxChange(category.id)}
                />
              
              
                <h3>{category.title}</h3>
              
                <h2>{category.quantity}</h2>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
