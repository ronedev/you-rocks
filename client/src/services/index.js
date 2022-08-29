import axios from 'axios'

export async function getAllProducts(){
  try{
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get`,
      method: 'GET'
    })
    return response
  }catch(error){
    console.log(error)
  }
}

export async function getProducts() {
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get-offered`,
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getRandomProduct(){
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get-random`,
      method: "GET",
    })
    return response
  } catch (error) {
    console.log(error)
  }
}