
    //variabkes
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
    

    /*linking enter key to add button */
    taskInput.addEventListener("keyup",function(event){
      if(event.keyCode==13){
        event.preventDefault();
        document.getElementById("addbtn").click();
      }
    });

    /*function to add item to list */
    function addTask(){
      
      const task=taskInput.value;
      
        if (task === '') {
            alert('Please enter a task');
            return;
          }
          else{
            var aActive=true;
        
            var li = document.createElement('div');
            li.className="list";  
            li.classList.add("task");

            // li.innerHTML=taskInput.value;
            li.style.cursor="pointer";
            const content=document.createElement("div");
            content.classList.add("content");
 
            li.appendChild(content);


            const newItem= document.createElement("input");
            newItem.classList.add("text");
            newItem.type="text";
            newItem.value=task;
            newItem.style.cursor="pointer";

            newItem.setAttribute("readonly", "readonly");
          
            content.appendChild(newItem);

            var actions= document.createElement("div");
            actions.classList.add("btns");

            var edit =document.createElement("i");
            edit.classList.add("edit");
            edit.className="bi bi-pencil";
            edit.innerText="Edit";
            edit.id="edit";

            var del =document.createElement("i");
            edit.classList.add("delete");
            del.className="bi bi-x";
            del.id="del";

            actions.appendChild(edit);
            actions.appendChild(del);

            li.appendChild(actions);

            taskList.appendChild(li);


            taskInput.value="";    


            edit.addEventListener("click",function(e){
              aActive=false;
              if(edit.innerText.toLocaleLowerCase()=="edit"){
                
                edit.innerText="Save";
                newItem.removeAttribute("readonly");
                newItem.focus();
                newItem.style.border="none";
                
              }
              else{
                edit.innerText="Edit";
                newItem.setAttribute("readonly", "readonly");
                aActive=true;
              }
             
            
            })

            del.addEventListener("click",function(){
              li.remove();
            })
            newItem.addEventListener("click",function(){
              if(aActive){

                newItem.style.textDecoration="line-through";
                newItem.style.color="grey";
                saveData();
              }
              })

          saveData();

            
          }
    }

    


  
  

  