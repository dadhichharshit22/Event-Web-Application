import React, { useState } from 'react'

export interface IEvent {
    _id?:string;
    eventName:string;
    description:string;
    date:string;
    domain:string;
    location:string;
    capacity:number;
    image?:string;
    registeredUsers?: string[]; // array of user IDs

}
const CreateEvent:React.FC = () => {

    const [event,setEvent] = useState<IEvent>({
        eventName: "",
        description:"",
        date:"",
        domain:"",
        location:"",
        capacity:0,
        image:"",


    });


    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name,value} = e.target;
    setEvent((prevEvent)=>({
        ...prevEvent,
        [name]:value,
    }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const response = await axios.post("/api/events",event);
      console.log("Event Created:",response.data);
      alert("Event created Successfully!");

    } catch(error){
      console.error('Error creating event:',error);
      alert('Failed to create Event:');
    }
  };
  return (
    <form onSubmit={handleSubmit} className=''>
       <h2>Create Event</h2>
       <input
       type='text'
       name='eventName'
       placeholder='Event Name'
       value={event.eventName}
       onChange={handleChange}
       required/>

       <textarea
       name='description'
       placeholder='Description'
       value={event.description}
       onChange={handleChange}
       required
       />

       <input
       type="date"
       name='date'
       value={event.date}
       onChange={handleChange}
       required/>

       <input
       type='text'
       name='domain'
       placeholder='Domain'
       value={event.domain}
       onChange={handleChange}
       required/>

       <input
       type='text'
       name='location'
       placeholder='Location'
       value={event.location}
       onChange={handleChange}
       required/>

       <input
       type='number'
       name='capacity'
       placeholder='Capacity'
       value={event.capacity}
       onChange={handleChange}
       required/>

       <input
       type='text'
       name='image'
       placeholder='Image URL'
       value={event.image}
       onChange={handleChange}
       />

       <button type="submit">Create Event</button>
    </form>
  )
}

export default CreateEvent
