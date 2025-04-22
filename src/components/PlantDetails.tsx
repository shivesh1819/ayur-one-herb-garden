
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PlantDetailsProps {
  name: string;
  commonNames: string;
  habitat: string;
  medicinalUses: string;
  cultivation: string;
  image: string;
  learnMoreUrl: string;
}

const PlantDetails = ({
  name,
  commonNames,
  habitat,
  medicinalUses,
  cultivation,
  image,
  learnMoreUrl,
}: PlantDetailsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <div className="w-full md:w-[500px] h-[500px] bg-gray-100 rounded-lg">
        {/* Placeholder for 3D model viewer */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="plant-info max-w-[400px] text-left text-gray-800">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div className="space-y-3 text-lg">
          <p><strong className="text-green-700">Common Names:</strong> {commonNames}</p>
          <p><strong className="text-green-700">Habitat:</strong> {habitat}</p>
          <p><strong className="text-green-700">Medicinal Uses:</strong> {medicinalUses}</p>
          <p><strong className="text-green-700">Cultivation:</strong> {cultivation}</p>
        </div>
        <Button 
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded"
          onClick={() => window.open(learnMoreUrl, '_blank')}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default PlantDetails;
