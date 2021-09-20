import { useState, useEffect } from 'react';
import paginate from './utils';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const followersData = await res.json();
    setData(paginate(followersData));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};

export default useFetch;
