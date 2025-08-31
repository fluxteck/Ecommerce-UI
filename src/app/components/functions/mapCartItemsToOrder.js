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
