# Jquery Metal Clone Plugin



Simple plugin to clone DOM element. 


# Features #



- Easy to implement together with HTML markup.
- Enable placing the cloned element into defined destination.
- Specified position cloned element.
- Clone the element as many as you want.
- With unique ID(s) auto increment.
- Clone table rows even column also.
- Limit the number of cloned element into specified value.



# Current Stable #



-	[**V1.2.0**](https://github.com/metallurgical/jquery-metal-clone/archive/1.2.0.zip "V1.2.0")



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
9.	**cloneLimit** : **'infinity'** : Accept integer number only. This option limit the number of cloned element. After reach the value provided, user no longer can clone element unless remove cloned element.


# Available Function Callback #
1. **onStart : function( e ) { }**

	OnStart callback triggered at very first plugin Initialization. At here you can setup any behaviours.  Accept one argument `e`, stand for current element to clone.

2. **onClone : function( e, obj ) { }**

	OnClone callback triggered at when clone button was clicked. Accept two arguments `e` and `obj` indicated for current element to clone and object itself respectively. This callback trigger before the cloning element occured. At this time you can check for element that want to clone or anything. At here, the only function can be invoked is `.cancelClone(true or false)`. This function will stop current progress of cloning element if called otherwise not and only available on this callback. `Eg usage: obj.cancelCloned( true );`, default is false. 


3. **onComplete : function( e, obj, clonedElem ) { }**

	OnComplete callback were triggered when cloning process of element done/complete/finish.
     - e : element to clone
     - obj : object itself
     - clonedElem : cloned element.
    
    At here, the only function can be invoked is `.removeCloned(true or false)`. This function will remove cloned element and only available on this callback. `Eg usage: obj.removeCloned( true );`, default is false.
    When `obj.removeCloned( true )` is called, `onClonedRemoved` callback also triggered.

4. **onClonedRemoved : function( removedElem ) { }**

	onClonedRemoved callback triggered after remove button was clicked AND element is completely removed from page. Accept one parameter `removedElem`, which is the element that are being removed.


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

**10.	Example 10 - Clone element with limit element to clone.**

``` html
		<!-- **HTML** -->
		<div class="toClone_example10">
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
		$('.toClone_example10').metalClone({
			cloneLimit : 3
		});
```

**11.	Example 11 - Clone element with limit element to clone and number of element to clone[must be noted that, the limit specified must be higher than number of element to clone.**

``` html
		<!-- **HTML** -->
		<div class="toClone_example11">
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
		$('.toClone_example11').metalClone({
			cloneLimit : 3,
			numberToClone : 2
		});
```

**12.	Example 11 - Event work with table rows and column to clone.**

``` html
		<!-- **HTML** -->
		<div class="toClone_example12">
			<table border="1">
				<tr>
					<td>No.</td>
					<td>Name</td>
					<td>Ic</td>
					<td>Gender</td>
				</tr>
				<tr>
					<td>a</td>
					<td>b</td>
					<td>c</td>
					<td>d</td>
				</tr>
				<tr class="toClone_example12">
					<td><input type="text" size="5" id="kk"/></td>
					<td><input type="text" size="5"/></td>
					<td><input type="text" size="5"/></td>
					<td><input type="text" size="5"/></td>
				</tr>
			</table>
		</div>
```
``` javascript
		//**JS**
		// This selector applied for element/container that want to clone 
		$('.toClone_example12').metalClone({
			cloneLimit : 3
		});
```

# Demo Page #
-	**[Click ME](https://metallurgical.github.io/metalClone "Jquery Metal Clone")**

# Dependencies #
-	Jquery Library either minified or development.

# Support #

-	If you found a bug or something technical problem, please open an issues.
-	IF the example/usage above did't clear enough, leave me some note by sending email at **norlihazmey89@gmail.com**