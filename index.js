// code your solution here
function saturdayFun(target = "roller-skate") {
    console.log(`This Saturday, I want to ${target}!`);
}
saturdayFun("watch movies");



const fn = function mondayWork(target="go to office") {
    console.log(`This Monday, I will ${target}`);
  }; 
  fn(); 

  function wrapAjective(snowflake= "*") {
    return function (adj= "special") {
      return  `You are ${adj} ${snowflake}.`;
    
      
    };
   
  }
  wrapAjective("!")("excellent programmer");
  