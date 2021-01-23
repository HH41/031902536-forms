function _submit(){
   var name_value=document.getElementById("name").value;
   var tel_value=document.getElementById("tel").value;
   var pw_value=document.getElementById("password").value;
   var ppww_value=document.getElementById("confirm_password").value;
   if(!tel_value||!name_value||!pw_value||!ppww_value)
   {
       alert("请输入完整信息！");
       return;
   }
   var reg=/^1[3456789]\d{9}$/;
   if(!reg.test(tel_value))
   {
       alert("手机号输入格式错误！")
       return;
   }
   var regUpper = /[A-Z]/;
   var regLower = /[a-z]/;
   var regNum = /[0-9]\d{1}/;
   var regTeShu =new RegExp("[#&*?@]");
   if(pw_value.length<8 || pw_value.length>15||!regTeShu.test(pw_value)||!regUpper.test(pw_value)||!regLower.test(pw_value)||!regNum.test(pw_value))
   {
       alert("密码输入格式错误！")
       return;
   }
   if(ppww_value!=pw_value)
   {
       alert("两次输入的密码不一致！")
       return;
   }
   alert("信息保存成功！")

}