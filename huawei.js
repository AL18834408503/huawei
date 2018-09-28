window.onload = function(){
	//购物车下拉
	let cart = document.querySelector('.h-right .gou .cart');
	let cartList = document.querySelector('.h-right .gou .cartList');
	cart.onmouseover = function(){
   		cartList.style.boxShadow = '0 10px 10px 0 rgba(0,0,0,0.3)';
   		cartList.style.height = '250px';
   		cartList.style.display = 'block';
   		cart.style.color = '#CA151D';
   		cart.style.background = '#fff';
   		cart.style.boxShadow = '0 10px 10px 0 rgba(0,0,0,0.2)';  		
   	}
	cart.onmouseout = function(){
   		cartList.style.display = 'none';
   		cartList.style.height = '0';
   		cartList.style.boxShadow = '';
   		cart.style.background = '#fff';
   		cart.style.color = '#A4A4A4';
   		cart.style.boxShadow = '';
   	}
	//下载App下拉
	let xia = document.querySelector('.h-left li .xia');
	let sao = document.querySelector('.h-left li .sao');
	xia.onmouseover = function(){
		xia.style.color = '#CA151D';
		sao.style.boxShadow = '0 10px 10px 0 rgba(0,0,0,0.2)';
		sao.height = '140px';
		sao.style.display = 'block';
	}
	xia.onmouseout = function(){
		xia.style.color = '#A4A4A4';
		sao.style.boxShadow = '';
		sao.height = '0';
		sao.style.display = 'none';
	}
	//更多精彩下拉
	let geng = document.querySelector('.h-left li .geng');
	let duo = document.querySelector('.h-left li .duo');
	geng.onmouseover = function(){
		geng.style.color = '#CA151D';
		duo.style.boxShadow = '0 10px 10px 0 rgba(0,0,0,0.2)';
		duo.height = '140px';
		duo.style.display = 'block';
	}
	geng.onmouseout = function(){
		geng.style.color = '#A4A4A4';
		duo.style.boxShadow = '';
		duo.height = '0';
		duo.style.display = 'none';
	}
	//轮播
	let bannerRight = document.querySelector('.banner-right');
	let imgs = document.querySelectorAll('.banner-right img');
	let circle = document.querySelectorAll('.banner-right .circle ul li');
	console.log(imgs,circle);
	imgs[0].style.opacity = 1;
	circle[0].style.background = '#fff';
	for(let i = 0;i < circle.length;i++){
		circle[i].onmouseover = function(){
			for(let j = 0;j < imgs.length;j++){
				imgs[j].style.opacity = 0;
				circle[j].style.background = 'none';
			}
			imgs[i].style.opacity = 1;
			circle[i].style.background = '#fff';
		}
	}
	//自动轮播
	let num = 0;
	let t = setInterval(move,2000);
	function move(){
		num++;
		if(num == 6){
			num = 0;
		}
		for(let j = 0;j < imgs.length;j++){
			imgs[j].style.zIndex = 1;
			circle[j].style.background = 'none';
		}
		imgs[num].style.zIndex = 2;
		circle[num].style.background = '#fff';
	}
	bannerRight.onmouseover = function(){
		clearInterval(t);
	}
	bannerRight.onmouseout = function(){
		t = setInterval(move,2000);
	}
	//窗口失去焦点暂停时间函数
	window.onblur = function(){
   		clearInterval(t);
   	}
   	window.onfocus = function(){
   		t=setInterval(move,2000);
   	}
   	//侧拉选项卡
   	let banner = document.querySelectorAll('.banner-third');
   	let box = document.querySelectorAll('.banner-p .box');
   	for(let i = 0;i < banner.length;i++){
	   	banner[i].onmouseover = function(){
	   		for(let j = 0;j < box.length;j++){
	   			box[j].style.display = 'none';
	   		}
	   		box[i].style.display = 'block';
	   	}
	   	banner[i].onmouseout = function(){
	   		box[i].style.display = 'none';
	   	}
   	}
   	// 精品推荐
	let backLeft = document.querySelector('.p-goods .backLeft');
	let backRight = document.querySelector('.p-goods .backRight');
	let con = document.querySelector('.p-goods .wrap');
	let width = parseInt(getComputedStyle(con,null).width)/3;
	let Num = 0;
	console.log(width);
//	con.onmouseover = function(){
//		backRight.style.display = 'block';
//		backLeft.style.display = 'block'
//	}
//	con.onmouseout = function(){
//		backRight.style.display = 'none';
//		backLeft.style.display = 'none'
//	}
	backRight.onclick = function(){
		Num++;
		if(Num==3){
			Num = 2;
			return;
		}
		console.log(Num);
		con.style.transform='translateX('+(-width*Num)+'px)';
	}
	backLeft.onclick = function(){
		Num--;
		if(Num == -1){
			Num = 0;
			return;
		}
		console.log(Num);
		con.style.transform='translateX('+(-width*Num)+'px)';
	}
   	//返回顶部
// 	let res = document.body.scrollTop||document.documentElement.scrollTop;
//	console.log(res);
//	let back = document.querySelector('.backTop');
//	back.onclick = function(){
//		animate(document.body,{scrollTop:0});
//		animate(document.documentElement,{scrollTop:0});
//	}
//	window.onscroll = function(){
//		//实时获取页面滚动条的距离
//		let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
//		if(bodytop >= 300){
//			backTop.style.bottom = '20px';
//		}
//		if(bodytop < 50){
//			backTop.style.bottom = '-80px';
//		}
//	}
	let res = document.body.scrollTop||document.documentElement.scrollTop;
	let backTop = document.querySelector('.backTop');
	backTop.onclick = function() {
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}
	window.onscroll = function(){
		//实时获取页面滚动条的距离
		let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
		if(bodytop >= 300){
			backTop.style.bottom = '30px';
		}
		if(bodytop < 50){
			backTop.style.bottom = '-80px';
		}
	}
	//按需加载
//	window.onscroll = function(){
//		//实时获取页面滚动条的距离
//		let bodytop = document.body.scrollTop||document.documentElement.scrollTop;
//		//当页面滚动到500px时，左侧列表出现
//		let leftlist = document.querySelector('.list');
//		if(bodytop >= 300){
//			leftlist.style.left = '10px';
//			search.style.top = 0;
//		}
//		if(bodytop < 50){
//			leftlist.style.left = '-60px';
//			search.style.top = '-80px';
//		}
//		//进行判断
//		arr.forEach((val,index)=>{
//			//当滚动条的距离>每个楼层的offsetTop时，让对应楼层的图片出现
//			if(bodytop>=val){
//				for(let i = 0;i <list.length;i++){
//					// list[i].classList.remove('active');
//					list[i].style.background = '';
//				}
//				// list[index].classList.add('active')
//				list[index].style.background = color[index];
//				//获取每一楼层对应的图片
//				let imgs = section[index].querySelectorAll('img');
//				imgs.forEach((vals)=>{
//					//vals指每一张图片
//					let url = imgs[index].getAttribute('imgsrc');
//					vals.setAttribute('src',url);
//				})
//			}
//			// console.log(bodytop,val);
//		})
//
//	}
}
