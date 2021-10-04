/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
const requests = {
  fetchShows: 'https://api.tvmaze.com/shows',
  fetchOneShow: 'https://api.tvmaze.com/lookup/shows',
  fetchPeople: 'https://api.tvmaze.com/search/people',
};

export const genresTypes = [
  'All',
  'Comedy',
  'Romance',
  'Drama',
  'Horror',
  'Thriller',
];

function lowerCase(variable) {
  return Array.isArray(variable)
    ? variable.map((item) => item.toLowerCase())
    : variable.toLowerCase();
}

export function filterShows(array = [], property, keywords) {
  return array.filter((object) => {
    return lowerCase(object[property])?.includes(lowerCase(keywords));
  });
}

export default requests;
