//Create a JS file containing the following lines

//A parameterless function that always returns "true"
function alwaysTrue(){
    return true
}
alwaysTrue();

//An asynchronous function that uses a setTimeout and passes a "Hello, I'm a promise" to the console 5 seconds after being executed
async function promise() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("Hi I am a promise");
}
promisa();

//An automatic even index generator function
function even(){
    for(i = 0; i <= 20 ; i += 2)
    console.log(i)
}
even();
