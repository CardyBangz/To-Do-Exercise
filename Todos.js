document.addEventListener("DOMContentLoaded", function(){
    let todoForm= document.getElementById("Errands");
    let todoList= document.getElementById("ThingsToDo");
 
    todoForm.addEventListener("submit", function(e){
        e.preventDefault();

        let removeButton= document.createElement("checkbox");
         removeButton.innerText="Delete?";

        let newToDo= document.createElement("li");
        newToDo.innerText= document.getElementById("task").value;

        todoList.appendChild(newToDo);
        newToDo.appendChild(removeButton);

        todoForm.reset();
    });

todoList.addEventListener("click", function(e){
    const TagTarget= e.target.TagName();
    if(TagTarget==="li"){
        
    }
})




});
