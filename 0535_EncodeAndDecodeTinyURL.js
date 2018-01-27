// solution reference: https://discuss.leetcode.com/topic/95853/a-complete-solution-for-tinyurl-leetcode-system-design

// if we use 6 bit to show short url
// Use base64 to encode the counter which could represnet 6 ^ 64 url mapping

const TINY_URL = 'http://tinyurl.com'
let urlCounter = 0
let longToShort = {}
let shortToLong = {}

const BASE64 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY'

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  if (longToShort[longUrl]) return longToShort[longUrl]

  // convert counter to base64
  let shortUrl = base10ToBase64(urlCounter)
  shortUrl = `${TINY_URL}/${shortUrl}`
  urlCounter = urlCounter + 1

  longToShort[longUrl] = shortUrl
  shortToLong[shortUrl] = longUrl

  // pading the result
  return shortUrl
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return shortToLong[shortUrl]
}

/**
 * @param {number} counter
 * @return {string}
 */
var base10ToBase64 = function (counter) {
  if (counter === 0) return '0'
  if (counter === 1) return '1'

  let result = ''
  while (counter !== 0) {
    let bit = counter % 64
    result = BASE64[bit] + result
    counter = parseInt(counter / 64)
  }

  return result
}

/** **** End Program ******/

/** **** Start Testing ******/

var chai = require('chai')
var expect = chai.expect

describe('Test Encode And Decode Tiny URL', function () {
  it('Test1', function () {
    const expectResult = 'http://tinyurl.com/000000'
    const result = encode('http://google.com/')
    expect(result).to.equal(expectResult)
  })

  it('Test2', function () {
    const longUrl = 'http://google.com/'
    const result = decode(encode(longUrl))
    expect(result).to.equal(longUrl)
  })

  it('Test3', function () {
    const longUrl = 'http://google.com/'
    const result1 = encode(longUrl)
    const result2 = encode(longUrl)
    expect(result1).to.equal(result2)
  })

  it('Test4', function () {
    const input = 'http://example.com/battle/act.aspx'
    const result = decode(encode(input))
    expect(result).to.equal(input)
  })

  it('Test5', function () {
    const exampleUrl = 'http://example.com/battle/act'

    for (let i = 0; i < 100; i = i + 1) {
      let url = encode(`${exampleUrl + i}.asp`)
      console.log(url)
    }
  })
})

describe('Test base10Tobase64', function () {
  it('Test1. 0 === 0', function () {
    const expectResult = '0'
    const input = 0
    const result = base10ToBase64(input)
    expect(result).to.equal(expectResult)
  })

  it('Test2. 1 === 1', function () {
    const expectResult = '1'
    const input = 1
    const result = base10ToBase64(input)
    expect(result).to.equal(expectResult)
  })

  it('Test3. 64 === 10', function () {
    const expectResult = '10'
    const input = 64
    const result = base10ToBase64(input)
    expect(result).to.equal(expectResult)
  })

  it('Test4. 65 === 11', function () {
    const expectResult = '11'
    const input = 65
    const result = base10ToBase64(input)
    expect(result).to.equal(expectResult)
  })
})

/** **** End Testing ******/
