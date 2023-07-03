const formatString = (str) => {
  return str
    .replace(/([A-Z])/g, " $1") // Add a space before each capital letter
    .trim() // Remove leading/trailing spaces
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};

export default formatString;
