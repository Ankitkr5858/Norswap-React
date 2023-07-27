import axios from "axios";

export const fetchCoinData = () => {
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
  return axios.get(apiUrl).then((res) => {
    if (res.data.length > 10) {
      return res.data.slice(0, 10);
    }
    return res.data;
  });
};
function formatTimestampToDateString(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, "0"); // Pad with leading zero if needed
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based

  const formattedDate = `${day}/${month}`; // YYYY-MM-DD format
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }); // HH:mm format
  return `${formattedDate} - ${formattedTime}`;
}
function aggregateData(arr, targetSize) {
  if (arr.length <= targetSize) {
    return arr;
  }

  const chunkSize = Math.ceil(arr.length / targetSize);
  const aggregatedData = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    const sum = chunk.reduce((total, [_, value]) => total + value, 0);
    const average = sum / chunk.length;
    aggregatedData.push(average);
  }

  return aggregatedData;
}

export const fetchChartData = (id, days) => {
  const apiPath = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
  return axios.get(apiPath).then((res) => {
    return res.data.prices.map(([timestamp, value]) => ({
      date: formatTimestampToDateString(timestamp),
      value: value.toFixed(0), // Rounding to integer value
    }));
  });
};
