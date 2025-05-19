import { useState } from "react";
import { Trash2, Plus, Gift, Filter, Search } from "lucide-react";

const App = () => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [wishlist, setWishlist] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAdd = (e) => {
    if (e) e.preventDefault();
    if (!itemName || !category) return;

    const newItem = {
      id: Date.now(),
      name: itemName.trim(),
      category: category.trim(),
      priority,
      dateAdded: new Date().toLocaleDateString(),
    };

    setWishlist([...wishlist, newItem]);
    setItemName("");
    setCategory("");
    setPriority("Medium");
    setIsFormOpen(false);
  };

  const handleDelete = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const filteredList = wishlist
    .filter((item) => filter === "All" || item.category === filter)
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const uniqueCategories = [...new Set(wishlist.map((item) => item.category))];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Gift className="text-indigo-600 mr-3" size={32} />
            <h1 className="text-4xl font-bold text-gray-800">My Wishlist</h1>
          </div>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md"
          >
            {isFormOpen ? (
              "Cancel"
            ) : (
              <>
                <Plus size={18} className="mr-2" /> Add Item
              </>
            )}
          </button>
        </div>

        {isFormOpen && (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Add New Item
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Item name
                </label>
                <input
                  type="text"
                  placeholder="What do you wish for?"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  placeholder="e.g., Electronics, Books, Clothing"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  list="saved-categories"
                />
                {uniqueCategories.length > 0 && (
                  <datalist id="saved-categories">
                    {uniqueCategories.map((cat) => (
                      <option key={cat} value={cat} />
                    ))}
                  </datalist>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <button
                onClick={handleAdd}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium p-3 rounded-lg transition-all shadow-md flex items-center justify-center"
              >
                <Plus size={18} className="mr-2" />
                Add to Wishlist
              </button>
            </div>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg p-6 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <div className="relative w-full sm:w-64">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search items..."
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {uniqueCategories.length > 0 && (
              <div className="flex items-center">
                <Filter className="text-gray-500 mr-2" size={18} />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-auto"
                >
                  <option value="All">All Categories</option>
                  {uniqueCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {filteredList.length > 0 ? (
            <ul className="space-y-3">
              {filteredList.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </span>
                    <div className="flex flex-wrap items-center mt-1 text-sm">
                      <span className="text-gray-500 mr-2">
                        Added: {item.dateAdded}
                      </span>
                      <span className="hidden sm:inline mx-2 text-gray-300">
                        •
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                          item.priority
                        )} mr-2`}
                      >
                        {item.priority}
                      </span>
                      <span className="hidden sm:inline mx-2 text-gray-300">
                        •
                      </span>
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
                    aria-label="Delete item"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Gift className="text-gray-300 mb-4" size={64} />
              <p className="text-gray-500 mb-2">Your wishlist is empty</p>
              <p className="text-gray-400 text-sm">
                {filter !== "All" || searchTerm
                  ? "Try changing your search or filter"
                  : "Add items to start building your wishlist"}
              </p>
            </div>
          )}
        </div>

        {wishlist.length > 0 && (
          <div className="mt-6 text-right text-sm text-gray-500">
            {filteredList.length} of {wishlist.length} items shown
          </div>
        )}
      </div>
    </div>
  );
};

export default App;