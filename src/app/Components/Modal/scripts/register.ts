import axios from 'axios'
import { Validation } from './validation'

const api = axios.create({
    baseURL: "http://localhost:3001",
  });

export default async(
    name: string,
    email:string,
    description:string, 
) => {
    document.getElementById("resultMessage")!.style.display="none";
    const validate = await axios.post(
      `https://apilayer.net/api/check?access_key=1ecce842f684b90b9d51c0f8af87c3f7&email=${email}`
      );
    const result = Validation(validate.data)
    let cards:any
      
      cards = await api.post("/cards", 
        {
          name:name, 
          email:email, 
          description:description, 
          status:'backlog',
          unblocked:0
      });
    
    return {...result,cards}
  }
