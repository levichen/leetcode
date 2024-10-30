
var RecentCounter = function () {
  this.queue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t)

  while (this.queue[0] < t - 3000) {
    this.queue.shift()
  }

  return this.queue.length
};
/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Cases', function () {
  it('Test1', function () {
    const recentCounter = new RecentCounter();

    let result;
    result = recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
    expect(result).to.be.equal(1)

    result = recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
    expect(result).to.be.equal(2)

    result = recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
    expect(result).to.be.equal(3)

    result = recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
    expect(result).to.be.equal(3)
  })
})

/** **** End Testing ******/
