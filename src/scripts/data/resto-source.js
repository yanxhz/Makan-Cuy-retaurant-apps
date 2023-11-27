/* eslint-disable require-jsdoc */
/* eslint-disable new-cap */
// import CONFIG from '../global/config';
import API_ENDPOINT from '../global/api-endpoint';

class RestaurantSource {
  static async getRestaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      return response.json();
    } catch (error) {
      return error;
    }
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postRestaurantReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default RestaurantSource;
