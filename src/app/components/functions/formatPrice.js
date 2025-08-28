// utils/priceFormatter.js
export function formatPriceINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    // style: "currency",
    // currency: "INR",
    minimumFractionDigits: 0, // removes decimals
    maximumFractionDigits: 0, // rounds to nearest rupee
  }).format(amount);
}
