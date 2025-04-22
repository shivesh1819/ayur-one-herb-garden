
import { Card, CardContent } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";

const ExplorePlants = () => {
  const plants = [
    {
      name: "Tulsi (Holy Basil)",
      description: "A sacred plant in Ayurvedic medicine known for its healing properties.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    },
    {
      name: "Neem",
      description: "A powerful medicinal plant used in traditional Ayurvedic treatments.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    },
    {
      name: "Ashwagandha",
      description: "An ancient medicinal herb known for its adaptogenic properties.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Explore Ayurvedic Plants</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Leaf className="text-white w-12 h-12" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{plant.name}</h3>
                  <p className="text-gray-600">{plant.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExplorePlants;
