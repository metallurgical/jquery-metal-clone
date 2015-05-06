<!DOCYTPE HTML>
	<html>
		<head>
			<title>Example 1</title>
			<script src="jquery.min.js"></script>
			<script src="jquery.metalClone.js"></script>
			<style type="text/css">
				.a{
					border:1px solid green;
					height:auto;
					padding: 5px;
				}

				.dest{
					float : right;
					border:1px solid red;
				}
			</style>
		</head>
	<body>

	<div class="a">

		<div class="toClone">
			<input type="text" id="a">
		</div>
		<!-- <div class="toClone">
			<input type="text" id="a">
		</div>	 -->	
        <input type="button" class="k" value="kk">
	</div>

	<div class="dest">asd
	</div>

	<script>
	$(function(){

		$('.toClone').metalClone({
			btnClone : '.k',
			destination : '.dest'
			//position : 'before'
		});

	});
	</script>
	</body>
	</html>