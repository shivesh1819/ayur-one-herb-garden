
import Navbar from "@/components/Navbar";
import { TreeDeciduous, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex flex-1 items-center justify-center">
        <section className="w-full py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800 animate-fade-in">
                Welcome to AyurOne
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Explore our virtual herbal garden and discover the power of ancient Ayurvedic plants.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
                alt="Herbal Garden"
                className="rounded-xl shadow-lg w-80 h-56 object-cover border-4 border-green-200"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Link to="/explore-plants" className="block hover:transform hover:scale-105 transition-transform">
              <div className="bg-[#F2FCE2] rounded-xl shadow flex flex-col md:flex-row items-center px-8 py-8 gap-4 border border-green-200">
                <div className="flex-shrink-0 flex items-center mb-4 md:mb-0 md:mr-6">
                  <div className="bg-green-100 rounded-full p-4 flex items-center justify-center">
                    <TreeDeciduous className="text-green-700 w-10 h-10" strokeWidth={2.5} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-800 mb-2">
                    Age of Explore Plant
                  </h2>
                  <p className="text-gray-700 text-base">
                    Embark on a botanical journey and delve into the era when nature and healing were one. Uncover fascinating facts about ancient plants, their longevity, and their roles in Ayurveda’s rich history. Ready to explore the wisdom of the oldest herbs?
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
              Discover Our Herbal Collection
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  {
                    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
                    alt: "Orange flowers in bloom",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
                    alt: "Sunlight through green leaves",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
                    alt: "Forest with sunbeams",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
                    alt: "Pine trees in nature",
                  },
                ].map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Link to="/explore-plants" className="block">
                      <div className="overflow-hidden rounded-xl border border-green-200 group">
                        <AspectRatio ratio={4/3}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:brightness-90"
                          />
                        </AspectRatio>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      </main>
      <section id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            About AyurOne
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                AyurOne is your trusted companion in exploring the ancient wisdom of Ayurvedic medicine. 
                Our platform brings together centuries-old knowledge of medicinal plants and modern technology 
                to help you discover natural healing solutions.
              </p>
              <p className="text-lg text-gray-600">
                With our virtual doctor consultation and extensive plant database, 
                we make it easier for you to access traditional Ayurvedic knowledge 
                and connect with experienced practitioners.
              </p>
              <div className="pt-4">
                <Link 
                  to="/chat" 
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Consult with Doctor
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Nature"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-green-800/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-green-700 py-6 text-center text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-4 text-lg font-semibold">Contact Us</div>
          <div className="flex justify-center space-x-8 mb-4">
            <a 
              href="mailto:info@ayurone.com" 
              className="hover:underline flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Send email"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6 mr-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m0 0l4 4M8 12v8a2 2 0 002 2h4a2 2 0 002-2v-8m-8 0V8a4 4 0 018 0v4" />
              </svg>
              info@ayurone.com
            </a>
            <a 
              href="https://instagram.com/ayurone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline flex items-center"
              aria-label="Visit Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
              </svg>
              @ayurone
            </a>
            <a 
              href="tel:+1234567890" 
              className="hover:underline flex items-center"
              aria-label="Call us"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6 mr-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44a11.05 11.05 0 005.16 5.16l2.44-1.35L19 19v2a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
              </svg>
              +1 (234) 567-890
            </a>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} AyurOne. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
