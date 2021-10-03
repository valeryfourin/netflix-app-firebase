const requests = {
  fetchShows: 'https://api.tvmaze.com/shows',
  fetchOneShow: 'https://api.tvmaze.com/lookup/shows',
  fetchPeople: 'https://api.tvmaze.com/search/people',
  fetchHorrorShows: 'https://api.tvmaze.com/search/shows?q=horror',
  fetchRomanceShows: 'https://api.tvmaze.com/search/shows?q=romance',
  fetchComedyShows: 'http://api.tvmaze.com/search/shows?q=comedy',
  fetchActionShows: 'https://api.tvmaze.com/search/shows?q=action',
  fetchDocumentaryShows: 'https://api.tvmaze.com/search/shows?q=documentary',
  fetchDetectiveShows: 'http://api.tvmaze.com/search/shows?q=detective',
};

// const showsCount = 50;
// function filterShows(array, property, keywords) {
//   return array
//     .filter((object) => {
//       return object?.property.includes(keywords);
//     })
//     .slice(0, showsCount);
// }

export default requests;
