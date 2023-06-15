$(document).ready(function () {
    $.ajax({
        url: '/chart',
        type: 'post',
        dataType: 'json',
        success: function(response) {
          // Обработка успешного ответа
          var labels = response.labels;
          var data = response.data;
          console.log(labels);
          console.log(data);
      
          // Создание диаграммы
          var ctx = document.getElementById('barChart').getContext('2d');
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [{
                label: 'Most popular products',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        },
        error: function(xhr, status, error) {
          // Обработка ошибки
          console.error(error);
        }
    });
});