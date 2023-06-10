// Создание SVG-элемента для отображения графика
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', 500)
  .attr('height', 500);

// Создание кружков для каждой точки данных с цветом, соответствующим кластеру
svg
  .selectAll('circle')
  .data(new_data)
  .enter()
  .append('circle')
  .attr('cx', d => d.x * 2)
  .attr('cy', d => d.y * 1)
  .attr('r', 5)
  .style('fill', d => (d.cluster === 0 ? 'red' : 'blue'));
/*
KMeansResult {
  clusters: [ 0, 0, 1, 1 ],
  centroids: [ [ 1, 1.5, 1 ], [ -1, -1, -1.25 ] ],
  converged: true,
  iterations: 2,
  distance: [Function: squaredEuclidean]
}
*/
// Пример данных для кластеризации
