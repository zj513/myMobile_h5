~(function (deviceW) {
    var desW = 320,
        winW = document.documentElement.clientWidth,
        oMain = document.querySelector('.main');
    if (winW > 640) {
        oMain.style.width = 640 + 'px';
        oMain.style.margin = '0 auto';
        document.documentElement.style.fontSize = '200px';
        return;
    }
    document.documentElement.style.fontSize = winW / desW * 100 + 'px';
})(640);

var mySwiper = new Swiper(".swiper-container",{
    direction : "vertical",
    loop:true,
    pagination : '.swiper-pagination',
    onSlideChangeEnd :function(swiper){
        var slideAry = swiper.slides;
        var trueSlideNum = slideAry.length-2;
        var lastNum =  trueSlideNum+1;
        var curIndex = swiper.activeIndex;
        [].forEach.call(slideAry,function(item,index){
            item.id = null;
            if(curIndex == index){
                switch(curIndex){
                    case 0 :
                        item.id = "page"+trueSlideNum;
                        break;
                    case lastNum :
                        item.id  = "page1";
                        break;
                    default :
                        item.id = "page"+curIndex;
                }
            }
        })
    }
});

~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');
    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);

    function controlMusic() {
        musicAudio.volume = 0.5;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();