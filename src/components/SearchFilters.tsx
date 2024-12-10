import React from 'react';

interface SearchFiltersProps {
  type: string;
  yearFrom: string;
  yearTo: string;
  onTypeChange: (type: string) => void;
  onYearFromChange: (year: string) => void;
  onYearToChange: (year: string) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  type,
  yearFrom,
  yearTo,
  onTypeChange,
  onYearFromChange,
  onYearToChange,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-center">
      <div className="flex items-center gap-2">
        <label htmlFor="type" className="text-white">Type:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
          className="bg-gray-700 text-white rounded-md px-3 py-1 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episodes</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="yearFrom" className="text-white">Year From:</label>
        <select
          id="yearFrom"
          value={yearFrom}
          onChange={(e) => onYearFromChange(e.target.value)}
          className="bg-gray-700 text-white rounded-md px-3 py-1 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="yearTo" className="text-white">Year To:</label>
        <select
          id="yearTo"
          value={yearTo}
          onChange={(e) => onYearToChange(e.target.value)}
          className="bg-gray-700 text-white rounded-md px-3 py-1 border border-gray-600 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilters; 