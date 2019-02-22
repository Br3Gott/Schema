<?php

$url = "http://www.novasoftware.se/ImgGen/schedulegenerator.aspx?";
    
$i=0;
    
foreach ($_GET as $key => $value) {
    
    if ($i >= 1) {
        $url = $url."&".$key."=".$value;
        $i++;
    }else {
        $url = $url.$key."=".$value;
        $i++;
    }
}
    
if (!$url) {
    die('Please, inform URL');
}

$imgInfo = getimagesize( $url );

if (stripos($imgInfo['mime'], 'image/') === false) {
    die('Invalid image file');
}

header("Content-type: ".$imgInfo['mime']);
readfile($url);

?>