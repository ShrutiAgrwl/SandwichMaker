$class1 = ['link-mayo', 'link-tomato', 'link-cheese', 'link-carrot'];
$class2 = ['link-butter', 'link-onion', 'link-lettuce', 'link-bell'];
$lab1 = ['Tomato', 'Cheese Slice', 'Carrot'];
$lab2 = ['Onion', 'Lettuce', 'Bell Pepper'];
$count = 0;
$(document).ready(function(){
	$('.btn').click(function(){
		if($count <= 2){ 
			$('input[name="toppings"]').prop('checked', false);

			$('.' + $class1[$count]).addClass($class1[$count+1]);
			$('.' + $class1[$count]).removeClass($class1[$count]);

			$('.' + $class2[$count]).addClass($class2[$count+1]);
			$('.' + $class2[$count]).removeClass($class2[$count]);

			$('.label1').html($lab1[$count]);
			$('.label2').html($lab2[$count]);
			$count += 1;
		}
		else{
			$('.bread').fadeIn();
			$('label').remove();
			$('input').remove();
			$('h4').html('Your Sandwich is ready.....<br> Have Enjoy!!!');
			$('h4').css('text-align', 'center');
		}
	});
	$('input').click(function(){
		if($('.link-mayo').prop("checked") == true){
			$('.mayo').fadeIn();
		}
		else if($('.link-mayo').prop("checked") == false){
			$('.mayo').fadeOut();
		}
		if($('.link-butter').prop('checked') == true){
			$('.butter').fadeIn();
		}
		else if($('.link-butter').prop("checked") == false){
			$('.butter').fadeOut();
		}

		if($('.link-tomato').prop("checked") == true){
			$('.tomato').fadeIn();
		}
		else if($('.link-tomato').prop("checked") == false){
			$('.tomato').fadeOut();
		}
		if($('.link-onion').prop('checked') == true){
			$('.onion').fadeIn();
		}
		else if($('.link-onion').prop("checked") == false){
			$('.onion').fadeOut();
		}

		if($('.link-cheese').prop("checked") == true){
			$('.cheese-slice').fadeIn();
		}
		else if($('.link-cheese').prop("checked") == false){
			$('.cheese-slice').fadeOut();
		}
		if($('.link-lettuce').prop('checked') == true){
			$('.lettuce').fadeIn();
		}
		else if($('.link-lettuce').prop("checked") == false){
			$('.lettuce').fadeOut();
		}

		if($('.link-carrot').prop("checked") == true){
			$('.carrot').fadeIn();
		}
		else if($('.link-carrot').prop("checked") == false){
			$('.carrot').fadeOut();
		}
		if($('.link-bell').prop('checked') == true){
			$('.bell-pepper').fadeIn();
		}
		else if($('.link-bell').prop("checked") == false){
			$('.bell-pepper').fadeOut();
		}
	});
});
