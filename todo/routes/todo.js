const todos = [{todo:'read', done: true }];

module.exports = {
getAll,
create,
deleteOne
};

function getAll (){
    return todos;
};

function create (todo){
    todos.push(todo);
};
function deleteOne (id){
    todos.splice(id, 1);
};
