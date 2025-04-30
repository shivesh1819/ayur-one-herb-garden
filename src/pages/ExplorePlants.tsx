
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
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
      </header>

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

      <footer className="bg-gradient-to-b from-green-700 to-green-400 text-white text-center py-6 mt-8 shadow-inner">
        <p>© 2024 Ayurvedic Plants. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExplorePlants;
