
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-green-800">Welcome to AyurOne</h1>
          <p className="text-xl text-gray-600">Explore our virtual herbal garden</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
