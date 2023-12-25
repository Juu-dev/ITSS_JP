const axios = require("axios");
const { useState, useEffect } = require("react");

export const useApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://134.209.101.17:8000/api/tenants"
        );
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { data };
};

// Uncomment the following line to use the hook
// const apiData = useApiData();
