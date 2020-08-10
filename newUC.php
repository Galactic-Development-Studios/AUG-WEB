<?php
$url = 'http://ftp.nicolashanna.altervista.org/AUGLogin/AddUser.php';
$http = new HttpRequest($url, HttpRequest::METH_POST);
$http->setOptions(array(
    'timeout' => 10,
    'redirect' => 4
));
$http->addPostFields(array(
	'secret_key' => '1234',
    'UserName' => 'teddy9264',
    'Password' => '8558',
	'FLGroup' => '0',
    'GMGroup' => '0',
	'IFGroup' => '0',
    'KSPGroup' => '0',
	'MCGroup' => '0',
    'RBGroup' => '0',
	'SMGroup' => '0',
    'StaffGroup' => '0',
));
$response = $http->send();
echo $response->getBody();
?>