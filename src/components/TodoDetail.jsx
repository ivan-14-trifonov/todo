function TodoDetail({ todo, user, onClose }) {
  if (!todo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Заголовок */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Детали задачи</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Содержимое */}
        <div className="p-4 space-y-4">
          {/* Статус */}
          <div className="flex items-center gap-2">
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

          {/* Название */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{todo.title}</h3>
          </div>

          {/* ID задачи */}
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm text-gray-500">ID задачи</p>
            <p className="text-gray-800 font-medium">#{todo.id}</p>
          </div>

          {/* Пользователь */}
          {user && (
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm text-blue-600 font-medium mb-2">Информация о пользователе</p>
              <div className="space-y-1">
                <div>
                  <p className="text-sm text-blue-500">Имя</p>
                  <p className="text-gray-800">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-500">Email</p>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-blue-500">ID пользователя</p>
                  <p className="text-gray-800">#{user.id}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Кнопка закрытия */}
        <div className="p-4 border-t">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;
