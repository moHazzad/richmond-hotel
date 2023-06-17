import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../SharedCompontes/Button";

function DateSelection() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handlePersonChange = (e) => {
    setSelectedPerson(e.target.value);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-4  justify-between items-center text-center">
        <div className="flex flex-col">
          <label className="text-[#DCC69C]">Start Date:</label>
          <DatePicker selected={startDate} onChange={handleStartDateChange} className="bg-[#3C4A33] text-[#DCC69C]" />
        </div>
        <div className="flex flex-col">
          <label className="text-[#DCC69C]">End Date:</label>
          <DatePicker selected={endDate} onChange={handleEndDateChange} className="bg-[#3C4A33] text-[#DCC69C]" />
        </div>
        <div>
        <select
          id="person-select"
          value={selectedPerson}
          onChange={handlePersonChange}
        >
          <option value="">Select</option>
          <option value="1">1 person</option>
          <option value="2">2 persons</option>
          <option value="3">3 persons</option>
        </select>
      </div>
      <div>
      <Button buttonName={'Availability'} />
      </div>
      </div>
      
    </div>
  );
}

export default DateSelection;
