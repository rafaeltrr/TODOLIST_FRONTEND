export default (unblockedNumber:number, password: number)=>{
   console.log('aqui',unblockedNumber)
    if(!password){
        document.getElementById("password")!.style.border = "1px solid"
        document.getElementById("password")!.style.borderColor = "red"
        document.getElementById('invalid')!.style.display="block"
        return false
    }
    if(unblockedNumber >= 2){
        document.getElementById("password")!.style.border = "1px solid"
        document.getElementById("password")!.style.borderColor = "red"
        document.getElementById('exceeded')!.style.display="block"
        return false
    }
        return true
}