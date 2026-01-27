import { useEffect, useState } from "react";
import { Search, Loader2, AlertCircle } from "lucide-react";

interface CcsType {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string; // base64 string
}

function CcsProduct() {
  const [products, setProducts] = useState<CcsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 TELEGRAM ORDER
  const handleTelegramOrder = (product: CcsType) => {
    const message = encodeURIComponent(
      `Hello, I want to order this product:\n\n` +
      `🔹 Product: ${product.name}\n` +
      `🔹 Price: ${product.price.toLocaleString()} RWF\n\n` +
      `Please provide more details.`
    );
    window.open(`https://t.me/+250783175236?text=${message}`, "_blank");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/ccs");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching CCS products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg font-medium">Loading CCS products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">Unable to load CCS products. Please try again later.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-800 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            CCS Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium CCS solutions tailored to your business needs
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search CCS products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* GRID */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search term.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((item, index) => (
              <div
                key={item._id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={`data:image/jpeg;base64,${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <AlertCircle className="w-10 h-10 text-gray-500" />
                        </div>
                        <p className="text-gray-500 font-medium">No Image Available</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
                    {item.name}
                  </h2>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {item.price.toLocaleString()}
                    </span>
                    <span className="text-gray-600 font-medium">RWF</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex gap-3">
                    {/* ORDER ON TELEGRAM */}
                    <button
                      onClick={() => handleTelegramOrder(item)}
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Order on Telegram
                    </button>

                    <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FOOTER COUNT */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-semibold text-blue-600">{filteredProducts.length}</span>{" "}
              of <span className="font-semibold">{products.length}</span> products
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CcsProduct;
