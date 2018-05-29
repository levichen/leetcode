/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanToIntMapping = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  // there is a rule,
  // if the left char is less than right one,
  // it mean you have to subtract this number
  let result = 0
  for (let index = 0; index < s.length - 1; index++) {
    let now = romanToIntMapping[s[index]]
    let next = romanToIntMapping[s[index + 1]]
    if (now < next) {
      now = now * -1
    }

    result += now
  }
  result += romanToIntMapping[s[s.length - 1]]

  return result
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Roman To Integer', function () {
  it('Test1. Return IV return 4', function () {
    expect(romanToInt('IV')).to.be.equal(4)
  })

  it('Test2. Return V return 5', function () {
    expect(romanToInt('V')).to.be.equal(5)
  })

  it('Test3. Return XIX return 19', function () {
    expect(romanToInt('XIX')).to.be.equal(19)
  })

  it('Test4. eturn CMXLIX return 949', function () {
    expect(romanToInt('CMXLIX')).to.be.equal(949)
  })
})

/** **** End Testing ******/
