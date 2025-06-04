// Пример реальной функции-хелпера
export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Или несколько функций
export const helpers = {
  formatText: (text: string) => text.trim(),
  // другие функции...
};