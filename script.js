let count = 1;
function decrementCount(){
  count--;
  if(count <= 0){
    document.getElementById("err-message").innerText="Error : Cannot go below 0";
    document.getElementById("dec").disabled=true;

    return;
  }
  
  document.getElementById("message").innerText=`Your current count is: ${count}`;

}


function incrementCount(){
  count++;
  if(count==1){
    document.getElementById("err-message").innerText="";
    document.getElementById("dec").disabled=false;
    document.getElementById("rest").disabled=false;
  }
  document.getElementById("message").innerText=`Your current count is: ${count}`;

}

function clearCount(){
  count=0;
  document.getElementById("message").innerText=`Your current count is: ${count}`;
  document.getElementById("err-message").innerText="";
  document.getElementById("dec").disabled=false;
  document.getElementById("rest").disabled=true;
}