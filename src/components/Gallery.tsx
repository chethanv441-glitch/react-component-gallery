import { useState, useMemo } from "react";
import type { ComponentInfo, Category } from "../types";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ComponentCard from "./ComponentCard";

interface GalleryProps {
  components: ComponentInfo[];
}

function Gallery({ components }: GalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );

  const filteredComponents = useMemo(() => {
    return components.filter((comp) => {
      const matchesCategory =
        selectedCategory === "All" || comp.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [components, selectedCategory, searchQuery]);

  const totalCount = components.length;
  const shownCount = filteredComponents.length;

  return (
    <div className="gallery">
      <div className="gallery-controls">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="gallery-results">
        <p className="result-count">
          Showing {shownCount} of {totalCount} component
          {shownCount !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="gallery-grid">
        {filteredComponents.length === 0 ? (
          <div className="no-results">
            <p>No Result</p>
          </div>
        ) : (
          filteredComponents.map((comp) => (
            <ComponentCard key={comp.id} info={comp} />
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;
