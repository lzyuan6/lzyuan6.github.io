var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("⁽⁽ଘ( ˙꒳˙ )ଓ⁾⁾", "(՞•Ꙫ•՞)ﾉ???", "─=≡Σ((( つ•̀ 3 •́)つ宝", "(❀｣╹□╹)｣*･", "ヾ(´〇｀)ﾉ♪♪♪", "✧*｡٩(ˊᗜˋ*)و✧*｡", "(⃔* 'ㅅ'*)⃕", "跳段街舞 ጿ ኈ ቼ ዽ ጿ ኈ ", "(งᵒ̌皿ᵒ̌)=3⁼³₌₃⁼³₌₃⁼³₌₃欧拉欧拉", "(σ;*Д*)=3⁼³₌₃⁼³₌₃⁼³₌₃木大木大", "٩(*  ఠO ఠ)=3⁼³₌₃⁼³₌₃⁼³₌₃嘟啦啦啦啦", "٩(◣д◢)=3⁼³₌₃⁼³₌₃⁼³₌₃阿哩阿哩");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "#FF0000"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            3000,
            function () {
                $i.remove();
            });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}