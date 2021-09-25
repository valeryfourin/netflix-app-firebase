const requests = {
    fetchShows: 'https://api.tvmaze.com/search/shows',
    fetchOneShow: 'https://api.tvmaze.com/lookup/shows',
    fetchPeople: 'https://api.tvmaze.com/search/people',
    fetchHorrorShows: 'https://api.tvmaze.com/search/shows?q=horror',
    fetchRomanceShows: 'https://api.tvmaze.com/search/shows?q=romance',
    fetchComedyShows: 'https://api.tvmaze.com/search/shows?q=comedy',
    fetchActionShows: 'https://api.tvmaze.com/search/shows?q=action',
    fetchDocumentaryShows: 'https://api.tvmaze.com/search/shows?q=documentary',
    fetchDetectiveShows: 'https://api.tvmaze.com/search/shows?q=detective'
}

export default requests;