var dartScoreModule=(function(){
  var score=null;
  function dartScore(arry){
    count=0;
    var sum=0;
    var len=arry.length;
    if(!Array.isArray(arry)) {
      throw new TypeError('Please give me an array');
    }

    for(x=0; x<len; x++) {

      if(arry[x] < 5) {

        sum=sum +10;
        count= count+1;

      } else if((arry[x])<=10 && (arry[x]>=5)) {
        sum=sum+5;
      } else if(arry[x] >10) {
        sum=sum;
      }
    if (count === 3) {
      sum=sum+100;
    }
    }
    return sum;

  }
 return dartScore;
})();
module.exports=dartScoreModule;

//window.onload = function() {
    // var button = document.getElementById('searchbutton').addEventListener('click', function(){
    //   // Get user input from DOM
    //   var text1 = document.getElementById('imageType1').value;
    //   var text2 = document.getElementById('imageType1').value;
    //   var text3 = document.getElementById('imageType1').value;

    //   scoreArray=[text1, text2, text3];
    //   console.log(scoreArray);
    // });
 // };