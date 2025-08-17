function truncateString(string, end) {
  return string.length > end ? string.slice(0, end) + "..." : string;
}

export { truncateString };
