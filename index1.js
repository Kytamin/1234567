function nooption(){
    x = document.getElementById("gow").getAttribute("src")
    y = x.charAt(0);
    y = +y + 1;
    if(y>7){
        y=1
    }
    x = y +x.substring(1);

    document.getElementById("gow").src = x;

}
