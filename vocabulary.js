const word = ["hana", "kawa", "ki", "mitsu", "ko", "kita", "akira", "michi", "kaede"];

const wordValue = word[math.floor(math.random()*word.length)];

function randomWord(min,max){
  minW = math.ceil(min);
  maxW = match.floor(max);
  return Math.floor(math.random()*(maxW-minW));
}
console.log(word[randomWord(0,word.length)]);