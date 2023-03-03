const lunch = [
  "국밥",
  "콩나물무침",
  "닭가슴살 샐러드",
  "파스타",
  "짬뽕",
  "컵밥",
  "도시락",
  "라면",
  "불고기",
  "시리얼"
];

const pCountry= [
  "america",
  "canada",
  "japan",
  "singapore",
  "hong kong",
  "taiwan",
  "maleisiya",
  "italy",
  "spain",
  "croacia",
  "australia",
  "new zealand"
];

const country = {
  america : ["washington", "new york", "los angelese", "san francisco", "boston", "hawaii", "chicago"],
  japan : ["tokyo","osaka","kyoto","okinawa","fukuoka","fukaido",'kyushu'],
  canada : ["otawa", "toronto", "vencouver"],
}


/*
const japan = ["tokyo","osaka","kyoto","okinawa","fukuoka","fukaido",'kyushu'];
const america = ["washington", "new york", "los angelese", "san francisco", "boston", "hawaii", "chicago"];
*/


/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + 
  min; //최댓값은 제외, 최솟값은 포함
}
//console.log(lunch[getRandomInt(0,lunch.length)]);
console.log(country[getRandomInt(0,country.length)]);
*/

/*
function randonElements(){
  Math.floor(math.random()*101)+1;
}
console.log(randonElements());
*/


//const math = math.floor(math.random()*10)+1
//const answer = parseInt(window.prompt("숫자를 입력하시오(1~10)"));



let studentObject = {
  "강지민":"마라탕",
  "곽윤호":"조개",
  "권예준":"가지",
  "김동주":"버섯",
  "김은아":"굴",
  "김종윤":"오이",
  "김지섭":"술",
  "김형진":"독버섯",
  "노수민":"다리많은거",
  "류은이":"피망",
  "박달재":"벌레",
  "박수연":"삼결살",
  "박준형":"생간",
  "성해경":"우엉",
  "이경택":"홍어",
  "이세민":"짜장면",
  "이재권":"가지",
  "임지성":"단무지",
  "장루빈":"김치",
  "정성철":"고수",
  "정지은":"버섯",
  "정희은":"술",
  "최대건":"뼈많은생선",
  "한유진":"양파",
  "허진":"딸기",
  };


let hateMushroom = 0;
let hateAlchol = 0;
let hateEggplant = 0;
let hateMushroomPerson = [];
let hateAlcholPerson = [];
let hateEggplantPerson = [];
//반복문 돌린 후,
//몇명이 버섯을 싫어하는지
//버섯을 싫어하는 사람의 이름
hateMushroomPerson[0] = "김동주";
hateMushroomPerson[1] = "김형진";

hateAlchol[0] = "김지섭";
hateAlchol[1] = "정희은";

hateEggplant[0] = "권예준";
hateEggplant[1] = "이재권";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + 
  min; //최댓값은 제외, 최솟값은 포함
}
//console.log(lunch[getRandomInt(0,lunch.length)]);
//console.log(country[getRandomInt(0,country.length)]);
console.log([getRandomInt()]);