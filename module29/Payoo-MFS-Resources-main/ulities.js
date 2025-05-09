function getinputbyID(id){
  const  value = document.getElementById(id).value;
  const convertValue = parseInt(value)

     return convertValue;
   
}

function getmainbalInnertex(id){

  const value = document.getElementById(id).innerText;
  const convertValue = parseInt(value);
return convertValue;

}

function setInnertxbyIDndValue(id, value){
       
       document.getElementById(id).innerText = value;

}






function togglehandle(id, status){

  document.getElementById(id).style.display = status;
}
