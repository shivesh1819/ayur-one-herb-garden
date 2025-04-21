
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex flex-1 items-center justify-center">
        <section className="w-full py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
                Welcome to AyurOne
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Explore our virtual herbal garden and discover the power of ancient Ayurvedic plants.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
                alt="Herbal Garden"
                className="rounded-xl shadow-lg w-80 h-56 object-cover border-4 border-green-200"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-green-700 py-6 text-center text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-4 text-lg font-semibold">Contact Us</div>
          <div className="flex justify-center space-x-8 mb-4">
            <a 
              href="mailto:info@ayurone.com" 
              className="hover:underline flex items-center"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Send email"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6 mr-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m0 0l4 4M8 12v8a2 2 0 002 2h4a2 2 0 002-2v-8m-8 0V8a4 4 0 018 0v4" />
              </svg>
              info@ayurone.com
            </a>
            <a 
              href="https://instagram.com/ayurone" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline flex items-center"
              aria-label="Visit Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 6.5h.01" />
              </svg>
              @ayurone
            </a>
            <a 
              href="tel:+1234567890" 
              className="hover:underline flex items-center"
              aria-label="Call us"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6 mr-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44a11.05 11.05 0 005.16 5.16l2.44-1.35L19 19v2a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
              </svg>
              +1 (234) 567-890
            </a>
          </div>
          <div className="text-sm">&copy; {new Date().getFullYear()} AyurOne. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
