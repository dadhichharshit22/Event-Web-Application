import { Button } from "./ui/button";
const navbar = () => {
  return (
    <div className="rounded-md flex justify-between items-center bg-custom-purple space-x-2 p-4">
      
      <h1 className="font-meow text-6xl font-bold ">AuraEvents</h1>
      
      <div className="flex rounded-lg bg-white h-1/2 "> 
        
        <div className="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M19 11a8 8 0 1 1-16 0a8 8 0 0 1 16 0" opacity="0.16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></g></svg>
        <input type="text" className="space-x-3 w-1/2 " placeholder="Search"/>
          </div>
        <div className="flex rounded-lg w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
            <input type="text" placeholder="City" className=""/>
        </div>
      </div>
      <div className="flex space-x-3">
      
        
      <button className="text-black flex items-center gap-2 justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"/><path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"/></g></svg>Create Event</button>
    
      <div>
        <Button variant="secondary">Login</Button>
      </div>
      <div>
        <Button>Sign up</Button>
      </div>
      </div>
 </div>
  )
}

export default navbar;
