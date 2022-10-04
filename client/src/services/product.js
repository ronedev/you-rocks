import axios from 'axios'

export async function addProduct(data){
  try {
    // let form = new FormData()
    // form.append('title',  data.title)
    // form.append('price',  data.price)
    // form.append('description',  data.description)
    // form.append('category',  data.category)
    // form.append('createdAt',  data.createdAt)
    // form.append('enterprise',  data.enterprise)
    // form.append('gender',  data.gender)
    // form.append('images',  data.images)
    // form.append('newImage',  data.newImage)
    // data.deletedImages && form.append('deletedImages', data.deletedImages)
    // form.append('offer',  data.offer)
    // form.append('quantity',  data.quantity)
    // form.append('sizes',  data.sizes)
    // form.append('_id',  data._id)
    const response = await axios({
      // process.env.REACT_APP_BASE_URL
      url: `http://localhost:5000/product/new`,
      method: 'POST',
      data: data
    })
    return response
  } catch (error) {
    return error
  }
}

export async function updateProduct(data){
  try {
    let form = new FormData()
    form.append('title',  data.title)
    form.append('price',  data.price)
    form.append('description',  data.description)
    form.append('category',  data.category)
    form.append('createdAt',  data.createdAt)
    form.append('enterprise',  data.enterprise)
    form.append('gender',  data.gender)
    form.append('images',  data.images)
    form.append('newImage',  data.newImage)
    data.deletedImages && form.append('deletedImages', data.deletedImages)
    form.append('offer',  data.offer)
    form.append('quantity',  data.quantity)
    form.append('sizes',  data.sizes)
    form.append('_id',  data._id)
    const response = await axios({
      // process.env.REACT_APP_BASE_URL
      url: `http://localhost:5000/product/update/${data._id}`,
      method: 'POST',
      data: form
    })
    return response
  } catch (error) {
    return error
  }
}

export async function apiCall(url){
  try {
    const response = await axios({
      url,
      method: 'GET'
    })
    return response
  } catch (error) {
    return error    
  }
}

export async function getAllProducts(page){
  try{
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get/?page=${page}`,
      method: 'GET'
    })
    return response
  }catch(error){
    console.log(error)
  }
}

export async function getOfferedProducts(page){
  try{
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get-offered/?page=${page}`,
      method: 'GET'
    })
    return response
  }catch(error){
    console.log(error)
  }
}

export async function getMaleProducts(page){
  try{
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get-male/?page=${page}`,
      method: 'GET'
    })
    return response
  }catch(error){
    console.log(error)
  }
}

export async function getFemaleProducts(page){
  try{
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get-female/?page=${page}`,
      method: 'GET'
    })
    return response
  }catch(error){
    console.log(error)
  }
}

export async function getUnisexProducts(page){
  try{
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get-unisex/?page=${page}`,
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

export async function getSearchProduct(search){
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/search/?q=${search}`,
      method: "GET",
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function getProductById(id){
  try {
    const response = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/product/get/${id}`,
      method: "GET",
    })
    return response
  } catch (error) {
    console.log(error)
  }
}