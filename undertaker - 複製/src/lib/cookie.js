export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
export function setCookie(c_name, value) {
  var millisecond = new Date().getTime();
     console.log(millisecond)
     var expiresTime = new Date(millisecond + 60 * 1000 *15);
     console.log(expiresTime)
  var exdate =expiresTime;
  //exdate.setDate(exdate.getDate() + expiredays);
  // var millisecond = new Date().getTime();
  // console.log(millisecond)
  // var expiresTime = new Date(millisecond + 60 * 1000 *1);
  // console.log(expiresTime)
  document.cookie = c_name + "=" + escape(value) + ((exdate == null) ? "" : ";expires=" + exdate.toGMTString());
};
export function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};



