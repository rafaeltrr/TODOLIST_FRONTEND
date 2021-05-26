import axios from 'axios'
import register from '../../Modal/scripts/register'

const api = axios.create({
    baseURL: "https://cat-fact.herokuapp.com"
  });

export default async() => {
  let factsOfDogs:any[] = []
  for(let x = 0 ; x < 3 ; x++ ){
    let facts = await api.get(`/facts/random?animal_type=dog&amount=1`);
    
    const results = await register('Eu','eu@me.com',facts.data.text)  
    results.cards.data.createdAt = new Date(results.cards.data.createdAt).toLocaleString()
    factsOfDogs.push(results.cards.data)
  }
  
  return factsOfDogs

}