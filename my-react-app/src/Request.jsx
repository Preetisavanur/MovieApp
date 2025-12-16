export const request = {
  popular: "movie/popular",
  trending: "trending/all/week",
  upComming: "movie/upcoming",
  Action: "discover/movie?with_genres=28",
  tvShow: "tv/popular",
  trendingTv: "trending/tv/day",

  // ✅ FIXED SEARCH
  search: (query) =>
    `search/multi?query=${encodeURIComponent(query)}`,

  specificMovie: (id) => `movie/${id}`,
  specificCast: (id) => `movie/${id}/credits`,
  specificTrailer: (id) => `movie/${id}/videos`,
};
