function TodoList({ todos, onSelectTodo }) {
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => onSelectTodo(todo)}
          className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition-shadow flex items-center justify-between"
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-800 truncate">{todo.title}</h3>
            <p className="text-sm text-gray-500 mt-1">ID: {todo.id} • Пользователь: {todo.userId}</p>
          </div>
          <div className="ml-4 flex-shrink-0">
            {todo.completed ? (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Выполнено
              </span>
            ) : (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                В ожидании
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
