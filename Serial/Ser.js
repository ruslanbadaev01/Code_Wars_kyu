function serialize(numbers) {
  /**
   * Функция сериализации массива чисел в строку с использованием Base64.
   */
  // Преобразование чисел в бинарные данные (Uint8Array)
  const uint8Array = new Uint8Array(numbers);
  // Кодирование бинарных данных в Base64
  const base64String = btoa(String.fromCharCode(...uint8Array));
  return base64String;
}

function deserialize(base64String) {
  /**
   * Функция десериализации строки в массив чисел с использованием Base64.
   */
  // Декодирование строки из Base64
  const decodedString = atob(base64String);
  // Преобразование строки в массив чисел
  const numbers = Array.from(decodedString, (char) => char.charCodeAt(0));
  return numbers;
}
// Примеры тестов для проверки сериализации и десериализации массива

// Функция для проверки сериализации и десериализации массива
function testSerializeDeserializeArray(arr) {
  let serializedArr = serialize(arr);
  let deserializedArr = deserialize(serializedArr);
  console.log("Исходный массив:", arr);
  console.log("Сериализованный массив:", serializedArr);
  console.log("Десериализованный массив:", deserializedArr);
  console.log(
    "Коэффициент сжатия:",
    serializedArr.length / JSON.stringify(arr).length
  );
  console.log("--------------------------------------------------------------");
}

// Тест 1: Массив с случайными числами (500 чисел)
let arr1 = [];
for (let i = 0; i < 500; i++) {
  arr1.push(Math.floor(Math.random() * 1000) + 1);
}
testSerializeDeserializeArray(arr1);

// Тест 2: Массив с случайными числами (1000 чисел)
let arr2 = [];
for (let i = 0; i < 1000; i++) {
  arr2.push(Math.floor(Math.random() * 1000) + 1);
}
testSerializeDeserializeArray(arr2);

// Тест 3: Массив с числами из одной цифры (граничный случай)
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
testSerializeDeserializeArray(arr3);

// Тест 4: Массив с числами из двух цифр (граничный случай)
let arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
testSerializeDeserializeArray(arr4);

// Тест 5: Массив с числами из трех цифр (граничный случай)
let arr5 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
testSerializeDeserializeArray(arr5);

// Тест 6: Массив с каждым числом по 3 раза (всего 900 чисел)
let arr6 = [];
for (let i = 1; i <= 300; i++) {
  arr6.push(i, i, i);
}
testSerializeDeserializeArray(arr6);
