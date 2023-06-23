import axios from "axios";

export async function fetchData(cityQuery) {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: cityQuery },
      headers: {
        'X-RapidAPI-Key': accessToken,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };