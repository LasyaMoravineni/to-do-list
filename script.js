
    //variables
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
    function addTask(taskText){
      
      const task = taskText || taskInput.value;
      
        if (task === '') 
        {
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
            newItem.id="itemname";
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
            
            newItem.dataset.completed = 'false'; // Default is false


            newItem.addEventListener("click",function(){
              if(aActive){

                var isCompleted = newItem.dataset.completed === 'true';

                if (!isCompleted) {
                  newItem.style.textDecoration = "line-through";
                  newItem.style.color = "grey";
                } else {
                  newItem.style.textDecoration = "none";
                  newItem.style.color = "black";
                }

                newItem.dataset.completed = !isCompleted; // Toggle the completed status

                
                saveData();
              }
              });

          saveData();

            
          }
    }

    function saveData() {
      var tasks = Array.from(taskList.getElementsByClassName('text')).map(function(task){
        return {
          text: task.value,
          completed: task.dataset.completed === 'true'
        };
      });
    
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load tasks from local storage if available
    document.addEventListener('DOMContentLoaded', function() {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      if (tasks) {
          tasks.forEach(function(task) {
            addTask(task.text);
            var lastTask = taskList.lastElementChild.getElementsByClassName('text')[0];
            if (task.completed) {
              lastTask.style.textDecoration = "line-through";
              lastTask.style.color = "grey";
              lastTask.dataset.completed = 'true';

            }
          });
      }
    });

    


  
  

  
