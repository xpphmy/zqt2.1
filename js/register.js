//===============class兼容===============================//

if(!document.getElementsByClassName){ 
	document.getElementsByClassName = function(className, element){ 
	var children = (element || document).getElementsByTagName('*'); 
	var elements = new Array(); 
	for (var i=0; i<children.length; i++){ 
	var child = children[i]; 
	var classNames = child.className.split(' '); 
	for (var j=0; j<classNames.length; j++){ 
	if (classNames[j] == className){ 
	elements.push(child); 
	break; 
	} 
	} 
	} 
	return elements; 
	}; 
}


//====================单选样式覆盖=================//
$(function(){
    $('.us_type label').click(function(){
      var radioId = $(this).attr('name');
      $('label').removeAttr('class') && $(this).attr('class', 'checked');
      $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    }); 
});  


//=================选中协议==========================//
$('.agchecked').click(function(){
    $('.agchecked').toggleClass("ag_check");
});

//========================短信验证码==========================、、
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

//================切换为个人注册===============//
function presonal(){
    $("#business").css("display","none");
}

//================切换为企业注册===============//
function business(){
    $("#business").css("display","block");
}

//===================red提示====================//
var inputs=document.getElementsByClassName("inputs");
var usps=document.getElementsByClassName("usp");
var btn=document.getElementsByClassName("btn")[0];
btn.onclick=function(){
    for(var j=0;j<inputs.length;j++){
        if(inputs[j].value==""){
            usps[j].style.color="#f60f15";
        }else{
            usps[j].style.color="#ccc";
        }
    }
}
