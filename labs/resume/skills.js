// Programming Languages
const HTML = document.getElementById("html")
const htmlChart = new Chart(HTML, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [80, 20],
        backgroundColor: [
            'rgba(255, 143, 31, 0.9)',
            'rgba(160, 160, 160, 0.1)',
          ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                font: {
                    size: 22,
                    style: 'normal',
                },
                text: "HTML",
            },
        },
        layout: {
            padding: {
                bottom: 10
            }
        },
    },
});

const JAVA = document.getElementById("java")
const javaChart = new Chart(JAVA, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [50, 50],
        backgroundColor: [
            'rgba(243, 28, 78, 0.9)',
            'rgba(160, 160, 160, 0.1)',
          ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                font: {
                    size: 22,
                    style: 'normal',
                },
                text: "Java",
            },
        },
        layout: {
            padding: {
                bottom: 10
            }
        },
    },
});

const JAVASCRIPT = document.getElementById("javascript")
const jsChart = new Chart(JAVASCRIPT, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [70, 30],
        backgroundColor: [
            'rgba(250, 250, 47, 0.9)',
            'rgba(160, 160, 160, 0.1)',
          ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                font: {
                    size: 22,
                    style: 'normal',
                },
                text: "JavaScript",
            },
        },
        layout: {
            padding: {
                bottom: 10
            }
        },
    },
});

const PYTHON = document.getElementById("python");
const pythonChart = new Chart(PYTHON, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [50, 50],
        backgroundColor: [
            'rgba(64, 137, 232, 0.9)',
            'rgba(160, 160, 160, 0.1)',
          ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                font: {
                    size: 22,
                    style: 'normal',
                },
                text: "Python",
            },
        },
        layout: {
            padding: {
                bottom: 10
            }
        },
    },
});

// Technologies
const TECH = document.getElementById("tech");
const techChart = new Chart(TECH, {
    type: 'polarArea',
    data: {
        labels: ['CSS', 'Cypress', 'Express', 'Git', 'Google Analytics', 'Google Tag Manager', 'Node', 'PostgreSQL', 'React', 'Sequelize'],
        datasets: [{
        data: [50, 80, 40, 70, 60, 60, 70, 50, 70, 50],
        backgroundColor: [
            'rgba(102, 102, 255, 0.9)',
            'rgba(255, 102, 178, 0.9)',
            'rgba(178, 102, 255, 0.9)',
            'rgba(101, 255, 255, 0.9)',
            'rgba(102, 255, 178, 0.9)',
            'rgba(101, 255, 102, 0.9)',
            'rgba(178, 255, 102, 0.9)',
            'rgba(255, 255, 102, 0.9)',
            'rgba(255, 178, 102, 0.9)',
            'rgba(255, 102, 102, 0.9)',
          ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                // display: true,
                font: {
                    size: 22,
                    style: 'normal',
                },
                text: "Technologies",
            },
        },
    },
});

// Languages
const CANTO = document.getElementById("canto");
const cantoChart = new Chart(CANTO, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [90, 10],
        backgroundColor: [
            'rgba(204, 153, 255, 0.9)',
            'rgba(160, 160, 160, 0.1)',
          ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                font: {
                    size: 22,
                    style: 'normal',
                },
                text: "Cantonese",
            },
        },
        layout: {
            padding: {
                bottom: 10
            }
        },
    },
});

const MANDA = document.getElementById("manda");
const mandaChart = new Chart(MANDA, {
    type: 'doughnut',
    data: {
        datasets: [{
        data: [60, 40],
        backgroundColor: [
            'rgba(255, 153, 255, 0.9)',
            'rgba(160, 160, 160, 0.1)',
          ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                font: {
                    size: 22,
                    style: 'normal',
                },
                text: "Mandarin",
            },
        },
        layout: {
            padding: {
                bottom: 10
            }
        },
    },
});



