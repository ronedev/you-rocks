import axios from "axios";

export async function getUser(user){
    const data = JSON.stringify({
        "email": user.email,
        "password": user.password
    });
      
    const config = {
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/login`,
        headers: { 
          'Content-Type': 'application/json', 
          'Cookie': process.env.KEY
        },
        data : data
    };
    
    try {
        const response = await axios(config)
        return response.data
    } catch (error) {
        console.log(error)
    }
}