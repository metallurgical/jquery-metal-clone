/*===================================================================
 | jQuery Metal Clone Plugins 
 |===================================================================
 | http://thunderwide.com 
 |
 | @category   Plugins
 | @author     Norlihazmey <norlihazmey89@thunderwide.com>
 | @license    Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 |             and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 | @copyright  (c) 2015 Norlihazmey(metallurgical)
 | @version    1.0.0
 | @Github 	   https://github.com/metallurgical/jquery-metal-clone
 |===================================================================*/

;(function($){
	

	$.fn.metalClone = function(options , callback){

		opt = $.extend({}, $.fn.metalClone.defaults, options);

		/*if($.isFunction(options)){

			callback = options;
			options = null;

		}*/

		// Get the selector
		// To see either class or ids were used
		var typeSelector = this.selector;
		var element;
		

		    if (typeSelector.match(/[.]/)) {
		    	// if the selector is a class, 
		    	// then take the first element only
		    	element = $(this).first();
		    }
		    else {
		    	// If the selector is an ID
		    	// return  its object
		    	element = $(this);
		    }

		
		/*===============================================
		| Default clone button
		|================================================
		| If user did't not provided the class or id name for 
		| cloned button, then system will provided one
		|================================================*/

		// initialize global variable for clone button
		var currentBtnClone;

		// If user not defined clone button, 
		// then make new one
		if (opt.btnClone === null) {
			// create new clone button with unique id
			currentBtnClone = "metalBtnClone"+Math.floor(Math.random()*9+1);
			$('<input/>',{

				type : 'button',
				value : opt.btnCloneText,
				class : currentBtnClone

			}).insertAfter(typeSelector);

			// Concat the . sysmbol at beggining of 
			// class name for dynamic create button
			currentBtnClone = '.'+currentBtnClone;
		}
		// if user defined the button itself,
		// then use user defined button instead
		else{
			currentBtnClone = opt.btnClone;
		}


		// Capture the configuration options
		var currentCopyValue     = opt.copyValue;
		var currentPosition      = opt.position;
		var currentNumberToClone = opt.numberToClone;
		var currentDestination   = opt.destination;
		var currentIds           = opt.ids;
		var currentBtnRemoveText = opt.btnRemoveText;
		

		console.log(currentBtnClone);
		/*===============================================
		| When Clone button was clicked
		|================================================*/
		$(document).on('click', currentBtnClone, function(){
			
			// Store the destination of cloned element
			var destinationClone;

			// If destination provided, 
			// then use user defined destination
			if (currentDestination !== false){

				// Use user defined destination
				destinationClone = $(currentDestination);

				// Put either after or before depend
				// on user defined position
				if (currentPosition === "after"){
					loopCloneAppendPrepend(currentNumberToClone, element, destinationClone, currentPosition);
					return;
				} else {
					loopCloneAppendPrepend(currentNumberToClone, element, destinationClone, currentPosition);
					return;
				}

			} 

			// If did't provied,just clone element 
			// after/before cloned element
			else {

				destinationClone = $(typeSelector);

				if (currentPosition === "after"){					
					loopCloneAfterBefore(currentNumberToClone, element, destinationClone.last(), currentPosition);
					return;
				} else {					
					loopCloneAfterBefore(currentNumberToClone, element, destinationClone.first(), currentPosition);
					return;
				}
			}

			return;

			

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

			// Cache the clone obj
			var cloneObj = elementClone; 
			// If user put 0,
			// Then assign 1 as a default value
			// else use the provided value
			numberToClone = (numberToClone == 0) ? 1 : numberToClone;  

			// If want to clone after
			if (position === "after"){
				for(var i = 0; i < numberToClone; i++){
					var toClone = cloneObj.clone();
					destination.append(toClone.append('<input type="button" value="'+currentBtnRemoveText+'" class="metalBtnRemove">'));
					if(currentCopyValue){ /* never copy */}else{clearForm(toClone);}
				}	
				
			}
			// If want to clone before
			else if (position === "before"){

				for(var i = 0; i < numberToClone; i++){
					var toClone = cloneObj.clone();
					destination.prepend(toClone.append('<input type="button" value="'+currentBtnRemoveText+'" class="metalBtnRemove">'));
					if(currentCopyValue){ /* never copy */}else{clearForm(toClone);}
				}
				
			}
			
			// If the opt.ids is an empty array
			// Is a default value
			if($.isArray(currentIds) && $.isEmptyObject(currentIds)){
				
				// id will not increament
				// do nothing
				
			}
			// If user provided element in array container
			// Then call the function
			// pass the opt.ids array value[* or a few]
			else if ($.isArray(currentIds) && !$.isEmptyObject(currentIds)){
				
				// call the function
				idIncreament(currentIds);
			}
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
					var toClone = cloneObj.clone();
						toClone.insertAfter(destination)
							   .append('<input type="button" value="'+currentBtnRemoveText+'" class="metalBtnRemove">');

					   if(currentCopyValue){ console.log('a');/* never copy */}else{clearForm(toClone);}
						

				}
				
			}
			// If want to clone before
			else if (position === "before"){

				// Clone element[insert before]
				for(var i = 0; i < numberToClone; i++){
					var toClone = cloneObj.clone();
					toClone.insertBefore(destination)
						   .append('<input type="button" value="'+currentBtnRemoveText+'" class="metalBtnRemove">');

					if(currentCopyValue){ /* never copy */}else{clearForm(toClone);}
				}	
				
			}

			// If the opt.ids is an empty array
			// Is a default value
			if($.isArray(currentIds) && $.isEmptyObject(currentIds)){
				// id will not increament
				// do nothing
				
			}
			// If user provided element in array container
			// Then call the function
			// pass the opt.ids array value[* or a few]
			else if ($.isArray(currentIds) && !$.isEmptyObject(currentIds)){

				// call the function
				idIncreament(currentIds);
			}
			
			
			return;
		}


		function clearForm(container){
			
			container.find('input:not("input[type=button], input[type=submit]"), textarea, select').each(function(){
				$(this).val('');
			})
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
						// Get the original value
						var oldValue = $(this).attr('id');
						var newValue = oldValue.replace(/\d+/g, '');
						//var increValue = 
						// Set the new id(s) value
						$(this).attr('id',newValue + parseInt(inc));
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

			
		})
		
	};

	$.fn.metalClone.defaults = {

		destination : false,			// Put your selector(parent container) eg : .myContainer | #myContainer
		position	: 'after',			// Available in two option : after & before
		numberToClone : 1,				// Number of element to clone
		ids		  	: [],				// Element to increase the id(s) value, unique purpose
										// eg : ['input','select','textarea']
										// Available options :
										// - input
										// - select
										// - textarea
										// - div
										// - span
										// - i
										// - strong
										// - h1-h6
										// * -> find all element inside container
										// - ......
										// ~~~~~ all HTML tag are availeble
										
		btnClone	: null,	// Put your selector(button class or id name) eg : .clickMe | #clickMe
		copyValue 	: false,			// Clone together the previous element value - available for form element only
		btnRemoveText : 'Remove me',			// Text appear on remove button
		btnCloneText : 'Create New Element'		// Text appear on clone button

		// Please wait for callback option.. coming soon..

	};
	
	
})(jQuery);