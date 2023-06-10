import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

//

var data = {
  labels: [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ],
  datasets: [
    {
      label: 'Київ',
      data: [
        11829, 12094, 12987, 13116, 13015, 13982, 14053, 13743, 13991, 13786,
        13847, 16922,
      ],
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderColor: 'rgba(255, 205, 86, 1)',
      borderWidth: 1,
    },
    {
      label: 'Вінницька',
      data: [
        10751, 10927, 11696, 11977, 12247, 12789, 12782, 12426, 12690, 13054,
        13058, 15472,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Волинська',
      data: [
        11333, 11515, 12426, 12489, 12512, 13328, 13354, 13056, 13257, 13388,
        13497, 15735,
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Дніпропетровська',
      data: [
        12292, 12406, 13429, 13241, 13155, 13962, 13975, 13641, 13870, 13862,
        14043, 17021,
      ],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
    {
      label: 'Донецька',
      data: [
        11492, 11573, 12543, 12234, 12193, 12856, 12939, 12694, 12787, 12895,
        13121, 16129,
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Житомирська',
      data: [
        10965, 11187, 12043, 11955, 11929, 12678, 12699, 12385, 12522, 12614,
        12856, 15092,
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'Закарпатська',
      data: [
        10284, 10453, 11112, 11204, 11244, 11921, 11934, 11707, 11828, 11819,
        12028, 14283,
      ],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
    {
      label: 'Запорізька',
      data: [
        11255, 11413, 12234, 12398, 12556, 13134, 13155, 12909, 13087, 13116,
        13347, 15747,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Івано-Франківська',
      data: [
        10852, 11029, 11887, 11994, 12109, 12729, 12760, 12524, 12664, 12697,
        12958, 15224,
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Київська',
      data: [
        11807, 12024, 12946, 12758, 12755, 13512, 13523, 13249, 13422, 13418,
        13586, 16347,
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Кіровоградська',
      data: [
        10597, 10761, 11563, 11755, 11835, 12544, 12568, 12257, 12401, 12536,
        12747, 14997,
      ],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
    {
      label: 'Луганська',
      data: [
        10429, 10587, 11422, 11294, 11256, 11888, 11911, 11708, 11834, 11878,
        12101, 14476,
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'Львівська',
      data: [
        11695, 11889, 12865, 12976, 13029, 13819, 13856, 13529, 13725, 13761,
        13992, 16847,
      ],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
    {
      label: 'Миколаївська',
      data: [
        11071, 11253, 12092, 12165, 12304, 12883, 12909, 12698, 12826, 12961,
        13127, 15569,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Одеська',
      data: [
        11642, 11832, 12753, 12677, 12703, 13453, 13466, 13192, 13341, 13388,
        13597, 16345,
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Полтавська',
      data: [
        11196, 11375, 12216, 12218, 12281, 12974, 12992, 12722, 12868, 12956,
        13131, 15546,
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Рівненська',
      data: [
        11309, 11492, 12310, 12378, 12384, 13111, 13139, 12841, 13004, 13113,
        13255, 15543,
      ],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
    {
      label: 'Сумська',
      data: [
        10978, 11156, 11963, 12023, 12026, 12760, 12786, 12496, 12645, 12666,
        12846, 15112,
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'Тернопільська',
      data: [
        10642, 10829, 11672, 11763, 11843, 12533, 12555, 12250, 12385, 12499,
        12727, 15012,
      ],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
    {
      label: 'Харківська',
      data: [
        11573, 11775, 12732, 12688, 12645, 13439, 13461, 13198, 13339, 13355,
        13526, 16237,
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Херсонська',
      data: [
        11108, 11291, 12134, 12200, 12345, 12867, 12892, 12689, 12799, 12923,
        13107, 15589,
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Хмельницька',
      data: [
        10828, 11009, 11812, 11899, 12001, 12596, 12628, 12325, 12459, 12552,
        12701, 14959,
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Черкаська',
      data: [
        11028, 11208, 12016, 12109, 12111, 12836, 12858, 12580, 12709, 12745,
        12944, 15210,
      ],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
    {
      label: 'Чернівецька',
      data: [
        10547, 10733, 11582, 11693, 11788, 12398, 12423, 12129, 12267, 12387,
        12612, 14798,
      ],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
    {
      label: 'Чернігівська',
      data: [
        10715, 10895, 11711, 11812, 11811, 12545, 12570, 12282, 12431, 12548,
        12748, 15029,
      ],
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
  ],
};

// Параметри діаграми
var options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Створення діаграми
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options,
});
