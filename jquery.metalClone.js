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
		|================================================
		| numberToClone		: Number of container to clone
		| elementClone		: Element want to clone
		| destination 	 	: Placeholder/destination to place the cloned element
		| position			: Position of newly cloned element
		|
		|
		|===============================================*/
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
			
			idIncreament();
			return;
		}

		/*===============================================
		| Function to clone element(IF destination not provided)
		|================================================
		| numberToClone		: Number of container to clone
		| elementClone		: Element want to clone
		| destination 	 	: Placeholder/destination to place the cloned element
		| position			: Position of newly cloned element
		|
		|
		|===============================================*/
		function loopCloneAfterBefore(numberToClone, elementClone, destination, position){

			// Cache the clone obj
			var cloneObj = elementClone;   

			// If user put 0,
			// Then assign 1 as a default value
			// else use the provided value
			numberToClone = (numberToClone == 0) ? 1 : numberToClone;

			// If want to clone after
			if (position === "after"){

				// Clone element[insert after the clone element]
				for(var i = 0; i < numberToClone; i++){
					cloneObj
						.clone()
						.insertAfter(destination)
							.append('<input type="button" value="remove" class="metalBtnRemove">');
				}
			}
			// If want to clone before
			else if (position === "before"){

				// Clone element[insert before]
				for(var i = 0; i < numberToClone; i++){

					cloneObj
						.clone()
						.insertBefore(destination)
							.append('<input type="button" value="remove" class="metalBtnRemove">');
				}	
			}

			// If the opt.ids is an empty array
			// Is a default value
			if($.isArray(opt.ids) && $.isEmptyObject(opt.ids)){
				// id will not increament
				// do nothing
				// console.log('ss');
			}
			// If user provided element in array container
			// Then call the function
			// pass the opt.ids array value[* or a few]
			else if ($.isArray(opt.ids) && !$.isEmptyObject(opt.ids)){

				// call the function
				idIncreament(opt.ids);
			}
			
			
			return;
		}


		/*===============================================
		| Function to clone element(IF destination not provided)
		|================================================*/
		function idIncreament(arr){

			var ids_value;

			// Check if the paramter passed 
			// has *(all) symbol
			// if yes, then find all element
			if ($.inArray('*', arr)){
				ids_value = '*';
			}
			// find element provided in array
			//  list only
			else {
				ids_value = arr.join(',');
			}
			

			// iterate throught cloned container			
			$(typeSelector).each(function(inc, e){

				// then find the element either * or a few
				// depend on user defined and default value
				$(this).find(ids_value).each(function(i,ee){

					// looking for and ID(S)
					// if found, then increament its value
					// to ensure all the same clone element
					// have unique id value
					if($(this).attr('id')){
						var oldValue = $(this).attr('id');
						$(this).attr('id',oldValue + inc);
					}
				});
			
			});
		}

		/*===============================================
		| When Remove button was clicked
		|================================================*/
		$(document).on('click', '.metalBtnRemove', function(){
			// Get the parent container
			// Then remove including child
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
		ids		  	: [],
		btnClone	: '.metalBtnClone',
		onStart 	: null,
		onStop 		: null,
		onHalf 		: null,
		onFinish 	: null

	};
	
	
})(jQuery);