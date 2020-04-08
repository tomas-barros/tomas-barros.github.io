var modlib = document.getElementById("libs");
var butlib = document.getElementById("libbtn");
var modcred = document.getElementById("modcred");
var butcred = document.getElementById("credbtn");
var modal = document.getElementsByClassName("modal");
var modopen = 0;
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

butlib.onclick = function() 
{
    modlib.style.display = "block";
    modopen = 1;
}

butcred.onclick = function()
{
    modopen = 2;
    modcred.style.display = "block";
}

span.onclick = function()
{
    modlib.style.display = "none";
    modopen = 0;
}

span2.onclick = function()
{
    modcred.style.display = "none";
    modopen = 0;
}

window.onclick = function(event)
{
    if (event.target == modlib && event.target == modcred) {
        if (modopen == 1)
        {
            modlib.style.display = "none";
        }
        else if (modopen == 2)
        {
            modcred.style.display = "none";
        }
    }
}
