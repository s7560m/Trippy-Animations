(function(){
		    var canvas = document.getElementById('canvas');
		    var context = canvas.getContext('2d');
		    var power = (1/32);
		    var x = 0.000001;
		    var i = 0;
		    var animation = function(power, x) {return Math.sin(power * x);}

		    // Private drawbox function; draws boxes
		    function drawBox(x, y) {
		    	var colors = ["red", "blue", "green"]
		    	if (i > colors.length - 1) i = 0;
		        context.fillStyle = colors[i];
		        context.fillRect(x, y, 7, 7);
		        i++;
		    }

		    // Draws preview sine
		    function drawPreview(x) {
		    	var increment;
		    	for (increment = 0; increment < canvas.height * 40; increment++) {
		    		drawBox(animation(power, increment) * 20 + canvas.width / 2 + x, increment);

		    	}
		    }

		    // Function that updates all the time
		    function update() {
		    	var tempPow;
		    	context.clearRect(0, 0, canvas.width, canvas.height);
				drawPreview(0);
		        drawBox(animation(power, x) * 200 + canvas.width / 2, canvas.height / 2);
		        x++;

		        // Change mode of animation based on graphs
		        window.addEventListener("keydown", function(e) {
		        	switch(e.keyCode) {
		        		case 49:
		        			animation = function sine(power, x) { return Math.sin(power * x); }
		        			break;

		        		case 50:
		        			animation = function cos(power, x) { return Math.cos(power * x); }
		        			break;

		        		case 51:
		        			animation = function tan(power, x) { return Math.tan(power * x^2); }
		        			break;

		        		case 52:
		        			animation = function sqrt(power, x) {
	        					var sqrting = (x % 2 === 0) ? (1 / Math.sqrt(1 / Math.sin(((1/4) * power * x)))) : (1 / -Math.sqrt(1 / Math.sin(((1/4) * power * x))));
	        					return sqrting;
		        			}
		        			break;

		        		case 53:
		        			animation = function square(power, x) {
		        				var squar = (power * x)^2;
		        				return squar;
		        			}
		        			break;

		        		case 54:
		        			animation = function massEffect(power, x) {
		        				var massEffect = Math.asin(1/(power * x));
		        				return massEffect;
		        			}
		        			break;

		        		case 55:
		        			animation = function cosecant(power, x) {
		        				var weirdAssCircle = 1 / Math.sin(power * x);
		        				return weirdAssCircle;
		        			}
		        			break;

		        		case 56:
		        			animation = function secant(power, x) {
		        				var secant = 1 / Math.cos(power * x);
		        				return secant;
		        			}
		        			break;

		        		case 57:
		        			animation = function cotangent(power, x) {
		        				var cotangent = 1 / Math.tan(power * x);
		        				return cotangent;
		        			}
		        			break;
		        	}
		        });
		        power += 1/100;
		    }
		    setInterval(update, 1000 / 60);
		})();
