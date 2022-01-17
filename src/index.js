document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputField = document.getElementById("new-task-description");
  
  const form1 = document.getElementById("create-task-form");
  console.log(form1);
  form1.addEventListener("submit" , function(pD) { 
    pD.preventDefault();
    console.log(addtask(inputField.value)); 
  });
}); 
function addtask(task){
  let mainlist = document.createElement('li');
  mainlist.textContent= `${task}`;
  document.getElementById("tasks").appendChild(mainlist);
}