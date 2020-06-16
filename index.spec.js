const greetings = require('./')

describe('greetings', function() {
  it('says hi to name', function() {
    expect(greetings('Adam')).toEqual('hi Adam')
  })
}) 
