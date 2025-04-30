
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PlantDetailsProps {
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

const PlantDetails = ({
  name,
  commonNames,
  habitat,
  medicinalUses,
  cultivation,
  image,
  learnMoreUrl,
  description,
  benefits,
  dosage,
  precautions,
}: PlantDetailsProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
        <div className="w-full md:w-[500px] h-[500px] bg-gray-100 rounded-lg">
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
      
      <div className="plant-extended-info mt-8 bg-green-50 p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-4 text-green-800">About {name.split(' ')[0]}</h4>
        <p className="mb-6 text-gray-700">{description}</p>
        
        <h4 className="text-xl font-semibold mb-4 text-green-800">Ayurvedic Benefits</h4>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Benefit</TableHead>
                <TableHead>Explanation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {benefits.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.benefit}</TableCell>
                  <TableCell>{item.explanation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-green-800">Recommended Dosage</h4>
            <p className="bg-white p-4 rounded border border-green-100 shadow-sm">{dosage}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 text-green-800">Precautions</h4>
            <p className="bg-white p-4 rounded border border-green-100 shadow-sm">{precautions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
