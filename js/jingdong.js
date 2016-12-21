//头部
$(function(){$('.gb').click(function(){
	$('.top').fadeOut(1000);
})})

//左侧菜单显示影
//
	$('.th_0>ul>li').hover(function(){
	   var nn=$(this).index();
		$('.elector').eq(nn).toggle();
	},function(){
		var nn=$(this).index();
		$('.elector').eq(nn).toggle();
	})
////
//地址北京的选框
$(function(){
$('.fg').hover(function(){
	$('.location').toggle();
$('.fg').addClass('fg1')
	
},function(){
	$('.fg').removeClass('fg1');
	$('.location').toggle();
})
//北京下面的点击事件
$('.location a').click(function(){
	$('.location a').removeClass('activeRED');
	$(this).addClass('activeRED')
	var s=$(this).html();
	//console.log(s);
	$('#bj').html(s);
	var w=$('.fg').width()+5;
	//console.log(w);
	$('.topborder').css({width:w+'px'});
})
//悬浮事件
$('.location a').hover(
	function(){
			$(this).toggleClass('activeChange');})
})
////我的京东的悬浮事件客户服务网址采购
$('#menu0 li .er').hover(function(){
	var y=$('#menu0 li .er').index($(this));
	$(this).addClass('er1')
	$('.huiquan').eq(y).toggle();}
,function(){
	$(this).removeClass('er1');
	var y=$('#menu0 li .er').index($(this));
	$('.huiquan').eq(y).toggle();
})
//轮播开始
$(function(){
	   var ui=0;
	   var t;
	$('.todbu2 .iconfont').hover(function(){
		clearInterval(t);
		if(!$(this).hasClass('tored'))
		{ ui=$('.todbu2 .iconfont').index($(this));
		     moveLun(ui);}},function(){
		     	 t=setInterval(autoMove,3000);});
	//向右
	$('.toright').click(function(){
		clearInterval(t);
		if(ui==7){
			ui=0;
			moveLun(ui);
		}else{ui++;
			moveLun(ui);}
		 t=setInterval(autoMove,3000);
	});
	//向左	
$('.toleft').click(function(){
	clearInterval(t);
		if(ui==0){
			ui=7;
			moveLun(ui);
		}else{ui--;
			moveLun(ui);}
	t=setInterval(autoMove,3000);})

	  function changeColor(o){
       
		$('.todbu2 .iconfont').removeClass('tored');
		$('.todbu2 .iconfont').eq(o).addClass('tored');}
	//别调用的函数
	function  moveLun(p){
	$('.th1_0 img').removeClass('opTY');
	$('.th1_0 img').eq(p).addClass('opTY');
		var pp=p
		changeColor(pp);}
	
//自动轮播
    function autoMove(){
    	if(ui==7){
			ui=0;
//			console.log(ui);			
			moveLun(ui);
		}else{ui++;
			moveLun(ui);}
        }
   
    t=setInterval(autoMove,3000);})
   //autoMove();
 //promotion
 $('.p').hover(function(){
 	$('.promotion').attr('style','left:49px;');
 	$('.th2_21').hide();
 	$('.th2_22').show();
 	
 	
 })
   
   $('.th2_2 ul li:first').hover(function(){
 	$('.promotion').attr('style','left:0px;');
 	$('.th2_21').show();
 	$('.th2_22').hide();
 })
 //话费 电影票 机票 游戏
 $('.th2_31 li').bind('mouseover',p1);
 $('.th2_31 li').bind('mouseleave',p2);
 
 function p1(){
 	var that=this;
 var  hu=$('.th2_31 li').index($(that));
 var huu=hu*48;
 $('.th2_31 li a').removeAttr('style','color:red;')
  $('.th2_31 li:eq('+hu+') a').attr('style','color:red;')
 $('.bar').attr('style','left:'+huu+'px;')
 $('.th2_31').attr('style','top:-36px;');
 $('.iform_phone').attr('style','bottom:0px;');
 $('.inherit').hide();
 $('.inherit').eq(hu).show();
 $('.bar').show(); }
 
