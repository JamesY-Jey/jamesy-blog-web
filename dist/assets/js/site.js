/**
 * site.js
 */

window.getScript = (url, attr = {}) => new Promise((resolve, reject) => {
	const script = document.createElement('script')
	script.src = url
	script.async = true
	Object.entries(attr).forEach(([key, val]) => script.setAttribute(key, val))
	script.onload = script.onreadystatechange = () => {
		if (!script.readyState || /loaded|complete/.test(script.readyState)) resolve()
	}
	script.onerror = reject
	document.head.appendChild(script)
});

// 站点动态 title 是通过 js 监测是否聚焦于当前页面，从而替换标签显示内容。
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});

// 收藏
function AddFavorite(url, title) {
	url = window.location.href || 'https://www.jamesy.cn';
	title = document.title || '哈哈哈哈密瓜的博客';
	try {
		if (window.sidebar && window.sidebar.addPanel) {
			window.sidebar.addPanel(title, url, '');
			alert('感谢宁~！');
		} else if (window.external) {
			window.external.AddFavorite(url, title);
			alert('感谢宁~！');
		} else if (window.opera && window.print) {
			return true;
		}
	} catch (e) {
		alert('收藏失败，\n请使用Ctrl+D进行添加！');
	}
}

/**
 * 全局aplayer
 */
const $aplayer = document.getElementById('aplayer-global');
$aplayer.addEventListener('mouseenter', function () {
	$aplayer.classList.remove('aplayer-narrow');
});
$aplayer.addEventListener('mouseleave', function () {
	$aplayer.classList.add('aplayer-narrow');
});
