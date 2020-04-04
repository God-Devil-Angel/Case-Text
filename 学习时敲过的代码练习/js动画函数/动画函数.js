var div = document.querySelector('div');
var span = document.querySelector('span');
var btn = document.querySelectorAll('button');



function farme(obj, target, callback) {

    clearInterval(obj.timer);
    obj.timer = setInterval(function() {

        if (obj.offsetLeft == target) {
            if (callback) {
                callback();
            }
            clearInterval(obj.timer);
        }
        //结束时速度慢点
        var sped = (target - obj.offsetLeft) / 10;
        var sped = sped < 0 ? Math.floor(sped) : Math.ceil(sped);
        obj.style.left = obj.offsetLeft + sped + 'px';


    }, 30);

}
farme(div, 300, function() {
    div.style.backgroundColor = 'green';
});
btn[0].addEventListener('click', function() {
    farme(span, 500);
})
btn[1].addEventListener('click', function() {
    farme(span, 800)
})