function p2(){
	$('.th2_31 li').bind('mouseover',p1);}

 
 $('.close_phone').click(function(){
 	$('.iform_phone').attr('style','bottom:-185px;');
 	$('.bar').hide();
 	$('.th2_31').attr('style','top:0px;');
 	$('.th2_31 li').unbind('mouseover',p1);
 	 $('.th2_31 li a').removeAttr('style','color:red;')
 })
  
  
  $('.close_phone').hover(function(){
  	$(this).addClass('close_phone_bgc');
  },function(){  	$(this).removeClass('close_phone_bgc');})
 //话费充值
 $('.flow li').hover(function(){
 var ko=$('.flow li').index($(this));
  	$('.flow li a').removeAttr('style','color:white')
 	 $('.flow li').removeAttr('style','background:url(img/iframe-san-new.png) center 0px  no-repeat ; ')
 	$(this).attr('style','background:url(img/iframe-san-new.png) center 0px  no-repeat ;')
 	$('.flow li:eq('+ko+') a').attr('style','color:white');
 	$('.top_form').hide();
 	$('.top_form').eq(ko).show();
 })
   
  $('.flow2 li').hover(function(){
 var ko=$('.flow2 li').index($(this));
  	$('.flow2 li a').removeAttr('style','color:white')
 	 $('.flow2 li').removeAttr('style','background:url(img/iframe-san-new.png) center 0px  no-repeat ; ')
 	$(this).attr('style','background:url(img/iframe-san-new.png) center 0px  no-repeat ;')
 	$('.flow2 li:eq('+ko+') a').attr('style','color:white');
 	$('.movie').hide();
 	$('.movie').eq(ko).show();
 }) 
 
 
 $('.flow3 li').hover(function(){
 var ko=$('.flow3 li').index($(this));
  	$('.flow3 li a').removeAttr('style','color:white')
 	 $('.flow3 li').removeAttr('style','background:url(img/iframe-san-new.png) center 0px  no-repeat ; ')
 	$(this).attr('style','background:url(img/iframe-san-new.png) center 0px  no-repeat ;')
 	$('.flow3 li:eq('+ko+') a').attr('style','color:white');
 }) 
 
$('.flow1 li').hover(function(){
 var ko=$('.flow1 li').index($(this));
  	$('.flow1 li a').removeAttr('style','color:white')
 	 $('.flow1 li').removeAttr('style','background:url(img/iframe-san-new.png) center 0px  no-repeat ; ')
 	$(this).attr('style','background:url(img/iframe-san-new.png) center 0px  no-repeat ;')
 	$('.flow1 li:eq('+ko+') a').attr('style','color:white');
 })  
 
 
//倒计时注意单位

$(function(){
	function getTime(){
	var	 t1=new Date();
	var H=t1.getHours();
	//console.log(H);,
	var arr1=new Array([0,1],[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14,15],[16,17],[18,19],[20,21],[22,23]);
	var quo=0;
	var qul=0;
	for( qou=0;quo<11;quo++){
			if(arr1[quo][0]<=H&&H<=arr1[quo][1]){
				qul=(quo+1)*2;
				break;
			}
	}
	
	var h=qul-H-1;
	var M=t1.getMinutes();
	var S=t1.getSeconds();
	var m=59-M;
	var s=59-S;
	$('#mia1').text(0+h);
	$('#mia2').text(m);
	$('#mia3').text(s);}
	
	 setInterval(getTime,1000);
})
  	
  	
  	
//排行榜的选项卡
$(function(){
	$('.Ghmenu li').mouseover(function(){
	var m=$(this).index();
	//console.log(m);
	var mm=m*77;
	$('.Ghxai').css({left:mm+'px'});
	$('.xuan1').removeClass('xuan');
    $('.xuan1').eq(m).addClass('xuan');
	})
})
//结束
//下面的滑动栏
//向左
$('.aslogo').hover(function(){
	var tu=$('.aslogo').index($(this));
	$('.turnr').eq(tu).toggle();
	$('.turnl').eq(tu).toggle();
})
$('.turnl').click(function(){
	var ruu=$('.turnl').index($(this))
	//console.log(ruu)
	$('.asmenu').eq(ruu).stop().animate({'margin-left':-1170+'px'},1000,'swing',function(){ 
	  $('.asmenu').eq(ruu).stop().animate({'margin-left':-1140+'px'},220,'swing',function(){
	  	var first=$('.asmenu:eq('+ruu+')>li:first-child');
	$('.asmenu').eq(ruu).append(first);
	    $('.asmenu').eq(ruu).css('margin-left','-570px');
	  })
		})})
//向右
$('.turnr').click(function(){
		var ru=$('.turnr').index($(this));
		//console.log(ru);
     $('.asmenu').eq(ru).stop().animate({'margin-left':30+'px'},1000,function(){ 
	$('.asmenu').eq(ru).stop().animate({'margin-left':0+'px'},220,function(){
		var last=$('.asmenu:eq('+ru+')>li:last-child');		
		$('.asmenu').eq(ru).prepend(last);
	    $('.asmenu').eq(ru).css('margin-left','-570px');})})
   })
