<!DOCTYPE html>
<html>
<head>
	<title>Aussie Games</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
<?php

?>
<body>
	<nav id="navbar">
		<a class="navLink" href="index.html"><div class="navItem">AUG</div></a>
		
		<a class="navLink" href="index.html#aboutAnchor"><div class="navItem">About</div></a>
		<a class="navLink" href="index.html#joinAnchor"><div class="navItem">Join</div></a>
		<a class="navLink" href="index.html#contactAnchor"><div class="navItem">Contact</div></a>
		<a class="navLink" href="uc.html"><div class="navItem">User Center</div></a>
		<img src="assets/images/logo.webp" class="navImg">
	</nav>
	<div class="explainerBox">
	<h1 id="firstElement">User Center</h1>
	<div class="explainerBoxP">
		<p>Here you can login to your User Center, and acess resources for you favourite games.</p><br>
		<form onsubmit="return false" method="POST">
			<label> <p>Username</p>
			<input type="text" name="UN">
			</label><br>
			<label> <p>Password</p>
			<input type="password" name="PW">
			</label><br><br>
			<button id="submit"><p>Submit</p></button>
		</form>
	</div>
	</div><br>
<div><p>Brought to you by Aussie Games, &#169; AUG 2020</p></div>
<script type="text/javascript" src="scroll.js"></script>
<script type="text/javascript" src="script.js"></script>
</body>
</html>