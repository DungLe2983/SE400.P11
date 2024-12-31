import React from "react";

const Filter = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  colors,
  priceRange,
  setPriceRange,
}) => {
  return (
    <div className="col-span-3 space-y-8">
      <div>
        <h2 className="font-semibold mb-4">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.name} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCategories([
                      ...selectedCategories,
                      category.name,
                    ]);
                  } else {
                    setSelectedCategories(
                      selectedCategories.filter((c) => c !== category.name)
                    );
                  }
                }}
                className="rounded border-gray-300"
              />
              <span className="text-sm">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-4">Price</h2>
        <div className="space-y-4">
          <div className="flex gap-2 justify-between">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => {
                setPriceRange([parseInt(e.target.value), priceRange[1]]);
              }}
              className="w-[45%] px-2 py-1 border rounded-lg"
              placeholder="$200"
            />
            <span>-</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => {
                setPriceRange([priceRange[0], parseInt(e.target.value)]);
              }}
              className="w-[45%] px-2 py-1 border rounded-lg"
              placeholder="$500"
            />
          </div>
        </div>
      </div>

      {/* <div>
        <h2 className='font-semibold mb-4'>Color</h2>
        <div className='grid grid-cols-4 gap-2'>
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-8 h-8 rounded-full ${color.class} ${
                selectedCategories.includes(color.name)
                  ? "ring-2 ring-offset-2 ring-gray-400"
                  : ""
              }`}
              onClick={() => {
                if (selectedCategories.includes(color.name)) {
                  setSelectedCategories(
                    selectedCategories.filter((c) => c !== color.name)
                  );
                } else {
                  setSelectedCategories([...selectedCategories, color.name]);
                }
              }}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Filter;
