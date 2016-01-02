var chai=require('chai');
chai.should();
var expect=chai.expect;

var dartScoreModule=require('./../public/js/throwing-darts.js');


describe('dartScore', function() {
  it('should exist', function() {
    expect(dartScoreModule).to.exist;
    expect(dartScoreModule).to.be.a('function');
  });
});