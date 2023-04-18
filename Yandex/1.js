module.exports = async function (request, showSpinner, hideSpinner) {
  // Показываем спиннер
  const start = Date.now(); // Запоминаем текущее время
  const spinnerTimeout = setTimeout(() => {
    showSpinner();
  }, 250); // Показываем спиннер, если запрос выполняется дольше 250 миллисекунд

  // Выполняем запрос и ожидаем его завершения
  const response = await request();

  // Скрываем спиннер, если он еще не скрыт
  clearTimeout(spinnerTimeout);
  hideSpinner();

  // Проверяем, выполнялся ли запрос дольше 1000 миллисекунд
  const duration = Date.now() - start; // Вычисляем длительность выполнения запроса
  const longerThanThousand = duration > 1000; // Проверяем, дольше ли тысячи миллисекунд
  console.log(`showed? ${!longerThanThousand}`); // Выводим, был ли показан спиннер
  console.log(`longer than thousand? ${longerThanThousand}`); // Выводим, выполнялся ли запрос дольше тысячи миллисекунд

  return response;
};
