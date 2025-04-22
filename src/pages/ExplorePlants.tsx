
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import PlantDetails from "@/components/PlantDetails";
import { useState } from "react";

const ExplorePlants = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const plants = [
    {
      name: "Tulsi (Ocimum sanctum)",
      commonNames: "Holy Basil, Sacred Basil",
      habitat: "Native to India, commonly found in gardens.",
      medicinalUses: "Known for its anti-inflammatory, anti-viral, and antioxidant properties.",
      cultivation: "Prefers warm climates and well-drained soil. Grows well in pots or garden beds.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      learnMoreUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4296439/",
    },
    {
      name: "Ashwagandha (Withania somnifera)",
      commonNames: "Indian Ginseng, Winter Cherry",
      habitat: "Native to India, grows well in arid regions.",
      medicinalUses: "Adaptogen, helps reduce stress and anxiety, boosts immunity.",
      cultivation: "Prefers dry, well-drained soil and full sunlight.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      learnMoreUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3573577/",
    },
    {
      name: "Turmeric (Curcuma longa)",
      commonNames: "Haldi, Indian Saffron",
      habitat: "Native to Southeast Asia, requires a warm, humid climate.",
      medicinalUses: "Anti-inflammatory, antioxidant, used in digestive health.",
      cultivation: "Grows in rich, well-drained soil with ample rainfall.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      learnMoreUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5664031/",
    },
  ];

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Explore Ayurvedic Plants</h1>
        
        <div className="mb-8 flex gap-4">
          <Input
            type="text"
            placeholder="Search for plants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
          <Button className="bg-green-600 hover:bg-green-700">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <div className="space-y-8">
          {filteredPlants.map((plant, index) => (
            <PlantDetails
              key={index}
              {...plant}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExplorePlants;
