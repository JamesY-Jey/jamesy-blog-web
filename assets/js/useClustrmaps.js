/**
 * @description clustrmaps插件地图，侧边栏加载
 * https://clustrmaps.com/
 */

// 加载按钮，html结构在widget.yml中侧边栏定义
var sheet = `<style type="text/css">#clustrmapsView{text-align:center;overflow:hidden;position:relative;}.clustrmapsView_tips{margin-top:10px;font-size:12px;color:#808080;line-height:1.5;}.clustrmapsView_button{background:#ffdbdb;border:none;padding:10px 20px;display:inline-block;font-size:15px;font-weight:600;min-width:120px;text-transform:uppercase;cursor:pointer;transform:skew(-21deg);}.clustrmapsView_button span{display:inline-block;transform:skew(21deg);}.clustrmapsView_button::before{content:'';position:absolute;top:0;bottom:0;right:100%;left:0;background:rgb(20,20,20);opacity:0;z-index:-1;transition:all 0.5s;}.clustrmapsView_button:hover{color:#fff;}.clustrmapsView_button:hover::before{left:0;right:0;opacity:1;}</style>`;

document.querySelector('head').insertAdjacentHTML('beforeend', sheet);

/** 点击加载clustrmaps */
window.loadClustrmaps = function (e) {
  // 清除clustrmapsView的内容,并加载loading图
  const clustrmapsView = document.getElementById('clustrmapsView');
  const loadingElement = document.createElement('img');
  loadingElement.src = '/assets/img/loading.gif';
  loadingElement.setAttribute('style', 'width:100%;transform:scale(1.8) translateY(-15px);position:absolute;inset:0;');
  clustrmapsView.setAttribute('style', 'min-height: 140px;');
  clustrmapsView.innerHTML = '';
  clustrmapsView.appendChild(loadingElement);

  // 手动加载jq，避免clustrmaps内置加载的jq速度过慢
  var jqLibUrl = 'https://npm.elemecdn.com/jquery@1.12.4/dist/jquery.min.js';
  window.getScript(jqLibUrl).then(() => {
    window.clustrm_jq = $ = jQuery;
    // 创建script标签，并执行clustrmaps
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('id', 'clustrmaps');
    scriptElement.src = '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=a&t=tt&d=AmizuebkmYo3rRv-pxyo1YnBEaGxQYIKoswkaJA82pU';
    clustrmapsView.appendChild(scriptElement);
  });
}
