var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);

        this.ul = this.main.querySelector('ul');


        this.add = this.main.querySelector('.tabadd');
        this.adcon = this.main.querySelector('.tabscon');

        this.init();
    }

    //初始化  给按钮绑定事件
    init() {
        this.upData();
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].setAttribute('index', i);
            this.lis[i].onclick = this.toggleTap;
            this.dele[i].onclick = this.removeTap;
            this.spans[i].ondblclick = this.editeTap;
            this.section[i].ondblclick = this.editeTap;

        }

        //给加号按钮绑定事件
        this.add.onclick = this.addTap;




    }


    //获取li和secition
    upData() {
            this.lis = this.main.querySelectorAll('li');
            this.section = this.main.querySelectorAll('section');
            this.dele = this.main.querySelectorAll('.icon-guanbi');
            this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
        }
        //切换
    toggleTap() {
            that.paiTa();
            this.className = 'liactive';
            that.section[this.getAttribute('index')].className = 'conactive';

        }
        //排他思想
    paiTa() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.section[i].className = '';

        }
    }

    //添加
    addTap() {
            that.paiTa();
            //用 insertAdjacentHTML
            var random = Math.random();
            var li = " <li class='liactive'><span>新选项</span><span class='iconfont icon-guanbi'></span></li>";
            var section = "<section class='conactive'>测试" + random + "</section>";


            that.ul.insertAdjacentHTML('beforeend', li);
            that.adcon.insertAdjacentHTML('beforeend', section);
            that.init();

        }
        //删除
    removeTap(e) {
        e.stopPropagation();
        var index = this.parentNode.getAttribute('index');
        console.log(index);
        that.lis[index].remove();
        that.section[index].remove();
        that.init();

        if (document.querySelector('.liactive')) return;
        index--;
        that.lis[index] && that.lis[index].click();





    }
    editeTap() {
        var str = this.innerHTML;

        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />'
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件  不需要鼠标离开操作
                this.blur();
            }
        }

    }


}
new Tab("#tab");