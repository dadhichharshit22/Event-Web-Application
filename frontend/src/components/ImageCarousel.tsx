// ImageCarousel.tsx
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ImageCarousel: React.FC = () => {
  return (
    <div className="relative w-full h-[50vh] max-w-full overflow-hidden">
      <Carousel>
        <CarouselContent className="h-full">
          <CarouselItem className="flex items-center justify-center h-full">
            <img
              src="/path/to/image1.jpg"
              alt="Description 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center h-full">
            <img
              src="/path/to/image2.jpg"
              alt="Description 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </CarouselItem>
          <CarouselItem className="flex items-center justify-center h-full">
            <img
              src="/path/to/image3.jpg"
              alt="Description 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <CarouselPrevious className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            &lt; {/* You can replace this with an icon */}
          </CarouselPrevious>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <CarouselNext className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            &gt; {/* You can replace this with an icon */}
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
