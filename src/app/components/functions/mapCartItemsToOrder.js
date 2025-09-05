export function mapCartToOrderItems(cartItems) {
  return cartItems.map((item) => {
    const price = item.products.base_price; // snapshot base price (apply discounts if needed)

    return {
      product_id: item.product_id,
      product_name: item.products.product_name,
      product_image: item.image,
      price,
      quantity: item.quantity,
      variations:
        item.variations?.map((v) => ({
          variation_type: v.variation_type,
          variation_value: v.variation_value,
        })) || [], // keep only needed fields
    };
  });
}

export function mapProductToOrderItems(product, checkoutData) {
  const price = product.base_price; // snapshot base price (apply discounts if needed)

  return {
    product_id: product.id,
    product_name: product.product_name,
    product_image: product.product_images[0]?.url || null, // make sure you grab the URL
    price,
    quantity: checkoutData.qty,
    variations: Object.entries(checkoutData.variations || {}).map(
      ([variation_type, variation_value]) => ({
        variation_type,
        variation_value,
      })
    ),
  };
}
