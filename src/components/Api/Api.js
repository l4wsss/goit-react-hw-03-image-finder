import axios from 'axios';

const API_KEY = '39076009-1c08ad23164944ae582291e4b';
const BASE_URL = 'https://pixabay.com/api/';

export const pixabaiApi = async (query, page, perPage) => {
  return await axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  });
};
