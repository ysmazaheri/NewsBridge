import React, { useState, useRef, useEffect } from "react";
import { Button } from "../FormElements";
import { SortAsc, Newspaper, Clock, Gauge } from "lucide-react";
import Dropdown from "./Dropdown";

const SearchComponent = () => {
  //State to store search query
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [resultCount, setResultCount] = useState<number>(0);

  //State to store selected filter/sort options
  const [selectedSortOption, setSelectedSortOption] =
    useState<string>("relevance");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPostedAtOption, setSelectedPostedAtOption] =
    useState<string>("");
  const [selectedBiasRatingOption, setSelectedBiasRatingOption] =
    useState<string>("");

  //State to store dropdown visibility
  const [isCategoryDropdownOpen, setIsCategoryDropdown] =
    useState<boolean>(false);
  const [isSortDropdownOpen, setIsSortDropdown] = useState<boolean>(false);
  const [isPostedAtDropdownOpen, setIsPostedAtDropdown] =
    useState<boolean>(false);
  const [isBiasRatingDropdownOpen, setIsBiasRatingDropdown] =
    useState<boolean>(false);

  //Ref for dropdowns (to detect clicks outside)
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const postedAtDropdownRef = useRef<HTMLDivElement>(null);
  const biasRatingDropdownRef = useRef<HTMLDivElement>(null);

  //Dropdown options for category, sorting, posted at and bias rating
  const categories = [
    { label: "US News", value: "usnews" },
    { label: "World", value: "world" },
    { label: "Business", value: "business" },
    { label: "Politics", value: "politics" },
    { label: "Other", value: "other" },
  ];
  const sortingOptions = [
    { label: "Relevance", value: "relevance" },
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
  ];
  //(str is used to dynamically adjust text based on the selected option)
  //For example, "posted in the last 7 days" vs "posted today"
  const postedAtOptions = [
    { label: "Today", value: "today", str: "posted" },
    { label: "Yesterday", value: "yesterday", str: "posted" },
    { label: "Last 7 days", value: "last7days", str: "posted in the" },
    { label: "Last 30 days", value: "last30days", str: "posted in the" },
    { label: "Anytime", value: "anytime", str: "posted" },
  ];
  const biasRatingOptions = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];

  //Event listener to close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      //If click is outside of dropdown and dropdown is open, close dropdown
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoryDropdown(false);
      }
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortDropdown(false);
      }
      if (
        postedAtDropdownRef.current &&
        !postedAtDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPostedAtDropdown(false);
      }
      if (
        biasRatingDropdownRef.current &&
        !biasRatingDropdownRef.current.contains(event.target as Node)
      ) {
        setIsBiasRatingDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //Event handler for search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  //Event handler for all dropdowns to open/close
  const handleDropdownToggle = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    value: boolean
  ) => {
    return (event: React.MouseEvent) => {
      event.stopPropagation();
      setter(value);
    };
  };

  //Event handler for selecting category
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setIsCategoryDropdown(false);
  };

  //Event handler for selecting sort option
  const handleSortChange = (value: string) => {
    setSelectedSortOption(value);
    setIsSortDropdown(false);
  };

  //Event handler for selecting posted at time
  const handlePostedAtChange = (value: string) => {
    setSelectedPostedAtOption(value);
    setIsPostedAtDropdown(false);
  };

  //Event handler for selecting bias rating
  const handleBiasRatingChange = (value: string) => {
    setSelectedBiasRatingOption(value);
    setIsBiasRatingDropdown(false);
  };

  //Event handler for search button (will eventually call API)
  const handleSearch = () => {
    setSearchQuery(inputText);
    setResultCount(10);
  };
  return (
    <div className="bg-white p-5 mt-5 w-full max-w-3xl mx-auto">
      <div className="flex flex-col space-y-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search articles..."
          value={inputText}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          onChange={handleSearchChange}
          maxLength={89}
          className="p-3 border border-gray-300 rounded-xl bg-tertiary w-full"
        />
        {/* Display search and filter options */}
        {resultCount > 0 && (
          <div className="text-sm text-primary">
            Showing {resultCount} results for{" "}
            <span className="font-semibold">
              {searchQuery.trim() ? `"${searchQuery.trim()}"` : "All Articles"}
            </span>
            {selectedCategory &&
              ` in ${
                categories.find((c) => c.value === selectedCategory)?.label
              }`}
            {/* Dynamically adjust "Posted At" based on the selected option */}
            {selectedPostedAtOption &&
              ` ${
                postedAtOptions.find((p) => p.value === selectedPostedAtOption)
                  ?.str
              } ${postedAtOptions
                .find((p) => p.value === selectedPostedAtOption)
                ?.label.toLowerCase()}`}
            {selectedBiasRatingOption &&
              ` with ${selectedBiasRatingOption} bias rating`}
            {selectedSortOption && ` sorted by ${selectedSortOption}`}
          </div>
        )}

        {/* Horizontal Dropdown Container */}
        <div className="flex flex-col justify-center items-center space-y-2 sm:grid sm:grid-cols-2 sm:gap-2 md:flex md:flex-row md:space-x-2 md:space-y-0 w-full justify-center items-center">
          {/* Posted at Dropdown */}
          <Dropdown
            label="Posted At"
            options={postedAtOptions}
            selectedValue={selectedPostedAtOption}
            onSelect={handlePostedAtChange}
            isOpen={isPostedAtDropdownOpen}
            toggleDropdown={handleDropdownToggle(
              setIsPostedAtDropdown,
              !isPostedAtDropdownOpen
            )}
            ref={postedAtDropdownRef}
            icon={<Clock className="w-5 h-5 mr-1" />}
          />
          {/* Category Dropdown */}
          <Dropdown
            label="Category"
            options={categories}
            selectedValue={selectedCategory}
            onSelect={handleCategoryChange}
            isOpen={isCategoryDropdownOpen}
            toggleDropdown={handleDropdownToggle(
              setIsCategoryDropdown,
              !isCategoryDropdownOpen
            )}
            ref={categoryDropdownRef}
            icon={<Newspaper className="w-5 h-5 mr-1" />}
          />
          {/* Bias Rating Dropdown */}
          <Dropdown
            label="Bias Rating"
            options={biasRatingOptions}
            selectedValue={selectedBiasRatingOption}
            onSelect={handleBiasRatingChange}
            isOpen={isBiasRatingDropdownOpen}
            toggleDropdown={handleDropdownToggle(
              setIsBiasRatingDropdown,
              !isBiasRatingDropdownOpen
            )}
            ref={biasRatingDropdownRef}
            icon={<Gauge className="w-5 h-5 mr-1" />}
          />
          {/* Sort Dropdown */}
          <Dropdown
            label="Sort By"
            options={sortingOptions}
            selectedValue={selectedSortOption}
            onSelect={handleSortChange}
            isOpen={isSortDropdownOpen}
            toggleDropdown={handleDropdownToggle(
              setIsSortDropdown,
              !isSortDropdownOpen
            )}
            ref={sortDropdownRef}
            icon={<SortAsc className="w-5 h-5 mr-1" />}
          />
        </div>
        {/* Search Button */}
        <div className="flex justify-center">
          <Button
            value="Search"
            textColor="text-white"
            width={165}
            bgColor="bg-primary"
            borderColor="border-transparent"
            height="h-14"
            handleClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