//长的导航
$('.dnao_logo').hover(function(){
	var tu=$('.dnao_logo').index($(this));
	$('.turnrr').eq(tu).toggle();
	$('.turnll').eq(tu).toggle();
})

$('.turnll').click(function(){
	var ruu=$('.turnll').index($(this))
	$('.dnao_asmenu').eq(ruu).stop().animate({'margin-left':-2300+'px'},1300,'swing',function(){ 
	  $('.dnao_asmenu').eq(ruu).stop().animate({'margin-left':-2280+'px'},220,'swing',function(){
	  	var first=$('.dnao_asmenu:eq('+ruu+')>li:first-child');
	$('.dnao_asmenu').eq(ruu).append(first);
	    $('.dnao_asmenu').eq(ruu).css('margin-left','-1140px');
	  })
		})})
//向右
$('.turnrr').click(function(){
		var ru=$('.turnrr').index($(this));
     $('.dnao_asmenu').eq(ru).stop().animate({'margin-left':30+'px'},1300,function(){ 
	$('.dnao_asmenu').eq(ru).stop().animate({'margin-left':0+'px'},220,function(){
		var last=$('.dnao_asmenu:eq('+ru+')>li:last-child');		
		$('.dnao_asmenu').eq(ru).prepend(last);
	    $('.dnao_asmenu').eq(ru).css('margin-left','-1140px');})})
   })
//短的商标导航

$('.turnlll').click(function(){
	var ruu=$('.turnlll').index($(this))
	$('.asj_asmenu').eq(ruu).stop().animate({'margin-left':-780+'px'},700,'swing',function(){ 
	  $('.asj_asmenu').eq(ruu).stop().animate({'margin-left':-760+'px'},220,'swing',function(){
	  	var first=$('.asj_asmenu:eq('+ruu+')>li:first-child');
	$('.asj_asmenu').eq(ruu).append(first);
	    $('.asj_asmenu').eq(ruu).css('margin-left','-380px');
	  })
		})})
//向右
$('.turnrrr').click(function(){
		var ru=$('.turnrrr').index($(this));
     $('.asj_asmenu').eq(ru).stop().animate({'margin-left':30+'px'},700,function(){ 
	$('.asj_asmenu').eq(ru).stop().animate({'margin-left':0+'px'},220,function(){
		var last=$('.asj_asmenu:eq('+ru+')>li:last-child');		
		$('.asj_asmenu').eq(ru).prepend(last);
	    $('.asj_asmenu').eq(ru).css('margin-left','-380px');})})
   })
$('.asj_logo').hover(function(){
	var tu=$('.asj_logo').index($(this));
	$('.turnrrr').eq(tu).toggle();
	$('.turnlll').eq(tu).toggle();
})


//电梯
 	function elevator(){
         	var np=0;
         	var points=[];
         	init();//电梯到顶部的距离 
         	Bind();//绑定事件
         //点击body移动
         	function init(){
         	$('.ell').each(function(i){
         	points.push($('.ell').eq(i).offset().top);})}
         	//li的绑定事件
         	 function Bind(){
         	$('.diantt li').bind('click',Move)
         	$(window).bind("scroll",resizeMove)}
         	  
          function Move(){
    	    np=$(this).index();
  	       $(window).unbind('scroll',resizeMove);
    	     changeColor();
    	   $('body,html').animate({'scrollTop':points[np]-50},500,function(){$(window).bind('scroll',resizeMove)});
    	  // ,
            }	
            
         $(window).scroll(function(){
         	if($(window).scrollTop()<points[0]-400){$('.diantt').fadeOut(500)}
    	 else{$('.diantt').fadeIn(500);}
         })

     //改变颜色
     function changeColor(){
    	    $('.diantt li').removeClass('Dred');
		    $('.diantt li').eq(np).addClass('Dred'); }
		   
 function resizeMove(){
  		var scrollT=$(window).scrollTop();
  		var half=$(window).height()/2;
  		for(var o=points.length-1;o>=0;o--){
  			if((scrollT+half)>=points[o]){
  				np=o;
  				changeColor();
  				break;}} }
  //解决了li颜色改变的问题
         $('.diantt li').hover(function(){
         	var yyu=$('.diantt li').index($(this));
         	if(!yyu==0){
         		$('.diantt li').eq(yyu-1).attr('style','border-bottom:0px;');
         	}
         	$(this).addClass('Dred');
         },function(){
         	$(this).removeClass('Dred');
         	var yyu=$('.diantt li').index($(this));
         	if(!yyu==0){
         		$('.diantt li').eq(yyu-1).removeAttr('style','border-bottom:0px;');
         	}
         	$('.diantt li').eq(np).addClass('Dred');
         })	}
         	elevator();
 //电梯结束        	
  //顶部search
       $(window).scroll(function(){
   	  $(window).scrollTop()>800?$('.dingtop').slideDown(1000):$('.dingtop').slideUp(1000);
   })
