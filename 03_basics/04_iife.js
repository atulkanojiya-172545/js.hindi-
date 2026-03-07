// immmediately invoked function expression (IIFE)
// to remove the pollution occuring due to global variable iife is used 
(function chai(){
    console.log(`Db connected`);
})();

(function aurcode(){
    console.log(`Db connected two`)
})()
