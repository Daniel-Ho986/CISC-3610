const DONUT = document.getElementById("donutChart");
const HBAR = document.getElementById("hBarChart");

let donutChart = new Chart(DONUT, {
  type: 'doughnut',
  data: {
    labels: [
      'Brooklyn Studio Secondary School',
      'Brooklyn Technical High School',
      'Edward R. Murrow High School',
      'Forest Hills High School',
      'Fort Hamilton High School',
      'Franklin Delano Roosevelt High School',
      'James Madison High School',
      'John Dewey High School',
      'Life Academy High School For Film and Music',
      'Midwood High School',
      'Stuyvesant High School'
    ],
    datasets: [{
      label: '2012 Num of SAT Test Takers',
      data: [119, 1277, 727, 762, 694, 385, 518, 448, 40, 824, 832],
      backgroundColor: [
        'rgb(255, 102, 102)',
        'rgb(255, 178, 102)',
        'rgb(255, 255, 102)',
        'rgb(178, 255, 102)',
        'rgb(102, 255, 102)',
        'rgb(102, 255, 178)',
        'rgb(102, 255, 255)',
        'rgb(102, 178, 255)',
        'rgb(102, 102, 255)',
        'rgb(178, 102, 255)',
        'rgb(255, 102, 255)'
      ],
      hoverOffset: 15,
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: '2012 Num of SAT Test Takers by Daniel Ho',
        font: {
            size: 15,
        }
      },
      legend: {
        position: 'bottom',
        labels: {
          textAlign: 'center',
        }
      }
    }
  }

})

let hBarChart = new Chart(HBAR, {
  type: 'bar',
  data: {
    labels: [
      'Brooklyn Studio Secondary School',
      'Brooklyn Technical High School',
      'Edward R. Murrow High School',
      'Forest Hills High School',
      'Fort Hamilton High School',
      'Franklin Delano Roosevelt High School',
      'James Madison High School',
      'John Dewey High School',
      'Life Academy High School For Film and Music',
      'Midwood High School',
      'Stuyvesant High School'
    ],
    datasets: [{
      label: '2010 Num of SAT Test Takers',
      data: [86, 1047, 686, 627, 581, 385, 641, 349, 0, 725, 804],
      backgroundColor: [
        'rgb(255, 204, 204)',
        'rgb(255, 229, 204)',
        'rgb(255, 255, 204)',
        'rgb(229, 255, 102)',
        'rgb(204, 255, 204)',
        'rgb(204, 255, 229)',
        'rgb(204, 255, 255)',
        'rgb(204, 229, 255)',
        'rgb(204, 204, 255)',
        'rgb(229, 204, 255)',
        'rgb(255, 204, 255)'
      ],
      hoverOffset: 15,
      
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: {
      title: {
        display: true,
        text: '2010 Num of SAT Test Takers by Daniel Ho',
        font: {
            size: 15,
        }
      }
    }
  }
})