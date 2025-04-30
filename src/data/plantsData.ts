
export interface Plant {
  name: string;
  commonNames: string;
  habitat: string;
  medicinalUses: string;
  cultivation: string;
  image: string;
  learnMoreUrl: string;
  description: string;
  benefits: Array<{benefit: string, explanation: string}>;
  dosage: string;
  precautions: string;
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
    description: "Tulsi, also known as Holy Basil, is one of the most sacred plants in India and is often planted around Hindu shrines. The plant has a strong aromatic smell and a bitter, astringent taste. In Ayurveda, it is considered a rasayana (rejuvenator) and believed to promote longevity.",
    benefits: [
      {benefit: "Respiratory Health", explanation: "Helps in treating respiratory disorders like bronchitis and asthma"},
      {benefit: "Stress Relief", explanation: "Acts as an adaptogen to counter stress and promote mental balance"},
      {benefit: "Immune Boosting", explanation: "Strengthens the body's defense mechanism against pathogens"}
    ],
    dosage: "2-3 leaves or 1-2 teaspoons of dried leaf powder daily. Can be consumed as tea or added to food.",
    precautions: "Generally safe for most adults. Pregnant women should use with caution. May interact with certain medications like anticoagulants."
  },
  {
    name: "Ashwagandha (Withania somnifera)",
    commonNames: "Indian Ginseng, Winter Cherry",
    habitat: "Native to India, grows well in arid regions.",
    medicinalUses: "Adaptogen, helps reduce stress and anxiety, boosts immunity.",
    cultivation: "Prefers dry, well-drained soil and full sunlight.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    learnMoreUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3573577/",
    description: "Ashwagandha is one of the most powerful herbs in Ayurvedic healing. It has been used for over 3,000 years to relieve stress, increase energy levels, and improve concentration. The Sanskrit word Ashwagandha means 'the smell of a horse,' which refers to both the herb's distinct smell and its ability to increase strength.",
    benefits: [
      {benefit: "Stress Reduction", explanation: "Reduces cortisol levels and helps the body resist physical and mental stress"},
      {benefit: "Enhanced Vitality", explanation: "Improves energy levels and overall physical endurance"},
      {benefit: "Cognitive Function", explanation: "Supports brain function and may help with memory and cognitive tasks"}
    ],
    dosage: "300-500 mg of root extract twice daily. Best taken with warm milk or water.",
    precautions: "Should be avoided by pregnant women. May interact with thyroid medications, sedatives, and immunosuppressants."
  },
  {
    name: "Turmeric (Curcuma longa)",
    commonNames: "Haldi, Indian Saffron",
    habitat: "Native to Southeast Asia, requires a warm, humid climate.",
    medicinalUses: "Anti-inflammatory, antioxidant, used in digestive health.",
    cultivation: "Grows in rich, well-drained soil with ample rainfall.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    learnMoreUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5664031/",
    description: "Turmeric has been used in India for thousands of years as both a spice and medicinal herb. It contains curcumin, a compound with powerful anti-inflammatory effects and a very strong antioxidant. The golden spice is part of daily diet in many Asian countries and is considered auspicious in Hindu rituals.",
    benefits: [
      {benefit: "Joint Health", explanation: "Reduces inflammation and pain in conditions like arthritis"},
      {benefit: "Digestive Aid", explanation: "Stimulates bile production and soothes digestive issues"},
      {benefit: "Skin Health", explanation: "Used topically and internally for various skin conditions"}
    ],
    dosage: "400-600 mg of curcumin (standardized extract) three times daily. Best absorbed when taken with black pepper or fat.",
    precautions: "High doses may cause digestive issues. May interact with blood thinners and diabetes medications."
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
