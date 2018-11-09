$(document).ready(function () {

    var audio = $('#audioTrack')[0];
    console.log(audio);

    $playBtn = $('#audio-play');
    $pauseBtn = $('#audio-pause');
    $audioControl = $('[data-type="audio-control"]');

    setTimeout(initAudioPlayer, 1600);

    // initAudioPlayer(); //Если не нужен таймаут (на включение музыки) при загрузке страницы, то закомментировать строку выше, эту соотв. раскомментировать.

    function initAudioPlayer() {
        $pauseBtn.parent().show();
        audio.play();
        audio.loop = true;


        $audioControl.click(function () {

            if (audio.paused) {
                audio.play();
                $playBtn.parent().hide();
                $pauseBtn.parent().show();
                console.log('playing now');
            } else {
                audio.pause();
                $pauseBtn.parent().hide();
                $playBtn.parent().show();
                console.log('paused now');

            }
        })

    }

    // audio.play();


});
