function Filters({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Поиск */}
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Поиск
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Название задачи..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        {/* Фильтр по статусу */}
        <div className="sm:w-48">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Статус
          </label>
          <select
            id="status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
          >
            <option value="all">Все</option>
            <option value="completed">Выполненные</option>
            <option value="pending">Невыполненные</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
