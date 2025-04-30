
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Leaf, TreeDeciduous } from "lucide-react";
import Navbar from "@/components/Navbar";
import PlantDetails from "@/components/PlantDetails";
import { useState, useEffect } from "react";
import { useSearch } from "@/context/SearchContext";
import { plants } from "@/data/plantsData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const ExplorePlants = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [filterCategory, setFilterCategory] = useState("all");

  // Update local search when context search changes
  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

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
        <p className="max-w-3xl mx-auto px-4">
          Discover the ancient healing wisdom of Ayurvedic herbs that have been
          used for thousands of years to promote wellness and balance.
        </p>
      </header>

      <section className="bg-[#F2FCE2] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">The Ancient Science of Ayurvedic Herbs</h2>
              <p className="mb-4 text-gray-700">
                For over 5,000 years, Ayurveda has utilized the healing properties of herbs and plants to restore balance 
                in the body. These powerful botanicals are categorized according to their effects on the three doshas: 
                Vata, Pitta, and Kapha.
              </p>
              <p className="text-gray-700">
                Each plant contains unique compounds that can support various bodily functions, from improving digestion 
                to enhancing mental clarity and promoting longevity. Our comprehensive database helps you discover these 
                natural remedies and their traditional uses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Balance Doshas</h3>
                  <p className="text-gray-600 text-sm">Herbs carefully selected to balance your unique constitution and promote overall wellbeing.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <TreeDeciduous className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Natural Healing</h3>
                  <p className="text-gray-600 text-sm">Discover plants with medicinal properties backed by thousands of years of traditional use.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Research Based</h3>
                  <p className="text-gray-600 text-sm">Modern scientific validation of ancient herbal wisdom through clinical studies.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Filter className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Holistic Benefits</h3>
                  <p className="text-gray-600 text-sm">Plants that address multiple aspects of health – physical, mental and spiritual.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 p-8 bg-white">
        <form onSubmit={handleSearch} className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Input
              type="text"
              placeholder="Search for plants..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
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

          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>

        <div className="space-y-8 max-w-7xl mx-auto">
          {searchQuery && filteredPlants.length === 0 ? (
            <div className="p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-800">No plants found matching "{searchQuery}"</h2>
              <p className="mt-2 text-gray-600">Try searching for another plant name or common name.</p>
            </div>
          ) : (
            filteredPlants.map((plant, index) => (
              <div
                key={index}
                className="bg-[url('/model-container-background.jpg')] bg-center bg-cover rounded-xl shadow-lg p-6"
              >
                <PlantDetails {...plant} />
              </div>
            ))
          )}
        </div>
      </main>

      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
            Understanding Ayurvedic Principles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Vata Dosha</h3>
              <p className="text-gray-600 mb-4">
                Associated with air and ether elements. Herbs that pacify Vata are typically warming, 
                grounding, and nourishing, like Ashwagandha and Ginger.
              </p>
              <p className="text-sm text-green-600 font-medium">
                For: Dryness, cold, anxiety, constipation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Pitta Dosha</h3>
              <p className="text-gray-600 mb-4">
                Connected to fire and water elements. Cooling and soothing herbs like Aloe Vera, 
                Coriander, and Neem help balance Pitta.
              </p>
              <p className="text-sm text-green-600 font-medium">
                For: Inflammation, heat conditions, skin issues
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Kapha Dosha</h3>
              <p className="text-gray-600 mb-4">
                Represents earth and water elements. Warming, stimulating herbs like Turmeric, 
                Black Pepper, and Holy Basil help balance Kapha.
              </p>
              <p className="text-sm text-green-600 font-medium">
                For: Congestion, sluggishness, excess weight
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-green-700 to-green-400 text-white text-center py-6 mt-8 shadow-inner">
        <p>© 2024 Ayurvedic Plants. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExplorePlants;