//顶部结束
//右侧菜单栏
//购物车
 $('.dianquanr ul li:eq(1)').click(function(){
 	$('.dianquan').css('right','270px');
 		$('.h_hide').eq(1).hide();
 		  $('.h_hide').eq(3).show();
 	 	$('.dianq_2').css({left:280+"px","z-index":52});
 	     $('.dianq').css({left:10+"px","z-index":53});
 })
   
 //我的足迹   
 $('.dianquanr ul li:eq(3)').click(function(){
 		$('.h_hide').eq(3).hide();
 		$('.h_hide').eq(1).show();
 	$('.dianquan').css('right','270px')
 	$('.dianq').css({left:280+"px",'z-index':52});
 	$('.dianq_2').css({left:10+"px",'z-index':53});
 })    
 //点击关闭菜单展出
  $('.dianq3').click(function(){
    	     $('.h_hide').eq(3).show(); 
    		$('.dianquan').css('right','0px');
    		$('.h_hide').eq(1).show();
    })
 
 //弹框的二维码的变换
 $('.account_in_p').hover(function(){
 	$('.account_img').stop().animate({left:0+'px'},'slow',function(){
 		$('.account_show').show();})
 	
 },function(){
 	 $('.account_show').hide();
 		$('.account_img').stop().animate({left:70+'px'},'slow');})
 //弹框的注册菜单的位置
 
 function showUp(){
 	var W=$(window).width();
 	var H=$(window).height();
 	var w=$('.register').width();
 	var h=$('.register').height();
 	var ww=(W-w)/2;
 	var hh=(H-h)/2;
 	$('.register').css({left:ww+'px',top:hh+'px'})
 }
 
$(window).resize(function(){
	showUp();
})
 
 $('.account_set_a1').click(function(){
 	$(this).addClass('acco')
    $('.account_set_a2').removeClass('acco')          
 	 $('.account_other').hide();
    $('.account_in').show();
    $('.account_img').css('left','0px')
   $('.account_show').show()
    setTimeout(nowBefore,3000)
 })
 function nowBefore(){
 	 $('.account_show').hide();
 		$('.account_img').stop().animate({left:70+'px'},'slow');
 }
 
 $('.account_set_a2').click(function(){
 	 	$(this).addClass('acco')
    $('.account_set_a1').removeClass('acco');
    $('.account_other').show();
    $('.account_in').hide();
 })
   //点击选框出现效果
  $('.check_box').click(function(){
  	var check=$('.check_box').get(0);
  	console.log(check.checked);
  	if(check.checked==true){
  		$('.account_other1').show();
  	}else{$('.account_other1').hide()}
  	
  })
 
 
 
 
 
 //弹框的关闭
  $('#turnoff').click(function(){
  	$('.bounced').hide();
  	$('.register').hide();
        showUp();
  })
//弹框出现       	
   $('.dianquanr>ul>li:eq(0)').click(function(){
   	$('.bounced').show();
  	$('.register').show();
     showUp();
   })
 $('.dianquanr>ul>li:eq(2)').click(function(){
   	$('.bounced').show();
  	$('.register').show();
  	 	showUp();
   })        	

$('.dianquanr>ul>li:eq(5)').click(function(){
   	$('.bounced').show();
  	$('.register').show();
  	 	showUp();
   })
//瀑布流
$(function(){
	$(window).bind('scroll',pubu)
	function pubu(){
//		if($(window).scrollTop()>$('.asj').offset().top+400){
//		$('.waterfall li').show();}
	if($(window).scrollTop()>$('.asj').offset().top+350){
			$('.waterfall ul li').fadeIn(300);
}
	if($(window).scrollTop()>$('.waterfall').offset().top+$('.waterfall').height()*2/3){
			for(var op=0;op<5;op++){
		var tg=0,tgg=0 ;
	 tg=Math.ceil(Math.random()*25)-1;
	$('.waterfall>ul>li').eq(tg).clone(true).appendTo('.waterfall ul').fadeIn(400);}
}
	
	if($('.waterfall ul li').length>=100)
		{$(window).unbind('scroll',pubu)}
}

})
//结束瀑布流









