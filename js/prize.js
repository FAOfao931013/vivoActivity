/*eslint-disable */
$(function() {
    //是否已经抽过奖
    var isPrize = false;

    var placeArr = ['.kechengqu', '.qujiangqu', '.jiangshanshi', '.changshanxian', '.kaihuaxian'];

    //禁止滚动
    var bodyOverHidden = function() {
        $('body').addClass('overflow-hidden');
    };

    //允许滚动
    var bodyOverNone = function() {
        $('body').removeClass('overflow-hidden');
    };

    //显示弹框背景及禁止滚动
    var showMask = function() {
        $('.theme_popover_mask').fadeIn(100);
        bodyOverHidden();
    };

    //取消弹框
    $('.theme_popover_mask,.layer-ok,.layer-bg-three').on('click', function() {
        $('.theme_popover_mask').fadeOut(100);
        $('.theme_popover').fadeOut(200);
        bodyOverNone();
    });

    //阻止冒泡
    $('.layer-three-top,.layer-three-main').on('click', function(e) {
        e.stopPropagation();
    });

    //显示未注册弹窗
    var shouldRegister = function() {
        showMask();
        $('.should-register').fadeIn(200);
    };

    //显示已注册弹窗
    var hadRegister = function() {
        showMask();
        $('.had-register').fadeIn(200);
    };

    //模拟placeholder
    $('.phone').on('focus', function(e) {
        if($(this).val() == '手机号码') {
            $(this).val('');
        }
    });
    $('.phone').on('input propertychange', function(e) {
        $(this).val(e.target.value);
    })

    //一天一次弹窗
    var oneDay = function() {
        showMask();
        $('.one-day').fadeIn(200);
    };

    //奖品展示弹窗
    var placeDetail = function() {
        showMask();
        $('.place-detail').fadeIn(200);
    };

    //查看奖品点击事件
    $('.layerButton').on('click', function() {
        placeDetail();
    })

    //抽中服务卡和流量券
    var cardFlowText = function(type, text) {
        if (type === 'card') {
            $('.tip-cf').addClass('layer-bg-two');
            $('.card-flow').prepend('恭喜您获得一张' + '<br />' + text);
        } else {
            $('.tip-cf').addClass('layer-bg-two');
            $('.card-flow').prepend('恭喜您获得' + text);
        }
        showMask();
        $('.tip-cf').fadeIn(200);
    }

    //特等奖和一等奖
    var giftPlus = function(prize, text) {
        $('.exchange-place .three-text p').append(text);
        $('.exchange-place .three-text h2').append(prize);
        showMask();
        $('.exchange-place').fadeIn(200);
    };

    //谢谢参与
    var thankYou = function() {
        $('.tip-cf').addClass('layer-bg-two');
        $('.card-flow').prepend('谢谢参与' + '<br>');
        showMask();
        $('.tip-cf').fadeIn(200);
    }

    //选择地址后其他地址禁用
    placeArr.forEach(function(p) {
        $(p).change(function() {
            var that = $(this);
            if(that.val() === '兑换实体店') {
                $.each(placeArr, function(index, el) {
                    $(el).attr('disabled', false);
                });
            } else {
                $.each(placeArr, function(index, el) {
                    if (el.substr(1) !== that.attr('class')) {
                        $(el).attr('disabled', true);
                    }
                });
            }
        });
    });

    //中奖未选地址
    var noPlace = function() {
        showMask();
        $('.no-place').fadeIn(200);
        $('.no-place').addClass('z-index-99999');
    };

    $('.no-place-ok').on('click', function() {
        $('.no-place').fadeOut(200);
    });

    $('.three-main-form .layer-submit').on('click', function() {
        var openNoPlace = true;

        $.each(placeArr, function(index, el) {
            if ($(el).val() !== '兑换实体店') {
                openNoPlace = false;
            };
        });

        if (openNoPlace) {
            noPlace();
        }
    });

    //奖品没了
    var prizeOver = function() {
        showMask();
        $('.prize-over').fadeIn(200);
    };

    //转盘处理
    var rotateFn = function(awards, angles, text) {
        $('#rotate').stopRotate();
        $('#rotate').rotate({
            angle: 0,
            animateTo: angles + 720,
            duration: 1000,
            callback: function() {
                switch(awards) {
                    case 0:
                        giftPlus('特等奖', text);
                        break;
                    case 1:
                        giftPlus('一等奖', text);
                        break;
                    case 2:
                        cardFlowText('card', text);
                        break;
                    case 3:
                        thankYou();
                        break;
                    case 4:
                        giftPlus('特等奖', text);
                        break;
                    case 5:
                        giftPlus('一等奖', text);
                        break;
                    case 6:
                        cardFlowText('flow', text);
                        break;
                    case 7:
                        cardFlowText('card', text);
                        break;
                }
            }
        });
    };

    //抽奖按钮点击事件
    $('.pointer').click(function() {
        var item = rnd(0, 7);

        if (isPrize) {
            oneDay();
            return;
        } else {
            isPrize = true;
        }

        switch (item) {
            case 0:
                rotateFn(0, 22.5, 'vivo x9s plus一台');
                break;
            case 1:
                rotateFn(1, 67.5, 'vivo精美礼品一份');
                break;
            case 2:
                rotateFn(2, 112.5, 'vivo专卖店免费服务卡');
                break;
            case 3:
                rotateFn(3, 157.5, '谢谢参与');
                break;
            case 4:
                rotateFn(4, 202.5, 'vivo x9s plus一台');
                break;
            case 5:
                rotateFn(5, 247.5, 'vivo精美礼品一份');
                break;
            case 6:
                rotateFn(6, 292.5, '200M流量券');
                break;
            case 7:
                rotateFn(7, 337.5, 'vivo专卖店免费服务卡');
                break;
        }
    });
});

function rnd(n, m) {
    return Math.floor(Math.random() * (m + 1));
}