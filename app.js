$(document).ready(function(){
	$(".color").on('click', function(){
		$('.colorChange').each(function(){
			var hexTripletColor = randomColor();
			$(this).css('background-color', hexTripletColor);
			console.log(hexTripletColor);
			$(this).css('color', invertColor(hexTripletColor));	
		});	
	});
});

function randomColor(){
	return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

function invertColor(hexTripletColor) {
	var color = hexTripletColor;

	color = color.substring(1); // remove #

	color = parseInt(color, 16); // convert to integer

	color = 0xFFFFFF ^ color; // invert three bytes

	color = color.toString(16); // convert to hex

	color = ("000000" + color).slice(-6); // pad with leading zeros

	color = "#" + color; // prepend #
	console.log('I am inverted --- ' + color);
	return color;
}


		
		
		

	
	 
