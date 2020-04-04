 //ajax交互函数
 function ajax(option) {
     //默认对象
     var def = {
             type: 'get',
             url: '',
             sucess: function(data, xhr) {},
             error: function(err, xhr) {},
             Data: {},
             ContentType: 'application/x-www-form-urlencoded'
         }
         //Object.assign覆盖属性
     Object.assign(def, option);
     //创建个拼接get参数的变量
     var parmas = '';
     if (def.type == 'get') {
         for (var att in def.Data) {
             parmas += att + '=' + def.Data[att] + '&';
         }
         parmas = parmas.substr(0, parmas.length - 1);
     }
     //建立ajax对象
     var xhr = new XMLHttpRequest();
     //设置ajax
     xhr.open(def.type, option.url + '?' + parmas);

     //发送请求
     if (def.type == 'post') {
         xhr.setRequestHeader('Content-Type', def.ContentType);
         if (def.ContentType == 'application/json') {
             xhr.send(JSON.stringify(def.Data));

         } else {
             xhr.send(parmas);
         }

     } else {
         xhr.send();
     }
     xhr.onload = function() {
         let res = xhr.responseText

         //getRequestHeader 获取服务器传来的数据类型
         var contenttype = xhr.getResponseHeader('Content-Type');
         //为json类型 则将json字符串转化成对象  如果不是 直接输出当前字符串
         if (contenttype.includes('application/json')) {
             res = JSON.parse(res);
         }

         //根据http状态码
         if (xhr.status == 200) {
             def.sucess(res);
         } else {
             def.error(res);
         }

     }

 }