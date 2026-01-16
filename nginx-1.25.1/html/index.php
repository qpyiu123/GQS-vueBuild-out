<?php   
    $page=0;
    show_source(__FILE__);
    echo $GET['hello'];
    $page=$_GET['page'];
    while (strstr($page,"php://")){
        $page=str_replace("php://","",$page);
    };
    include($page);
?>