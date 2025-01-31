"use client";
import { useState } from "react";

const filterOptions = [
  { name: "Customizable", type: "checkbox" },
  { name: "Ideal For", type: "dropdown" },
  { name: "Occasion", type: "dropdown" },
  { name: "Work", type: "dropdown" },
  { name: "Fabric", type: "dropdown" },
  { name: "Segment", type: "dropdown" },
  { name: "Suitable For", type: "dropdown" },
  { name: "Raw Material", type: "dropdown" },
  { name: "Pattern", type: "dropdown" },
];

export default function FilterOptions() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      {filterOptions.map((filter) => (
        <div key={filter.name} className="mb-3">
          <div
            onClick={() => toggleSection(filter.name)}
            className="cursor-pointer font-medium flex justify-between"
          >
            {filter.name}
            <span>{openSections[filter.name] ? "▲" : "▼"}</span>
          </div>

          {openSections[filter.name] && (
            <div className="mt-2 p-2 border rounded bg-gray-100">
              {filter.type === "checkbox" ? (
                <label>
                  <input type="checkbox" className="mr-2" /> Enable
                </label>
              ) : (
                <>
                  <label className="block">
                    <input type="checkbox" className="mr-2" /> Men
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" /> Women
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" /> Baby & Kids
                  </label>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
