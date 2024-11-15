export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '8dffe6a40bmsh128b399ed615ba9p1e304fjsn36a23ff82e1a',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};


