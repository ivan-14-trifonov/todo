function TodoList({ todos, onSelectTodo }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => onSelectTodo(todo)}
          className={`rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-all transform hover:-translate-y-1 border-l-4 ${
            todo.completed
              ? 'bg-green-50 border-green-500 hover:bg-green-100'
              : 'bg-yellow-50 border-yellow-500 hover:bg-yellow-100'
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <span className="text-xs font-medium text-gray-500">
              #{todo.id}
            </span>
            {todo.completed ? (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Выполнено
              </span>
            ) : (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-200 text-yellow-800">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                В ожидании
              </span>
            )}
          </div>
          <h3 className={`font-semibold mb-2 line-clamp-2 ${
            todo.completed ? 'text-green-900' : 'text-yellow-900'
          }`}>
            {todo.title}
          </h3>
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Пользователь: {todo.userId}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
