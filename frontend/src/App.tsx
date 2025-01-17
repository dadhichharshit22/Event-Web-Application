import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ImageCarousel from "./components/ImageCarousel";
import Card from "./components/card";
import CreateEvent from "./pages/createPage";

function App() {
  // Create an array of card components
  const cards = Array.from({ length: 9 }, (_, index) => <Card key={index} />);

  return (


   
      <div className="font-lexend h-screen w-full">

           {location.pathname !== '/create' && (
        <>
        <div className="p-4">
          <Navbar />
        </div>
        
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <ImageCarousel />
        </div>

        <div className="grid grid-cols-3 gap-4 p-6">{cards}</div>

        <Footer />
        </>)}
        
        {/* Routes should be defined here */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/create" element={<CreateEvent />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    
  );
}

export default App;
