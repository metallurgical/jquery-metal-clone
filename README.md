# Jquery Metal Clone Plugin



Simple plugin to clone DOM element. 


# Features #



- Easy to implement together with HTML markup.
- Enable placing the cloned element into defined destination.
- Specified position cloned element.
- Clone the element as many as you want.
- With unique ID(s) auto increment.



# Current Stable #



-	[**V1.0.0**](https://github.com/metallurgical/jquery-metal-clone/archive/v1.0.0.zip "V1.0.0")



# How To Install #



Installation is so very easy. Download the current stable and see the example in Demo page. Here is the manual step to follow :

1. Put `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>` inside Head Section(using latest version).
2. Place `<script src="jquery.metalClone.js"></script>` after jQuery library.
3. Done!!

# Available Options #



Configurations available for this plugin :

1. **destination : false** Specified the destination to placed the cloned element, if not specified, the cloned element will place after last element or before depend on the position option. Destination should be container.
   
	- eg : `<div id="myDestination">Text here(if have)</div>`.. 
	

2. **position	: 'after'** : Specified the position to place the cloned element. Only available for **before** and **after**.

3. **numberToClone : 1** : Number of clone element want to clone(Integers only)
4. **ids : []** : Any HTML tag element that have an ID to make these ID(s) unique.
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


**1. Example 1 - Using checkbox and select by class name.**

         
		
``` html
		<!-- **HTML** -->
		<input type="checkbox" class="inputCheck">
		<input type="checkbox" class="inputCheck">
		<input type="checkbox" class="inputCheck">
```
``` javascript	
		//**JS**
		// This selector applied for checkbox with id name checkAll_example1
		$('#checkAll_example1').metalCheckAll({
    		target : ['.inputCheck']
 		});
```
		
		
**2.	Example 2 - Using checkbox and select by element name.**

``` html
		<!-- **HTML** -->
		<input type="checkbox" name="example2">
    	<input type="checkbox" name="example2">
    	<input type="checkbox" name="example2">
```
``` javascript	
		//**JS**
		// This selector applied for checkbox with id name checkAll_example2
		$('#checkAll_example2').metalCheckAll({
			target : ['input[name=example2]']
		});
```

**3.	Example 3 - Using checkbox and select by ID name.**

``` html
		<!-- **HTML** -->
    	<input type="checkbox" name="example3" id="example3">
```
``` javascript	
		//**JS**
		// This selector applied for checkbox with id name checkAll_example3
    	$('#checkAll_example3').metalCheckAll({
			target : ['#example3']
		});
```

**4.	Example 4 - Using Button and select by class name.**

``` html
		<!-- **HTML** -->
    	<input type="checkbox" class="example4">
    	<input type="checkbox" class="example4">
    	<input type="checkbox" class="example4">
```
``` javascript
		//**JS**
		// This selector applied for button with id name checkAll_example4
    	$('#checkAll_example4').metalCheckAll({
    		target : ['.example4'],
    		btnValueChecked : 'Click ME', // Button Text before check
    		btnValueUnChecked : 'UnCheck Me' // Button text after check
    	});
```

**5.	Example 5 - Using Button and select by input type checkbox(this will find all checkbox on page).**

``` html
		<!-- **HTML** -->
    	<input type="checkbox">
    	<input type="checkbox">
    	<input type="checkbox">	
```
``` javascript
		//**JS**
		// This selector applied for button with id name checkAll_example5
    	$('#checkAll_example5').metalCheckAll({
    		target : ['input[type=checkbox]'],
    		btnValueChecked : 'Click ME', // Button Text before check
    		btnValueUnChecked : 'UnCheck Me' // Button text after check
    	});
```

**6.	Example 6 - Using Button and select by multiple selector.**

``` html
		<!-- **HTML** -->
		<div class="container_body">
			<input type="checkbox" name="a">
			<input type="checkbox" name="a">
			<input type="checkbox" name="a">			
		</div>
		<div class="container_body">
			<input type="checkbox" class="example6">
			<input type="checkbox" class="example6">
			<input type="checkbox" class="example6">			
		</div>
		<div class="container_body">
			<input type="checkbox" id="example6">
			<input type="checkbox" data-type="example6">
			<input type="checkbox" data-type="example6">			
		</div>
```
``` javascript
		//**JS**
		// This selector applied for button with id name #checkAll_example6 
		$('#checkAll_example6').metalCheckAll({
			target : ['input[name=a]','.example6','#example6','input[data-type="example6"]'], // arrays value
			btnValueChecked : 'Click ME', // Button Text before check
			btnValueUnChecked : 'UnCheck Me' // Button text after check
		});
```

# Dependencies #
-	Jquery Library either minified or development.
