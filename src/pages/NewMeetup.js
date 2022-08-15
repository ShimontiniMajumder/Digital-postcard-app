import {useNavigate} from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://react-meetup-database-3a478-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        ).then(() => {
            navigate('/', {replace:true});
        });

    } 

    return <section>
        <h1>Add New Postcard</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>;
}

export default NewMeetupPage;