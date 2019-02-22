<?php
header("Content-type: application/json");

$info = [["Video 1","http://techslides.com/demos/sample-videos/small.mp4", "Mechanical spinner construction.", 0], 
["Video 2", "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4", "Funny bunny video.", 1], 
["Video 3", "http://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4", "The earth. The spin. The everything.", 2], 
["Video 4", "http://samples.mplayerhq.hu/MPEG-4/fridayafternext_http.mp4", "Blank", 3], 
["Video 5", "http://prod.ninu.s3.amazonaws.com/encoded_files/795402/web_small_h264_795402.mp4", "Snowy mountains and green woods.", 4], 
["Video 6", "http://prod.ninu.s3.amazonaws.com/encoded_files/795369/web_small_h264_795369.mp4", "Above the clouds.", 5]];

$info = json_encode($info);

sleep(5);

echo $info;