<?php   
    show_source(__FILE__);
    $GET['hello']="123";
    echo $GET['hello'];
    $page=$_GET['page'];
    while (strstr($page,"php://")){
        $page=str_replace("php://","",$page);
    };
    include($page);
?>

/repeat