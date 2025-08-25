const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // "Jan", "Feb", etc.
    day: "2-digit",
  });
};

export default formatDate;
