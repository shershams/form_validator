function InputValidator(){}

InputValidator.prototype.isEmail = function(str) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   return reg.test(str); /* returns true/false */
}

InputValidator.prototype.isPhone = function(str){
   phone = phone.replace(' ', ''); //strip down the white space
   var reg = /^((\+)1?\(?[0-9]{3}\)?[-]?[0-9]{3}-?[0-9]{4})$/;
   return reg.test(str); /* returns true/false */
}

/* Requires http[s]:// at the beginning of the string */
InputValidator.prototype.isWebsite = function(str){
   var reg = /^(|https?:\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;/:~\+#]*[\w\-\@?^=%&amp;/~\+#])?)$/;
   return reg.test(str); /* returns true/false */
}

InputValidator.prototype.isDate = function(str){
   var reg = /^(\d{1,2})([-,\/]?)(\d{1,2})([-,\/]?)(\d{0,4})$/;
   return reg.test(str); /* returns true/false */
}

InputValidator.prototype.isMoney = function(str){
   var reg = /^\$?[0-9]+(\.[0-9][0-9])?$/;
   return reg.test(str); /* returns true/false */
}

InputValidator.prototype.isCreditCardNumber = function(str){
   var reg = /^3(?:[47]\d([ -]?)\d{4}(?:\1\d{4}){2}|0[0-5]\d{11}|[68]\d{12})$|^4(?:\d\d\d)?([ -]?)\d{4}(?:\2\d{4}){2}$|^6011([ -]?)\d{4}(?:\3\d{4}){2}$|^5[1-5]\d\d([ -]?)\d{4}(?:\4\d{4}){2}$|^2014\d{11}$|^2149\d{11}$|^2131\d{11}$|^1800\d{11}$|^3\d{15}$/;
}