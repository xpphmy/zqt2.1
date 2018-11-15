$(".news_tip span").click(function(){
	fv_move();
	$(this).addClass('select');
});
function fv_move(){
	$(".news_tip span").removeClass('select');
}

// ----------------sign up--------------------------//
$("#col").click(function(){
	signClose();
})
		
	
	//关闭弹窗
	function signClose(){
		$("#col").css("display","none");
		$(".signUp").css("display","none");
		$("#HBox").css("display","none");
	}


	$("#qr_password").click(function(){
	  $("#HBox").toggle("slow");
	  $("#scan").fadeToggle(1000);
	});
	$("#qr_code").click(function(){
	   $("#HBox").fadeToggle("slow");
	   $("#scan").toggle(1000);
	});

	//密码登录
	$(".pass_sign").click(function(){
		pass_sign_in();
	});

	//Ukey登录
	$(".ukey_sign").click(function(){
		ukey_sign_in();
	});

	


	//密码登录
	function pass_sign_in(){
		sign_clear(); 
		$(".pass_sign").css("border-bottom","1px solid #042b71"); 
		$(".pass_sign_in").css("display","block");
	}
	//Ukey登录
	function ukey_sign_in(){
		sign_clear();
		$(".ukey_sign").css("border-bottom","1px solid #042b71"); 
		$(".ukey_sign_in").css("display","block");
	}

	//Ukey登录_调用绑定手机号
	function ukey(){
		$("#col").css("display","block");
		$(".signUp").css("display","none");
		$(".show_ukey").fadeIn("slow");
		$(".sign_in span").css("border-bottom","1px solid #ccc");
		$(".ukey_sign").css("border-bottom","1px solid #042b71"); 
	}

	//绑定手机号
	function binding(){
		$("#col").css("display","block");
		$(".signUp").css("display","none");
		$("#HBox").css("display","none");
		$(".message").fadeIn("slow");
	}
	//binding();
	function phone_num(){
		$("#col").css("display","block");
		$(".signUp").css("display","none");
		$("#HBox").css("display","none");
		$(".phone").fadeIn("slow");
	}

// 初始化样式
	function sign_clear(){
		$(".signUp").css("display","none");
		$("#HBox").slideDown("slow");
		$(".sign_in span").css("border-bottom","1px solid #ccc");
		$(".ukey_sign_in").css("display","none");
		$(".pass_sign_in").css("display","none");
		$("#col").css("display","block");
	}

function clickButton(obj){
	var obj = $(obj);
	obj.attr("disabled","disabled");/*按钮倒计时*/
	var time = 30;
	var set=setInterval(function(){
	obj.val(--time+"(s)");
	}, 1000);/*等待时间*/
	setTimeout(function(){
	obj.attr("disabled",false).val("重新获取验证码");/*倒计时*/
	clearInterval(set);
	}, 30000);
} 


//----------------------news_tab------------------------------------//
var spans=document.getElementsByClassName("news_tip")[0].getElementsByTagName("span");
var shows=document.getElementsByClassName("newsmain");
for(var i=0;i<spans.length;i++){
    spans[i].onclick=function(){
        for(var j=0;j<spans.length;j++){
            if(spans[j]==this){
                spans[j].className="select";
                shows[j].id="newsShow";
            }else{
                spans[j].className="";
                shows[j].id="";
            }
        }
    }
}

