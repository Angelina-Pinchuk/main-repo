window.addEventListener('DOMContentLoaded', () => {
    // Создаём кнопку
    const btn = document.createElement('button');
    btn.textContent = 'Run script';
    btn.className = 'my-run-btn'; // назначаем определённый класс

// Добавляем кнопку в начало body
    document.body.insertBefore(btn, document.body.firstChild);

// Вешаем обработчик на кнопку
    btn.addEventListener('click', () => {
        alert('script is running');
    });
});
