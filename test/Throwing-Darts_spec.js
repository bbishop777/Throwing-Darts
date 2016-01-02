var chai=require('chai');
chai.should();
var expect=chai.expect;

var dartScoreModule=require('./../public/js/throwing-darts.js');


describe('dartScoreModule', function() {
  it('should exist', function() {
    expect(dartScoreModule).to.exist;
    expect(dartScoreModule).to.be.a('function');
  });

  it('should return a total score if given 3 scores from dart throws', function(){
    var result=dartScoreModule([1, 6, 11]);

    expect(result).to.be.a('number');
    expect(result).to.equal(15);

  });

  it('should return a total score plus 100 point bonus if given 3 scores from dart throws and each are under 5 points', function(){
    var result=dartScoreModule([1, 3, 2]);

    expect(result).to.be.a('number');
    expect(result).to.equal(130);

  });
});