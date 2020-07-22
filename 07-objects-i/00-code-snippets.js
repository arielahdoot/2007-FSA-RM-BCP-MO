// Below are a couple things you can copy and paste 


/*
  Copy this to have multline comments! Anything written in here
  will not run
*/


/** 
*  replace `valueToLogOut` with whatever you're trying to log out, this will log it out in a nice format
*/
const valueToLogOut = { hello: { world: '!' }};

/*
  This will log out : 
  {
    "hello": {
      "world": 1
    }
  }
*/
console.log(JSON.stringify(valueToLogOut, null, 2));
/*
  This will log out:
  { hello: { world: '!' }}
*/
console.log(valueToLogOut);

