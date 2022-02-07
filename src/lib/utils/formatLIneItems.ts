export const formatLineItems = (cartDetails: any) => {
  const lineItems = []
  for (const itemId in cartDetails) {
    if (cartDetails[itemId].sku_id || cartDetails[itemId].price_id)
      lineItems.push({ price: itemId, quantity: cartDetails[itemId].quantity })
  }
  return lineItems
}
