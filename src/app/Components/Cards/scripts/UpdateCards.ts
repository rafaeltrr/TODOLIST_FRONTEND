import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:3001",
  });

export default async(direction:string, card:any, password?:any) =>{
    try{
        if(password){
            const limit = card.unblocked ? card.unblocked +1 : 1
            console.log(limit)
            card.status = 'onDevelopment' 
            const result = await api.put(`/cards?id=${card.id}&status=onDevelopment&password=${password}&unblocked=${limit}`);
            result ? card.unblocked = limit: null 
            return result? card : false 
        }else{
            let status:string = "onDevelopment";
        
            if(card.status === 'onDevelopment'){
                status = 'test'
            }
    
            if(card.status === 'test' && direction === 'left'){
                status = 'onDevelopment'
            }
    
            if(card.status === 'test' && direction === 'right'){
                status = 'interrupted'
            }
    
            if(card.status === 'interrupted' && direction === 'left'){
                status = 'test'
            }
    
            if(card.status === 'interrupted' && direction === 'right'){
                status = 'production'
            }
    
            if(card.status === 'production'){
                status = 'onDevelopment'
            }
            
            card.status = status
            await api.put(`/cards?id=${card.id}&status=${status}`);
            return card 
        }
    }catch(e){
        console.log(e)
        return false
    }
    
}