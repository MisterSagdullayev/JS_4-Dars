/* Math in JS */

/*let round = Math.round(8.4); */                 /* Yaxlitlash - 1 */
/*let pow = Math.pow(4,5);*/   /* 4*4*4*4*4 */    /* Darajasini hisoblash */
/*let sqrt = Math.sqrt(16);*/                     /* Ildizini topish */
/*let abs = Math.abs(-12.8);*/                    /* absolute sonini chiqarish */
/*let ceil = Math.ceil(4.1);*/                    /* Yaxlitlash - 2 */
/*let floor = Math.floor(4.9);*/                  /* Yaxlitlash - 3 */
/*let min = Math.min(332,22,77,1326,10,517);*/
/*let max = Math.max(332,22,77,1326,10,517);*/
/*document.write(max);*/

/* Selectors and Styles in JS */

let byTag = document.getElementsByTagName("h1");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classNomi");
let bySelector = document.querySelector(".classNomi");
let bySelectorAll = document.querySelectorAll(".classNomi");
let byAll = document.getElementsByTagName("h1").namedItem("idNomi");

byAll.style.backgroundColor = "green";
byAll.style.color = "yellow";
byAll.style.width = "350px";
byAll.style.height = "200px";
byAll.style.border = "5px solid royalblue";
byAll.style.textAlign = "center";
byAll.style.paddingTop = "70px"
byAll.style.boxSizing = "border-box";
byAll.style.textTransform = "uppercase";

/*let matn = byAll.innerText = "Xayr Dunyo!"*/

console.log(matn);


