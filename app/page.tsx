"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { ShoppingBag, PlusCircle } from "lucide-react";
import { useState, useEffect } from "react"; // Import useState and useEffect

export default function Home() {
  // Define an array of image URLs
  const images = [
    "/img/joan-edited.jpeg",
    "/img/pwaniteknowgalz.jpg",
    "/img/women-in-tech-1.jpeg",
    "/img/womenintech5.jpeg",
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the background image
  const changeBackgroundImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to change the background image at a specific interval
  useEffect(() => {
    const intervalId = setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds (adjust as needed)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            // style={{ backgroundImage: `url(/img/joan-edited.jpeg)` }}
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-3xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                We are nurturing the next generation of girls in STEM
                <Button size="lg" className="w-full py-6 text-xl">
                  <PlusCircle className="mr-2" />
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={products} />
        </div> */}
      </div>
    </Container>
  );
}
