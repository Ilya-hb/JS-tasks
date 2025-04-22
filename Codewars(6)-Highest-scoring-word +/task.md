# Найти числа, равные сумме цифр в степенях

## Условие

Функция `sumDigPow(a, b)` должна возвращать массив чисел из диапазона `[a, b]`, которые равны сумме своих цифр, возведённых в степень их позиции (индексация с 1).

## Пример

```javascript
sumDigPow(10, 100); // [89]
// 89 = 8^1 + 9^2 = 8 + 81
```

<details>
<summary>Подсказка (нажмите)</summary>

1. Преобразуйте число в строку, чтобы разбить на цифры
2. Используйте `Math.pow()` или оператор `**`
3. Сравните сумму с исходным числом
</details>

## Проверка

```javascript
console.assert(JSON.stringify(sumDigPow(1, 10)) === "[1,2,3,4,5,6,7,8,9]");
console.assert(JSON.stringify(sumDigPow(135, 135)) === "[135]");
console.assert(JSON.stringify(sumDigPow(90, 100)) === "[]");
```

Generated with Deepseek Chat
