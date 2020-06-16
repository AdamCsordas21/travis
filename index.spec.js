const greetings = require('./')

describe('greetings', function() {
  it('says hi to Adam', function() {
    expect(greetings('Adam')).toEqual('hi Adam')
  })
  it('says hi to Osh', function() {
    expect(greetings('Osh')).toEqual('hi Osh')
  })
}) 

