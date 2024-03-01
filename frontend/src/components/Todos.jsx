// todos = [{
//     title: "Go to gym"
//     description: "Do push-ups"
// }]
function Todos({todos}){
    return <div>

        {todos.map(function(todo){
            return <div key={todo.title}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2> 
            <button  >{todo.completed == true?"completed":"Mark as completed"}</button>
        </div>
    })}
</div>

}
  




export default Todos;