//1,翻转字符串
//先把字符串转化成数组，再借助数组的reverse方法翻转数组顺序，最后把数组转化成字符串。
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

//2,计算一个整数的阶乘
//如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。
function factorialize(num) {
 if(num<1){ 
     return 1; 
   }else{ 
     return factorialize(num-1)*num; 
   } 
}

factorialize(20);

//3,如果给定的字符串是回文，返回true，反之，返回false。
//如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

function palindrome(str) {
  // Good luck!
  var a = str.replace(/[^0-9A-Za-z]+/g,'').toLowerCase();
  var b = a.split("").reverse().join("");
  if(a==b){
    return true;
  }else{
    return false;
  }
}

palindrome("eye");

//4,找到提供的句子中最长的单词，并计算它的长度。
function findLongestWord(str) {
  var newArray = str.split(' ');
  var max = 0;
  for(var i=0; i<newArray.length; i++){
    if (newArray[i].length > max ){
        max = newArray[i].length;
      }
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//5,确保字符串的每个单词首字母都大写，其余部分小写。
function titleCase(str) {
  var newArray = str.toLowerCase().split(" ");
  for(var i=0;i<newArray.length;i++){
      var char = newArray[i].charAt(0);
      newArray[i] = newArray[i].replace(char,function replace(char){
              return char.toUpperCase();
              });
    }
    return newArray.join(" ");
}

titleCase("I'm a little tea pot");

//6,右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
function largestOfFour(arr) {
  // You can do this!
  var newArr = [];
  for(var i=0; i<arr.length; i++){
    var temp = arr[i][0];
    for(var j=0 ;j<arr[i].length;j++){
       if(arr[i][j]>temp){
         temp = arr[i][j];
       }
      newArr[i] = temp;
    }
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//7,检查一个字符串(str)是否以指定的字符串(target)结尾。
//如果是，返回true;如果不是，返回false。
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str = str.substr(str.length-target.length);
  if(str == target){
    return true;
  }else{
    return false;
  }
}

confirmEnding("Bastian", "n");

// 8,重要的事情说3遍！
// 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
function repeat(str, num) {
  // repeat after me
  a="";
  if(num<0){
    str = a;
  }else{
    for(var i=0; i<num; i++){
      a += str;
    }
  }
  return a;
}

repeat("abc", 3);

//9,截断一个字符串！
/*如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

切记，插入到字符串尾部的三个点号也会计入字符串的长度。

但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。*/
function truncate(str, num) {
  // Clear out that junk in your trunk
  var d="";
  if(str.length>num){
    if(num>=3){
      d = str.slice(0,num-3).concat('...');
    }else{
      d = str.slice(0,num).concat('...');
    }
  }else{
      d = str;
  }
  return d;
}

truncate("A-tisket a-tasket A green and yellow basket", 11);

//10,把一个数组arr按照指定的数组大小size分割成若干个数组块。
function chunk(arr, size) {
  // Break it up.
  var num = parseInt(arr.length/size);
  var len = arr.length%size;
  var newArr = [],sot=len>0?num+1:num;
  for(var i=1; i<=sot; i++){
    var start = size*(i-1);
    var end = (i>num)?((i-1)*size+len):i*size;
    var myArr = arr.slice(start,end);
    newArr.push(myArr);
  }
  return newArr;
}

chunk(["a", "b", "c", "d"], 2);

//11,返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var newArr = arr.splice(howMany,arr.length);
  return newArr;
}

slasher([1, 2, 3], 2);

//12,如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
function mutation(arr) {
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();
    for(var j=0; j<b.length; j++){
      if(a.indexOf(b.charAt(j)) == -1){
        return false;
      }
  }
  return true;
}

mutation(["hello", "hey"]);

//13,删除数组中的所有假值。
// 在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(data){
    return Boolean(data) !== false;
  });
}

bouncer([7, "ate", "", false, 9]);

