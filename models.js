// Simule une base de données avec un tableau
let todos = [];
let nextId = 1;

// Modèle pour les opérations CRUD
module.exports = {
  getAll: () => todos,
  
  create: (todo) => {
    const newTodo = { id: nextId++, ...todo };
    todos.push(newTodo);
    return newTodo;
  },
  
  getById: (id) => todos.find(todo => todo.id === parseInt(id)),
  
  update: (id, updatedTodo) => {
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index !== -1) {
      todos[index] = { ...todos[index], ...updatedTodo };
      return todos[index];
    }
    return null;
  },
  
  delete: (id) => {
    const index = todos.findIndex(todo => todo.id === parseInt(id));
    if (index !== -1) {
      todos.splice(index, 1);
      return true;
    }
    return false;
  }
};