
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import PlantDetails from "@/components/PlantDetails";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ExplorePlants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

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

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plant.commonNames.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "all" || 
                          plant.medicinalUses.toLowerCase().includes(filterCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <header className="bg-gradient-to-b from-green-400 to-green-700 text-white py-8 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">
          Explore Ayurvedic Plants
        </h1>
      </header>

      <main className="flex-1 p-8 bg-white">
        <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Input
              type="text"
              placeholder="Search for plants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 border-green-200 focus:border-green-500"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          
          <Select
            value={filterCategory}
            onValueChange={setFilterCategory}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by property" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="anti-inflammatory">Anti-inflammatory</SelectItem>
              <SelectItem value="antioxidant">Antioxidant</SelectItem>
              <SelectItem value="digestive">Digestive Health</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="space-y-8 max-w-7xl mx-auto">
          {filteredPlants.map((plant, index) => (
            <div
              key={index}
              className="bg-[url('/model-container-background.jpg')] bg-center bg-cover rounded-xl shadow-lg p-6"
            >
              <PlantDetails {...plant} />
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gradient-to-b from-green-700 to-green-400 text-white text-center py-6 mt-8 shadow-inner">
        <p>© 2024 Ayurvedic Plants. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExplorePlants;
