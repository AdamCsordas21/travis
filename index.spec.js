const greetings = require('./')

describe('greetings', function() {
  it('says hi', function() {
    expect(greetings()).toEqual('say hi')
  })
}) 
