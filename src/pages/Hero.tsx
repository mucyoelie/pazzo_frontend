import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-16 md:py-40 px-6 md:px-16 overflow-hidden dark:bg-slate-800">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Trusted by Industry Leaders
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              MufasaOpenUps & Logs
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            We provide high-quality{" "}
            <span className="font-semibold text-gray-800">CSS Products</span>,
            powerful{" "}
            <span className="font-semibold text-gray-800">OpenUps Products</span>,
            and reliable{" "}
            <span className="font-semibold text-gray-800">Logs Products</span>{" "}
            to support your business needs.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5">
              Explore Products
              <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
            </button>
            <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
              Contact Us
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="flex-1 flex justify-center items-center z-10">
          <div className="relative">
            {/* Decorative Circle Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20 scale-110"></div>
            {/* Image Container with Enhanced Styling */}
            <div className="relative xl:left-12 bg-transparent p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/logo.jpeg"
                alt="Products Illustration"
                className="w-64 md:w-80 lg:w-96 drop-shadow-lg"
              />
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                New!
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;

