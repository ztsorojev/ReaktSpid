var clickedTime; var createdTime; var reactionTime;
		
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeFigure() {

    //time to wait before figure appears
    var time = Math.random();
    time = time*1000;


    //show figure: first decide if square or circle, then decide on random position
    setTimeout(function() {
        if (Math.random()>0.5) {
            document.getElementById("box").style.borderRadius="100px"; //becomes a circle
        } else {
            document.getElementById("box").style.borderRadius="0px";   //become a square
        }

        var top=Math.random();
        top= 250 * top;

        var left=Math.random();
        left= 800 * left;

        document.getElementById("box").style.top=top+"px";
        document.getElementById("box").style.left=left+"px";

        document.getElementById("box").style.backgroundColor=getRandomColor();

        document.getElementById("box").style.display="block";

        createdTime = Date.now();
    }, time);       //will excute the function after 'time' ms
}

//call function makeFigure()
makeFigure();

document.getElementById("box").onclick=function() {

    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime)/1000;    //we divide by 1000 to get seconds

    document.getElementById("time").innerHTML = reactionTime;

	this.style.display='none';		//"this" is equivalent to "document.getElementById("box")"

    makeFigure();
}