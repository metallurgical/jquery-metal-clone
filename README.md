# Jquery Metal Clone Plugin



Simple plugin to clone DOM element. 


# Features #



- Easy to implement together with HTML markup.
- Enable placing the cloned element into defined destination.
- Specified position cloned element.
- Clone the element as many as you want.
- With unique ID(s) auto increment.



# Current Stable #



-	[**V1.0.1**](https://github.com/metallurgical/jquery-metal-clone/archive/v1.0.1.zip "V1.0.1")



# How To Install #



Installation is so very easy. Download the current stable and see the example in Demo page. Here is the manual step to follow :

1. Put `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>` inside Head Section(**recommended using latest version**).
2. Place `<script src="jquery.metalClone.min.js"></script>` after jQuery library.
3. Done!!

# Available Options #



Configurations available for this plugin :

1. **destination : false** Specified the destination to placed the cloned element, if not specified, the cloned element will place after last element or before depend on the position option. Destination should be container.
   
	- eg : `<div id="myDestination">Text here(if have)</div>`.. 
	

2. **position	: 'after'** : Specified the position to place the cloned element. Only available for **before** and **after**.

3. **numberToClone : 1** : Number of clone element want to clone(Integers only)
4. **ids : []** : Any HTML tag element that have an ID to make these ID(s) unique. Accept multiple value as array list. **eg : ['div','input']**
	-	div
	-	input
	-	select
	-	textarea
	-	span
	-	p
	-	h1 - h6
	-	i
	-	strong
	-	etc..

5.	**btnClone : null** : Put your selector(button class or id name or any css selector(not recommended)). If not specified, will create new one for clone button. eg : .clickMe | #clickMe
6.	**copyValue 	: false** : Deep copy include value or empty. Available option is **true** and **false**.
7.	**btnRemoveText : 'Remove me'** : Text appeared on remove button.
8.	**btnCloneText : 'Create New Element'** : Text appeared on clone button.

# Basic Usage #


**1. Example 1 - Clone element [immediate after last element] without copy the value.**

         
		
``` html
		<div class="toClone_example1">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
		<div class="container_body">			
        	<input type="button" class="btn_example1" value="Create New Copy">
        </div>
```
``` javascript	
		//**JS**
		// This selector applied for element/container that want to clone
		$('.toClone_example1').metalClone({
			btnClone 	: '.btn_example1',
			copyValue 	: false
		});
```
		
		
**2. Example 2 - Clone element [immediate after last element] with value copied.**

``` html
		<!-- **HTML** -->
		<div class="toClone_example2">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
		<div class="container_body">			
        	<input type="button" class="btn_example2" value="Create New Copy">
        </div>
```
``` javascript	
		//**JS**
		// This selector applied for element/container that want to clone
		$('.toClone_example2').metalClone({
			btnClone 	: '.btn_example2',
			copyValue 	: true
		});
```

**3.	Example 3 - Clone element [before first element] without value copied.**

``` html
		<!-- **HTML** -->
    	<div class="toClone_example3">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
		<div class="container_body">			
        	<input type="button" class="btn_example3" value="Create New Copy">
        </div>
```
``` javascript	
		//**JS**
		// This selector applied for element/container that want to clone
    	$('.toClone_example3').metalClone({
			btnClone 	: '.btn_example3',
			position	: 'before',
			copyValue 	: false
		});
```

**4.	Example 4 - Using Button and select by class name.**

``` html
		<!-- **HTML** -->
    	<div class="toClone_example4">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
		<div class="container_body">			
        	<input type="button" class="btn_example4" value="Create New Copy">
        </div>
```
``` javascript
		//**JS**
		// This selector applied for element/container that want to clone
    	$('.toClone_example4').metalClone({
			btnClone 	: '.btn_example4',
			position	: 'before',
			copyValue 	: true
		});
```

**5.	Example 5 - Clone element [immediate after last element] with specified the number of element to copy.**

``` html
		<!-- **HTML** -->
    	<div class="toClone_example5">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
		<div class="container_body">			
        	<input type="button" class="btn_example5" value="Create New Copy">
        </div>
```
``` javascript
		//**JS**
		// This selector applied for element/container that want to clone
    	$('.toClone_example5').metalClone({
			btnClone 		: '.btn_example5',
			position		: 'after',
			numberToClone 	: 5
		});
```

**6.	Example 6 - Using Button and select by multiple selector.**

``` html
		<!-- **HTML** -->
		<div class="toClone_example6">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
		<div class="container_body">			
        	<input type="button" class="btn_example6" value="Create New Copy">
        </div>
        <div class="toClone_example6_destination">
			<span> Please place the newly cloned element here</span>
		</div>
```
``` javascript
		//**JS**
		// This selector applied for element/container that want to clone 
		$('.toClone_example6').metalClone({
			btnClone 			: '.btn_example6',
			position			: 'after',
			numberToClone 		: 5,
			destination 		: '.toClone_example6_destination'
		});
```

**7.	Example 7 - Clone element [immediate after last element] with specified the number of element to copy and the destination to place the newly cloned element with unique ID(s).**

``` html
		<!-- **HTML** -->
		<div class="toClone_example7">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
		<div class="container_body">			
        	<input type="button" class="btn_example7" value="Create New Copy">
        </div>
        <div class="toClone_example7_destination">
			<span> Please place the newly cloned element here</span>
		</div>
```
``` javascript
		//**JS**
		// This selector applied for element/container that want to clone 
		$('.toClone_example7').metalClone({
			btnClone 			: '.btn_example7',
			position			: 'after',
			numberToClone 		: 5,
			destination 		: '.toClone_example7_destination',
			ids					: ['select']
		});
```

**8.	Example 8 - Clone element [immediate after last element] without specified clone button(will create new one with name "Create New Element").**

``` html
		<!-- **HTML** -->
		<div class="toClone_example8">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
```
``` javascript
		//**JS**
		// This selector applied for element/container that want to clone 
		$('.toClone_example8').metalClone({
			position			: 'after'
		});
```

**9.	Example 9 - Clone element [immediate after last element] with specified clone and remove button name.**

``` html
		<!-- **HTML** -->
		<div class="toClone_example9">
			<input type="text">
			<select id="m">
				<option value="">--Please Select</option>
				<option value="Hello">Hello</option>
			</select>
		</div>
```
``` javascript
		//**JS**
		// This selector applied for element/container that want to clone 
		$('.toClone_example9').metalClone({
			position			: 'after',
			btnRemoveText		: 'Please delete me from this',
			btnCloneText		: 'Wow, make another copy'
		});
```

# Demo Page #
-	**[Click ME](https://metallurgical.github.io/metalClone "Jquery Metal Clone")**

# Dependencies #
-	Jquery Library either minified or development.

# Support #
-	norlihazmey89@gmail.com
-	If you found a bug or something technical problem, please create an issues.