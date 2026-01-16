<h1>1243213213</h1>
<?php 
$number=0;
while (1){
    if(substr(md5($number),-6,6)=="18d05e"){
        echo $number;
        break;
    }
    $number++;
    
}
// echo md5($number);
?>