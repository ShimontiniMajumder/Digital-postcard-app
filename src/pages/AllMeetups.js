import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
const [isLoading,setIsLoading] = useState(true);
const [loadedMeetups, setLoadedMeetups] = useState([]);
useEffect(()=>{
  setIsLoading(true);

  fetch(
    'https://react-meetup-database-3a478-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
     return response.json(); /*body of the response is converted to javascript object , 
     and also returns a promise*/
    }).then(data => {
      const meetups = [];
        for(const key in data){
          const meetup = {
            id: key ,
            ...data[key]
          };
            meetups.push(meetup);
          }      
      
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });

}, []); //useEffect is used to stop infinite loop of sending requests which does happen otherwise due to the component feasible to run 
       // it calls the component and sends requests only once when the component is called
  

    if(isLoading){
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

  return (
    <section>
      <h1>All Postcards</h1>
     <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
