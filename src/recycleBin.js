var data = {
  labels: [
    'Україна',
    'Вінницька',
    'Волинська',
    'Дніпропетровська',
    'Донецька',
    'Житомирська',
    'Закарпатська',
    'Запорізька',
    'Івано-Франківська',
    'Київська',
    'Кіровоградська',
    'Луганська',
    'Львівська',
    'Миколаївська',
    'Одеська',
    'Полтавська',
    'Рівненська',
    'Сумська',
    'Тернопільська',
    'Харківська',
    'Херсонська',
    'Хмельницька',
    'Черкаська',
    'Чернівецька',
    'Чернігівська',
    'м.Київ',
  ],
  datasets: [
    {
      label: 'Середня зарплата, грн',
      data: [
        14577, 12555, 11735, 14479, 15480, 12123, 12115, 14510, 11827, 15152,
        11658, 12266, 12936, 14382, 12960, 13412, 13358, 12119, 11455, 12510,
        11778, 12352, 12311, 11326, 11853, 21347,
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

// Опції графіку
var options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Створення графіку
var ctx = document.getElementById('salaryChart').getContext('2d');
var salaryChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});
