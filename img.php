<?php
    
if (!isset($_GET["url"])) {
    die('Unknown action!');
}else {
    $url = base64_decode($_GET["url"]);
}

$imgInfo = getimagesize($url);

if (stripos($imgInfo['mime'], 'image/') === false) {
    die('Invalid image file');
}

header("Content-type: ".$imgInfo['mime']);
readfile($url);

?>