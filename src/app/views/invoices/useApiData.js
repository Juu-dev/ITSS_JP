const axios = require("axios");
const { useState, useEffect } = require("react");

export const useApiData = () => {
  const [data, setData] = useState([]);

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
        const response = await axios.get("http://127.0.0.1:8000/api/payments");
        const parsedData = parseData(response.data);
        setData(parsedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return data;
};

// Uncomment the following line to use the hook
// const apiData = useApiData();
