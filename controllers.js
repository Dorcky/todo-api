// Importe le modèle
const Todo = require('./models');

// Contrôleurs pour chaque opération CRUD
exports.getAllTodos = (req, res) => {
  res.json(Todo.getAll());
};

exports.createTodo = (req, res) => {
  const newTodo = Todo.create(req.body);
  res.status(201).json(newTodo);
};

exports.getTodo = (req, res) => {
  const todo = Todo.getById(req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Tâche non trouvée' });
  }
};

exports.updateTodo = (req, res) => {
  const updatedTodo = Todo.update(req.params.id, req.body);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Tâche non trouvée' });
  }
};

exports.deleteTodo = (req, res) => {
  if (Todo.delete(req.params.id)) {
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Tâche non trouvée' });
  }
};