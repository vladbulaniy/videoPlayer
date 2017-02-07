
function checkPlaying() {
    // video[0].play();
    // console.dir(video[0]);
    // console.log(video[0].play);
    if (video[0].paused){
        play1();
    } else {
        // video[0].play();
        pause();
    }
}
var liArray = document.getElementsByTagName('li');
var menu = document.getElementsByTagName('ul');
var path = liArray[0].getAttribute('data-src');
var video = document.getElementById('video');
var objVideo = {
    path: 'video/tt.mp4',
    i:0
}

for (let i = 0; i < liArray.length; i++){
    liArray[i].onclick = function(){
        objVideo.path = this.getAttribute('data-src');
        objVideo.i = i;
        play();

    }
}



function play() {
    video.src = objVideo.path;
    video.play();
    // document.getElementById('play').innerHTML = '&#921; &#921;'
}
function pause() {
    video.pause();
    // document.getElementById('play').innerHTML = '&#9658;'
}
function stop() {
    video.pause();
    video.currentTime = 0;
}

function next() {
    objVideo.i++;
    loop(objVideo.i);
}

function prev() {
    objVideo.i--;
    loop(objVideo.i);
}

function loop(j){
    if( (j > 0) && (j < liArray.length) ){
        objVideo.path = liArray[j].getAttribute('data-src');
    }else{
        objVideo.i = 0;
        objVideo.path = liArray[objVideo.i].getAttribute('data-src');
    }
    play();
}

video.onended = function () {
    objVideo.i++;
    loop(objVideo.i);
}