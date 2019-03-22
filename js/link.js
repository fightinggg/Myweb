// 背景
var random = Math.round( Math.random() * 10 );
if (window.innerWidth>1000){
	document.write('<style>body{ background-image: url(/Myweb/img/'+random+'.jpg);!important;}</style>');
 }


document.writeln("   <link rel=\"stylesheet\" type=\"text/css\"  href=\"/Myweb/css/head.css\">");
document.writeln('<link rel="stylesheet" href="/Myweb/css/head_phone.css" type="text/css" media="screen and (max-width: 999px)">')
document.writeln("   <link rel=\"stylesheet\" type=\"text/css\"  href=\"/Myweb/css/pastebin.css\">");
document.writeln("   <link rel=\"stylesheet\" type=\"text/css\"  href=\"/Myweb/css/code.css\">");


//自动提交
document.writeln("    <script>(function(){var bp = document.createElement('script');var curProtocol = window.location.protocol.split(':')[0];if (curProtocol === 'https'){bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';}else{bp.src = 'http://push.zhanzhang.baidu.com/push.js';}var s = document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp, s);})();</script>")



