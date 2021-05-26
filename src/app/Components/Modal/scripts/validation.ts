export const Validation = (validate:any) => {
    
    const inputs:string[] = ['name','email','description'];

    let hasNull:boolean = false

    //validação dos campos
    for(const input of inputs){

      let item = (<HTMLInputElement>document.getElementById(input)).value

      if(!item){
        document.getElementById(input)!.style.border = "1px solid"
        document.getElementById(input)!.style.borderColor = "red";
        hasNull = true
      }

      if(item){
        document.getElementById(input)!.style.border = "none"
      }

    }

    if(hasNull){
        document.getElementById("suggest")!.style.display="none";
        document.getElementById("resultMessage")!.style.display="block";
        document.getElementById("resultMessage")!.style.color="red";
        return {
            msg:'Preencha todos os campos',
            validation:false
        }
    }
        
    if(validate.did_you_mean){
      document.getElementById("suggest")!.style.display="block";
      document.getElementById("resultMessage")!.style.display="block";
      document.getElementById("resultMessage")!.style.color = "red"
      document.getElementById("email")!.style.border = "1px solid"
      document.getElementById("email")!.style.borderColor = "red"; 
      return {
        msg:'Email inválido',
        suggest: validate.did_you_mean,
        validation: false
      }
    }

    if(validate.format_valid === true && validate.mx_found === true){
      document.getElementById("suggest")!.style.display="none";
      document.getElementById("resultMessage")!.style.display="block";
      document.getElementById("resultMessage")!.style.color="green"; 
      return {
        msg:'Tarefa registrada com Sucesso',
        suggest: validate.did_you_mean,
        validation:true
      }
    }
    document.getElementById("suggest")!.style.display="none";
    document.getElementById("resultMessage")!.style.display="block";
    document.getElementById("resultMessage")!.style.color="red";
    return {
        msg:'Não foi possivel registrar a tarefa',
        validation:false
    };
  }