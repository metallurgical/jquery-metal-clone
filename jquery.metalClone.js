(function($){
	

	$.fn.metalClone = function(options , callback){

		opt = $.extend({}, $.fn.metalClone.defaults, options);

		/*if($.isFunction(options)){

			callback = options;
			options = null;

		}*/

		var typeSelector = this.selector;
		var element;
		

		    if (typeSelector.match(/[.]/)) {
		    	// if the selector is a class, 
		    	// then take the first element only
		    	element = $(this).first();
		    }
		    else {
		    	element = $(this);
		    }

		
		/*===============================================
		| Default clone button
		|================================================*/
		if (opt.btnClone === '.metalBtnClone') {

			$('<input/>',{

				type : 'button',
				value : 'Create New Element',
				class : 'btnClone'

			}).insertAfter(typeSelector);
		}


		/*===============================================
		| When Clone button was clicked
		|================================================*/
		$(document).on('click', opt.btnClone, function(){

			var destinationClone;

			// If destination provided, 
			// then use user defined destination
			if (opt.destination !== false){

				destinationClone = $(opt.destination);

				if (opt.position === "after"){
					loopCloneAppendPrepend(opt.numberToClone, element, destinationClone, opt.position);
				} else {
					loopCloneAppendPrepend(opt.numberToClone, element, destinationClone, opt.position);
				}

			} 

			// else just clone element 
			// after/before cloned element
			else {

				destinationClone = $(typeSelector);

				if (opt.position === "after"){					
					loopCloneAfterBefore(opt.numberToClone, element, destinationClone.last(), opt.position);
				} else {					
					loopCloneAfterBefore(opt.numberToClone, element, destinationClone.first(), opt.position);
				}
			}

			// Create remove button
			// Remove cloned element
			
			

		})

		/*===============================================
		| Function to clone element(IF destination provided)
		|================================================*/
		function loopCloneAppendPrepend(numberToClone, elementClone, destination, position){

			var cloneObj = elementClone;   

			if (position === "after"){
				for(var i = 0; i < numberToClone; i++){
					destination.append(cloneObj.clone().append('<input type="button" value="remove" class="metalBtnRemove">'));
				}	
			}
			else if (position === "before"){

				for(var i = 0; i < numberToClone; i++){
					destination.prepend(cloneObj.clone().append('<input type="button" value="remove" class="metalBtnRemove">'));
				}
			}
			
			return;
		}

		/*===============================================
		| Function to clone element(IF destination not provided)
		|================================================*/
		function loopCloneAfterBefore(numberToClone, elementClone, destination, position){

			var cloneObj = elementClone;   

			numberToClone = (numberToClone == 0) ? 1 : numberToClone;

			if (position === "after"){
				for(var i = 0; i < numberToClone; i++){
					cloneObj
						.clone()
						.insertAfter(destination)
							.append('<input type="button" value="remove" class="metalBtnRemove">');
				}
			}
			else if (position === "before"){
				for(var i = 0; i < numberToClone; i++){

					cloneObj
						.clone()
						.insertBefore(destination)
							.append('<input type="button" value="remove" class="metalBtnRemove">');
				}	
			}
			
			return;
		}


		/*===============================================
		| When Remove button was clicked
		|================================================*/
		$(document).on('click', '.metalBtnRemove', function(){
			$(this).closest(typeSelector).remove();
		})
		

		return element.each(function(i,e){

			var $elem = $(this);

			/*if($.isFunction(options.onStart)){

				options.onStart.call(this);
			}

			$.isFunction(callback) && callback();*/
		})
		
	};

	$.fn.metalClone.defaults = {

		destination : false,
		position	: 'after',
		numberToClone : 4,
		ids		  	: false,
		btnClone	: '.metalBtnClone',
		onStart 	: null,
		onStop 		: null,
		onHalf 		: null,
		onFinish 	: null

	};
	
	
})(jQuery);