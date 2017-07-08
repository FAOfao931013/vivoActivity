/*eslint-disable */
$(function() {
    //按钮
    var btnShow = function() {
        $('.btn-wrap').animate({
                'opacity': '1',
            },
            600,
            function() {
                $('.btn-wrap img').addClass('heart-pound')
            });
    };

    //下拉标语
    var tipDownShow = function() {
        $('.tip-down').animate({
                'opacity': '1',
            },
            600,
            function() {
                btnShow();
            });
    };

    //第三段文字第二行
    var tip3Text2Shpw = function() {
        $('.tip3-text2').show().addClass('write-word-5');
        setTimeout(function() {
            tipDownShow();
        }, 1800)
    };

    //第三段文字第一行
    var tip3Text1Shpw = function() {
        $('.tip3-text1').show().addClass('write-word-4');
        setTimeout(function() {
            tip3Text2Shpw();
        }, 1800)
    };

    //第三个对话框
    var tip3ImgShow = function() {
        $('.tip3-img').show();
        setTimeout(function() {
            tip3Text1Shpw();
        }, 1000)
    };

    //第三根线
    var line3Show = function() {
        $('.line3').animate({
                'opacity': '1',
            },
            600,
            function() {
                tip3ImgShow();
            });
    };

    //第二段文字第二行
    var tip2Text2Show = function() {
        $('.tip2-text2').show().addClass('write-word-3');
        setTimeout(function() {
            line3Show();
        }, 1800)
    };

    //第二段文字第一行
    var tip2Text1Show = function() {
        $('.tip2-text1').show().addClass('write-word-2');
        setTimeout(function() {
            tip2Text2Show();
        }, 1800)
    };

    //第二个对话框
    var tip2ImgShow = function() {
        $('.tip2-img').show();
        setTimeout(function() {
            tip2Text1Show();
        }, 1000)
    };

    //第二根线
    var line2Show = function() {
        $('.line2').animate({
                'opacity': '1',
            },
            600,
            function() {
                tip2ImgShow();
            });
    };

    //第一段文字
    var tip1Show = function() {
        $('.tip1').show().addClass('write-word-1');
        setTimeout(function() {
            line2Show();
        }, 1800)
    };

    //第一个对话框
    var tip1ImgMove = function() {
        $('.tip1-img').show();
        setTimeout(function() {
            tip1Show();
        }, 1000)
    };

    //第一根线
    var line1Show = function() {
        $('.line1').animate({
                'opacity': '1',
            },
            600,
            function() {
                tip1ImgMove();
            });
    };

    //横幅文字
    var flagTextShow = function() {
        $('.flag img').animate({
                'opacity': '1',
            },
            600,
            function() {
                line1Show();
            });
    };

    //vivo横幅
    var flagMove = function() {
        $('.flag').animate({
                'right': '0rem',
            },
            800,
            function() {
                flagTextShow();
            });
    };

    //最顶上图片
    var topImgMove = function() {
        $('.topimg').animate({
                'top': '0rem',
            },
            800,
            function() {
                flagMove();
            });
    };

    topImgMove();
});