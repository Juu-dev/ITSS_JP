const axios = require("axios");
const { useState, useEffect } = require("react");

export const useApiData = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const parseData = (data) => {
    const unpaidData = [];
    const paidData = [];

    data.forEach((item) => {
      if (item.pay_at === null) {
        unpaidData.push(item);
      } else {
        paidData.push(item);
      }
    });

    return { unpaidData, paidData };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://134.209.101.17:8000/api/payments"
        );
        setLoading(false);
        const parsedData = parseData(response.data);
        setData(parsedData);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Uncomment the following line to use the hook
// const apiData = useApiData();
