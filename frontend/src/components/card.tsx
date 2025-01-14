import photo from "../assets/pexels-joshsorenson-976866.jpg"

const card = () => {
  return (
    <div className="rounded-md bg-purple-100 p-4 shadow-md">
      <div className="rounded-md">
        <img
          src={photo}
          alt="some image"
          className="overflow-hidden"
        />
      </div>

      <div>
        <div className="Des font-bold">
          Pool Party, Games, Belly & Pole Dance, Ramp Show, Buffet Dinner &
          Drinks
        </div>
        <div className="time font-light">Sat, Jan 11 • 6:00 PM</div>
        <div className="location font-black">Jaipur</div>
        <div className="Type font-bold">Free</div>
        <div className="font-">Sonali Events Planner</div>
        <div className="AuthorFollowers">14 Followers</div>
      </div>
    </div>
  );
}

export default card
