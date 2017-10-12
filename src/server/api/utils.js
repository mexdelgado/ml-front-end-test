const utils = {
  getItemProductResponse: function(data) {
    let location = data.address ? data.address.state_name : '';
    if(!location) location = data.seller_address ? data.seller_address.state.name : '';

    return {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price
      },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      location: location
    }
  },
  getCompleteItemProductResponse: function(data) {
    let product = utils.getItemProductResponse(data);

    product.sold_quantity = data.sold_quantity;
    product.category = data.attributes.filter(e => e.attribute_group_id === 'MAIN').map(e => e.value_name);

    return product;
  }
}

export default utils;
