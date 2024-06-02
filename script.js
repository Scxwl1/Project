// Переключение между вкладками
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

// Управление видимостью графика
var chartElement = document.getElementById('financeChart');
if (tabName === 'Main') {
    chartElement.style.display = 'block'; // Показываем график на вкладке "Главное"
} else {
    chartElement.style.display = 'none'; // Скрываем график на всех других вкладках
}
}

// Установка вкладки "Главное" как домашнего экрана
document.addEventListener("DOMContentLoaded", function(event) {
    openTab(event, 'Main');
    document.querySelector('.tablinks').classList.add('active');
});