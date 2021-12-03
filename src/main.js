let html = document.querySelector("#demo");
let string = `/*12月3日,第一份简历
开始写样式
本次样式为太极*/
#div1{
    border:  1px red solid;
    width:  300px;
    height: 300px
}
/*
使用变圆
*/
#div1{
    border-radius:50%;
    border: none;
    box-shadow:0 0 3px rgba(0,0,0,0.5)
}
/*
分为二色
*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,0.5019141445640756) 50%, rgba(255,255,255,0) 100%);
}
/*
黑鱼
*/
#div1::before{
    width:150px;
height:150px;
left:0;
top:0;
left:25%;
border-radius:50%;
background:#000;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*
白鱼
*/
#div1::after{
    width:150px;
height:150px;
left:0;
top:0;
left:25%;
top:50%;
border-radius:50%;
background:#fff;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 92%);
`;
// string = string.replace(/\n/g,"<br>")
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    // console.log(n,string[n])

    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);
    if (n < string.length - 1) {
      step();
      n += 1;
    }
  }, 0);
};

step();

// let style = document.querySelector("#style")
// setTimeout(() => {
//   style.innerHTML = `body{
//         color:red
//     }`
// }, 500)
