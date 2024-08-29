import axios from 'axios';


// Function to fetch date fact
const fetchDateFact = async (day, month) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${month}/${day}/date`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching date fact');
  }
};



// Function to fetch number fact
const fetchNumberFact = async (number) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${number}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching number fact');
  }
};


// Function to fetch math fact
const fetchMathFact = async (number) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${number}/math`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching math fact');
  }
};

export { fetchDateFact, fetchNumberFact, fetchMathFact };