//14,实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
function destroyer(arr) {
  // Remove all the values
  var tempArguments = arguments;
  return arr.filter(function(data){
    for(var i=0; i<tempArguments.length; i++){
      if(data == tempArguments[i]){
        return false;
      }
    }
    return true;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//15,先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。
function where(arr, num) {
  // Find my place in this sorted array.
  var newArr = arr.push(num);
  var filterNewArr = arr.sort(function(a,b){
    return a - b;
  });
  for(var i=0; i<filterNewArr.length; i++){
    if(filterNewArr[i] == num){
      return i;
    }
  }
}

where([40, 60], 50);

//16,移位密码也就是密码中的字母会按照指定的数量来做移位。
/*一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。
写一个ROT13函数，实现输入加密字符串，输出解密字符串。
所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。*/
function rot13(str) { // LBH QVQ VG!
 var newArray = [];
  for(var i = 0;i < str.length;i++){
    var numbers = str.charCodeAt(i);
    if(numbers < 65 || numbers > 90){
      newArray.push(String.fromCharCode(numbers));
    }else if(numbers > 77){
      newArray.push(String.fromCharCode(numbers - 13));
    }else{
      newArray.push(String.fromCharCode(numbers + 13));
    }
  }
  return newArray.join("");
}

/*var newArray = [];
  for(var i = 0;i < str.length;i++){
    var numbers = str.charCodeAt(i);
    if(numbers < 65 || numbers > 90){
      newArray.push(String.fromCharCode(numbers));
    }else if(numbers > 77){
      newArray.push(String.fromCharCode(numbers - 13));
    }else{
      newArray.push(String.fromCharCode(numbers + 13));
    }
  }
  return newArray.join("");*/

// Change the inputs below to test
rot13("SERR PBQR PNZC");

//17,我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
function sumAll(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var sun = 0;
  for(var i =min; i<=max; i++){
     sun += i;
  }
  return sun;
}

sumAll([1, 4]);

//18,比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
 for(var i=0; i<arr2.length; i++){
   if(arr1.indexOf(arr2[i]) == -1){
     newArr.push(arr2[i]);
   }
 }
  
  for(var j=0; j<arr1.length; j++){
   if(arr2.indexOf(arr1[j]) == -1){
     newArr.push(arr1[j]);
   }
 }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//19,将给定的数字转换成罗马数字。
//所有返回的 罗马数字 都应该是大写形式。
function convert(num) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var romans =["m","cm","d","cd","c","xc","l","xl","x","ix","v","iv","i"];
  var str = '';
  nums.forEach(function(item,index,array){
     while(num >= item){
      str += romans[index];
      num -= item;
    }
  });
 return str.toUpperCase();
}

convert(36);

//20,写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
function where(collection, source) {
  var arr = [];
  // What's in a name?
  var key = Object.keys(source);
  
  return collection.filter(function(obj){
    console.log(obj);
      return key.every(function(item){
          return obj.hasOwnProperty(item) && obj[item] === source[item];
      });
  });
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//[{ first: "Tybalt", last: "Capulet" }]
where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
//[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

//21,使用给定的参数对句子执行一次查找和替换，然后返回新句子。
/*第一个参数是将要对其执行查找和替换的句子。
第二个参数是将被替换掉的单词（替换前的单词）。
第三个参数用于替换第二个参数（替换后的单词）。*/

function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){
        after = after[0].toUpperCase() + after.slice(1);
    }
    str = str.replace(before,after);
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//22,把指定的字符串翻译成 pig latin。
//Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
function translate(str) {
 var myStr = '';
    var regex = /[aeiou]/gi;
    if(str[0].match(regex)){
        myStr = str + 'way';
    }else{
        var index = str.indexOf(str.match(regex)[0]);
        myStr = str.substr(index) + str.substring(0,index) + 'ay';
    }
  return myStr;
}

translate("consonant");

//23,DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。

//Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。

//在每一个数组中将给定的字母作为第一个碱基返回。
function pair(str) {
  var arr = str.split('');
  var pair = '';
  return arr.map(function(item){
      switch(item){
          case 'C':
              pair = 'G';
            break;
          case 'G':
              pair = 'C';
            break;
        case 'A':
            pair = 'T';
            break;
        case 'T':
            pair = 'A';
             break;
      }
      return [item,pair];
  });
}

pair("GCG");

//24,从传递进来的字母序列中找到缺失的字母并返回它。
//如果所有字母都在序列中，返回 undefined。
function fearNotLetter(str) {
  var compare = str.charCodeAt(0),missing;
    str.split('').map(function(item,index){
        if(str.charCodeAt(index) === compare){
            ++ compare;
        }else{
            missing = String.fromCharCode(compare);
        }
    });
  return missing;
}

fearNotLetter("abce");

//25,检查一个值是否是基本布尔类型，并返回 true 或 false。
//基本布尔类型即 true 和 false。
function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return typeof bool === 'boolean';
}

boo(null);

//26,写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
//换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
//非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
function unite(arr1, arr2, arr3) {
 //return arguments;
  var a=[];
  for(var i=0; i<arguments.length; i++){
    for(var j=0; j<arguments[i].length; j++){
      a.push(arguments[i][j]);
    }
  }

  var b=[];
  for(var k = 0; k < a.length; k++) {
    if (b.indexOf(a[k]) == -1){
      b.push(a[k]);
    }
  }
  return b;
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//27,将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
function convert(str) {
 /*var i=0;
  var arr=str.split("");

  for(i=0;i<arr.length;i++){
    switch(arr[i]){
      case '&':
        arr.splice(i,1,'&amp;');
        break;
      case '>':
        arr.splice(i,1,'&gt;');
        break;
      case '<':
        arr.splice(i,1,'&lt;');
        break;
      case "'":
        arr.splice(i,1,'&apos;');
        break;
      case '"':
        arr.splice(i,1,'&quot;');
        break;
    }
  }
  str=arr.join('');
 
  return str;*/
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")  
            .replace(/\"/g,"&quot;").replace(/\'/g,"&apos;");  
}

convert("Dolce & Gabbana");

//28,将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/_/g," ").replace(/([A-Z])/g," $1").replace(/^\s/, "").replace(/\s+/g, "-").toLowerCase();
  return str;
}

spinalCase('This Is Spinal Tap');

//29,给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
/*斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。
提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。*/
var sumFibs = function() {
    var cache = [1, 1];
    return function (n) {
        if (n >= cache.length) {
            for (var i = cache.length; i < n ; i++ ) {
                cache[i] = cache[i - 2] + cache[i - 1];
            }
        }
        var arr=cache.filter(function(val){
           return val%2!==0 && val<=n;
         });
        return arr.reduce(function(pre,next){
          return pre+next;
        });
    };

}();

sumFibs(4);

//30,求小于等于给定数值的质数之和。
/*只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
给定的数不一定是质数。*/

function sumPrimes(num) {
   //将所有小于等于num的质数放进一个数组
  var arr=[];
  //1不是质数，从2开始循环，需算上num
  for(var i=2; i<=num; i++){
    var j=2;
    //判断i能否被从2开始的数整除
    while(i%j!==0){
      j++;
    }
    //判断这个数是不是自身，是则加进数组
    if(i==j){
      arr.push(i);
    }
  }
  //对数组求和
  var result=arr.reduce(function (a,b){return a+b;});
  
  return result;
}

sumPrimes(10);
