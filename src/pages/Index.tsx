
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex flex-1 items-center justify-center">
        <section className="w-full text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">Welcome to AyurOne</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Explore our virtual herbal garden and discover the power of ancient Ayurvedic plants.
          </p>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
              alt="Herbal Garden"
              className="rounded-xl shadow-lg w-80 h-56 object-cover border-4 border-green-200"
            />
          </div>
        </section>
      </main>
      <footer className="bg-green-700 py-4 text-center text-white">
        &copy; {new Date().getFullYear()} AyurOne. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;

