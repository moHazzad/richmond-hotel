import { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FilterBy from "./FilterBy";
import axios from "axios";
import SingleRoom from "./SingleRoom";

const AllRooms = () => {
  const [rooms, setRooms] = useState([])

useEffect(()=>{
  axios.get('rooms.json')
  .then(res =>{
    const allRooms = res.data
    console.log(allRooms);
    setRooms(allRooms)
  }).catch(error => {
    console.error('Error retrieving data:', error);
  });
},[])


  return (
    <div>
      {/* <div>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div> */}
      <div className="flex justify-between ">
        <div className="w-[20%]">
        <FilterBy />
        </div>
        <div className="w-[80%]">
          {
            rooms.map(room => <SingleRoom key={room.id} room={room} />)
          }
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
