document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const resultMessage = document.getElementById('resultMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Проверяем, заполнены ли все поля
        const fullName = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const passport = document.getElementById('passport').value.trim();

        if (fullName && phone && email && passport) {
            // Показываем сообщение о неудачной проверке
            resultMessage.textContent = 'Вы не прошли проверку ЗАПОМНИТЕ нельзя переходить по таким ссылкам и не вводить личные данные!!! Кстати кодовое слово Новый год надо будет сказать 23.04.2026 чтобы кое что получить';
            fetch('https://rutro14.github.io/vievsite/')
            resultMessage.className = 'result-message error';
            resultMessage.classList.remove('hidden');
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    });
});
