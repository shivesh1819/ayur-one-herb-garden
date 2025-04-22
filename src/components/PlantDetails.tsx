
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
    <Card className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-green-800">{name}</h3>
            <div className="space-y-2">
              <p><strong className="text-green-700">Common Names:</strong> {commonNames}</p>
              <p><strong className="text-green-700">Habitat:</strong> {habitat}</p>
              <p><strong className="text-green-700">Medicinal Uses:</strong> {medicinalUses}</p>
              <p><strong className="text-green-700">Cultivation:</strong> {cultivation}</p>
            </div>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open(learnMoreUrl, '_blank')}
            >
              Learn More
            </Button>
          </div>
          <div className="relative h-64 md:h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlantDetails;
