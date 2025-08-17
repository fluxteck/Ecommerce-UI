const calculatePrice = (product) => {
  if (product.discount_type === "no-discount") {
    return product.base_price;
  }
  if (product.discount_type === "percentage") {
    return product.base_price - (product.discount * product.base_price) / 100;
  }
  return product.base_price - product.discount;
};

const calculateCartTotals = (cart) => {
  let subtotal = 0;
  let totalGST = 0;

  const items = cart.map((item) => {
    const price = calculatePrice(item.products);
    const itemSubtotal = price * item.quantity;
    const itemGST = ((price * item.products.gst_amount) / 100) * item.quantity;
    const itemTotal = item.products.tax_inclusive
      ? itemSubtotal
      : itemSubtotal + itemGST;

    subtotal += itemSubtotal;
    totalGST += itemGST;

    return {
      ...item,
      unitPrice: price,
      subtotal: itemSubtotal,
      gst: itemGST,
      total: itemTotal,
    };
  });

  return {
    items,
    subtotal,
    totalGST,
    grandTotal: subtotal,
  };
};

export { calculatePrice, calculateCartTotals };
