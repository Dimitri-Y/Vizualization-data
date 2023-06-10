import { kmeans } from 'ml-kmeans';
import { Chart, registerables } from 'chart.js';
import Notiflix from 'notiflix';
Chart.register(...registerables);

//
let canvas = document.getElementById('myChart');
const p_centroids = document.querySelector('p.centroids');
const form = document.querySelector('form.form');
const input = document.querySelector('input#X_number');
const createCentrBtn = document.querySelector('button[data-createCentr]');
const numClusters = document.querySelector('input#number_clusters');
//
let myChart;
let data = [[7], [170], [1.8], [24], [30], [120], [10.6], [8]];
let ans = kmeans(data, 2);
console.log(ans);
console.log(ans.computeInformation(data));

let new_data = [];
for (let i = 0; i < data.length; i++) {
  new_data.push({ x: data[i], y: 150, cluster: ans.clusters[i] });
}

let labels = new_data.map(item => `(${item.x}, ${item.y})`);
let clusters = new_data.map(item => item.cluster);
let uniqueClusters = [...new Set(clusters)];
let ctx = canvas.getContext('2d');
data = {
  labels: labels,
  datasets: uniqueClusters.map(cluster => ({
    label: `Cluster ${cluster}`,
    data: new_data
      .filter(item => item.cluster === cluster)
      .map(item => ({ x: item.x, y: item.y })),
    backgroundColor: `${getRandomHexColor()}`, // Цвет фона точек
    borderColor: `blue`, // Цвет границ точек
    pointRadius: 5, // Размер точек
  })),
};

const chart = (ctx, data) => {
  myChart = new Chart(ctx, {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
        },
        y: {
          type: 'linear',
          position: 'left',
        },
      },
    },
  });
};

chart(ctx, data);

function FormSubmitHandle(event) {
  event.preventDefault();
  if (input.value.trim() === '') {
  } else {
    try {
      myChart.destroy();
    } catch (error) {}

    data = input.value.split(' ');
    for (let i = 0; i < data.length; i++) {
      data[i] = [parseFloat(data[i].replace(',', '.'))];
    }
    console.log(data);
    try {
      console.log(parseInt(numClusters.value));
      ans = kmeans(data, parseInt(numClusters.value));
    } catch (error) {
      console.log(error.name);
      if (error.name === 'Error') {
        Notiflix.Notify.failure('Помилка при введенні значеннь');
        data = {
          labels: labels,
          datasets: uniqueClusters.map(cluster => ({
            label: `Cluster ${cluster}`,
            data: new_data
              .filter(item => item.cluster === cluster)
              .map(item => ({ x: item.x, y: item.y })),
            backgroundColor: `${getRandomHexColor()}`, // Цвет фона точек
            borderColor: `blue`, // Цвет границ точек
            pointRadius: 5, // Размер точек
          })),
        };
        chart(ctx, data);
        return 0;
      }
    }
    new_data = [];
    for (let i = 0; i < data.length; i++) {
      new_data.push({ x: data[i], y: 150, cluster: ans.clusters[i] });
    }
    console.log(ans.computeInformation(data));
    labels = new_data.map(item => `(${item.x}, ${item.y})`);
    clusters = new_data.map(item => item.cluster);
    uniqueClusters = [...new Set(clusters)];
    ctx = canvas.getContext('2d');

    console.log(new_data);

    data = {
      labels: labels,
      datasets: uniqueClusters.map(cluster => ({
        label: `Cluster ${cluster}`,
        data: new_data
          .filter(item => item.cluster === cluster)
          .map(item => ({ x: item.x, y: item.y })),
        backgroundColor: `${getRandomHexColor()}`, // Цвет фона точек
        borderColor: `blue`, // Цвет границ точек
        pointRadius: 5, // Размер точек
      })),
    };
    chart(ctx, data);
  }
}

function CreateCentrBtnHandle(event) {
  myChart.destroy();
  let t_new_data = [];
  ans.centroids.map(item => {
    t_new_data.push({
      x: item,
      y: 150,
    });
  });
  let tdata = {
    labels: 'centroids',
    datasets: [
      {
        data: t_new_data.map(item => ({ x: item.x, y: item.y })),
        backgroundColor: `red`, // Цвет фона точек
        borderColor: `red`, // Цвет границ точек
        pointRadius: 3, // Размер точек
        label: 'centroids',
      },
    ],
  };
  chart(ctx, tdata);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

form.addEventListener('submit', FormSubmitHandle);
createCentrBtn.addEventListener('click', CreateCentrBtnHandle);
