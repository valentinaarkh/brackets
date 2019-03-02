module.exports = function check(string, bracketsConfig) {
  let conf = bracketsConfig;
  let str = string;
  if ( str.length%2 !== 0 || str.length == 0){
    return false;
  }
  for ( let i = 0; i < conf.length; i++ ){
    let param1 = conf[i][0];
    let param2 = conf[i][1];
    while( str.length > 0){
      let foundPos1 = str.lastIndexOf(param1);
      let foundPos2 = str.indexOf(param2, foundPos1);
      if ( foundPos2 < foundPos1 ){
        return false;
      }
      if ( param1 == param2 ){
        foundPos1 = str.slice(0,foundPos2).lastIndexOf(param1);
      }
      if ( foundPos1 == -1 || foundPos2 == -1){
        break;
      }
      if ( (foundPos2 - foundPos1)%2 == 0 || foundPos2 - foundPos1 < 0 ){
        return false;
        break;
      }
      let part1;
      let part2;
      if ( foundPos1 == 0 ){
        part1 = str.slice(foundPos1+1,foundPos2);
      }else{
        part1 = str.slice(0, foundPos1)+str.slice(foundPos1+1, foundPos2);
      }
      if ( foundPos2 !== str.length-1 ){
        part2 = str.slice(foundPos2+1, str.lenght);
      }
      str = part1+part2;
    }
  }
  return true;
}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

let answer = check("111115611111111222288888822225577877778775555666677777777776622222", config6);
console.log(answer);

function check(string, config){
  console.log(string, config);
  let conf = config;
  let str = string;
  if ( str.length%2 !== 0 || str.length == 0){
    return false;
  }
  for ( let i = 0; i < conf.length; i++ ){
    console.log("Start equation");
    let param1 = conf[i][0];
    let param2 = conf[i][1];
    console.log(param1, param2);
    while( str.length > 0){
      let foundPos1 = str.lastIndexOf(param1);
      let foundPos2 = str.indexOf(param2, foundPos1);
      if ( foundPos2 < foundPos1 ){
        return false;
      }
      if ( param1 == param2 ){
        foundPos1 = str.slice(0,foundPos2).lastIndexOf(param1);
      }
      // if ( foundPos2 !== foundPos1+1){
      //   foundPos2 = str.lastIndexOf(param2);
      // }
      console.log("FoundPos ", foundPos1, foundPos2);
      if ( foundPos1 == -1 || foundPos2 == -1){
        break;
      }
      if ( (foundPos2 - foundPos1)%2 == 0 || foundPos2 - foundPos1 < 0 ){
        return false;
        break;
      }
      let part1;
      let part2;
      if ( foundPos1 == 0 ){
        part1 = str.slice(foundPos1+1,foundPos2);
      }else{
        part1 = str.slice(0, foundPos1)+str.slice(foundPos1+1, foundPos2);
      }
      if ( foundPos2 !== str.length-1 ){
        part2 = str.slice(foundPos2+1, str.lenght);
      }
      str = part1+part2;
    }
  }
  return true;
}
