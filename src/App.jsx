import { useState, useEffect } from 'react';
import { fetchTodos, fetchUsers } from './api/api';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTodo, setSelectedTodo] = useState(null);
  
  // Фильтры
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [todosData, usersData] = await Promise.all([
          fetchTodos(),
          fetchUsers()
        ]);
        setTodos(todosData);
        setUsers(usersData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Фильтрация задач
  const filteredTodos = todos.filter(todo => {
    // Поиск по названию
    const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Фильтр по статусу
    let matchesStatus = true;
    if (statusFilter === 'completed') {
      matchesStatus = todo.completed;
    } else if (statusFilter === 'pending') {
      matchesStatus = !todo.completed;
    }
    
    return matchesSearch && matchesStatus;
  });

  // Показываем только первые 15 задач
  const displayedTodos = filteredTodos.slice(0, 15);

  // Получение пользователя по ID
  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка задач...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="mt-4 text-red-600 font-medium">Ошибка: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">Список задач</h1>
          <p className="text-gray-500 text-sm mt-1">JSONPlaceholder API</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <Filters 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        {displayedTodos.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow mt-4">
            <svg className="w-16 h-16 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="mt-4 text-gray-500">Ничего не найдено</p>
            <p className="text-gray-400 text-sm">Попробуйте изменить параметры поиска или фильтра</p>
          </div>
        ) : (
          <TodoList 
            todos={displayedTodos}
            onSelectTodo={setSelectedTodo}
          />
        )}
      </main>

      {selectedTodo && (
        <TodoDetail 
          todo={selectedTodo}
          user={getUserById(selectedTodo.userId)}
          onClose={() => setSelectedTodo(null)}
        />
      )}
    </div>
  );
}

export default App;
