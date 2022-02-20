//Grafico
	
	var config_line = {
	  type: 'line',
	  data: {
		labels: [],
		datasets: [{
		  label: 'Gráfico',
		  data: [],
		  borderWidth: 1,
		  borderColor: 'rgba(255,0,0,0.85)',
		  backgroundColor: 'transparent',
		}]
	  },
	  options: {
		responsive: true,
		title: {
		  display: true,
		  text: 'Valor'
		},
		tooltips: {
		  mode: 'index',
		  intersect: false,
		},
		hover: {
		  mode: 'nearest',
		  intersect: true
		},
		scales: {
		  xAxes: [{
			type: 'time',
			ticks: {
			  minRotation: 90,
			  source: 'data'  
			},
			distribution: 'series',
			display: true,
			scaleLabel: {
			  display: true,
			  labelString: 'Sample'
			}
		  }],
		  yAxes: [{
			display: true,
			scaleLabel: {
			  display: true,
			  labelString: 'Values'
			}
		  }]
		}
	  }
	};

	function createMyLine() {
	  var ctx = document.getElementById('canvas').getContext('2d');
	  window.myLine = new Chart(ctx, config_line);
	};
	
	