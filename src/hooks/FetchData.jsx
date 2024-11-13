export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a603b9f7edmsh45414b984ba4698p17919cjsn4f3fd0e587d5',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};


