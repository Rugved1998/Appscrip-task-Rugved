"use client";
import { useState } from "react";
import styles from "../src/app/page.module.css";

export default function FilterBar({
  selectedSort,
  setSelectedSort,
  isFilterVisible,
  setIsFilterVisible,
}) {
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const sortingOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
        <div>3425 items</div>
        <button
          onClick={() => setIsFilterVisible(!isFilterVisible)}
          className={styles.filterButton}
        >
          {isFilterVisible ? "Hide Filter" : "Show Filter"}
        </button>

        </div>
      
        {/* Sorting Dropdown */}
        <div className={styles.sortDropdown}>
          <button
            onClick={() => setSortMenuOpen(!sortMenuOpen)}
            className={styles.sortButton}
          >
            {selectedSort} ▼
          </button>
          {sortMenuOpen && (
            <ul className={styles.sortMenu}>
              {sortingOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSelectedSort(option);
                    setSortMenuOpen(false);
                  }}
                  className={styles.sortOption}
                >
                  {option}
                  {selectedSort === option && <span>✔</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      
    </div>
  );
}
