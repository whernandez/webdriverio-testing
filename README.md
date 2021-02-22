## Next-gen browser and mobile automation test framework for Node.js

> WebdriverIO allows you to automate any application written with modern web frameworks such as React, Angular, Polymeror Vue.js as well as native mobile applications for Android and iOS.

It comes with smart selector strategies that can, e.g. using the react$ command, fetch React components by its component name and filter it by its props or states. A similar command called $shadow provides the ability to fetch elements within the shadow DOM of a web component.


### Chai Assertion Library

> Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel

```js
// Should
    chai.should();
    
    foo.should.be.a('string');
    foo.should.equal('bar');
    foo.should.have.lengthOf(3);
    tea.should.have.property('flavors')

// Expect
    var expect = chai.expect;
    
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.lengthOf(3);
    expect(tea).to.have.property('flavors')
      .with.lengthOf(3);

// Assert
   var assert = chai.assert;
   
   assert.typeOf(foo, 'string');
   assert.equal(foo, 'bar');
   assert.lengthOf(foo, 3)
   assert.property(tea, 'flavors');
   assert.lengthOf(tea.flavors, 3);
```

### Babel Setup
To write tests using next-generation JavaScript features, you can use Babel to compile your test files.

To do so, first install the necessary Babel dependencies:

```shell script
yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/register
```

Make sure your babel.config.js is configured properly.

The simplest setup you can use is:

```shell script
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'lts'
            }
        }]
    ]
}
```

*Once this is set up WebdriverIO will take care of the rest.*
