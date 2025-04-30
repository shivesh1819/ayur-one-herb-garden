
export interface Plant {
  name: string;
  commonNames: string;
  habitat: string;
  medicinalUses: string;
  cultivation: string;
  image: string;
  learnMoreUrl: string;
}

export const plants: Plant[] = [
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

export const searchPlants = (query: string): Plant[] => {
  if (!query) return [];
  
  const lowerCaseQuery = query.toLowerCase();
  return plants.filter(
    plant => 
      plant.name.toLowerCase().includes(lowerCaseQuery) || 
      plant.commonNames.toLowerCase().includes(lowerCaseQuery)
  );
};

export const getPlantInfo = (query: string): string => {
  const matchedPlants = searchPlants(query);
  
  if (matchedPlants.length === 0) {
    return `I couldn't find information about "${query}" in our database. Would you like to know about other Ayurvedic plants like Tulsi, Ashwagandha, or Turmeric?`;
  }
  
  const plant = matchedPlants[0];
  return `
${plant.name}

Common Names: ${plant.commonNames}
Habitat: ${plant.habitat}
Medicinal Uses: ${plant.medicinalUses}
Cultivation: ${plant.cultivation}

Would you like to know more about this plant or discover other Ayurvedic herbs?
  `;
};
