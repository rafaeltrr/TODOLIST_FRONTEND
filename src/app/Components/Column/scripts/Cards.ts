import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3001",
  });

export default async(filter:string) =>{
    let cards = await api.get(`/cards?filter=${filter}`); 
    for(let x = 0; x < cards.data.length ;x++){
      cards.data[x].createdAt = new Date(cards.data[x].createdAt).toLocaleString()
    }
    return cards.data
}