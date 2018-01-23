module.exports = {
  __init__: [ 'customRenderer', 'customRules', 'customUpdater', 'customPalette', 'customContextPad' ],
  customPalette: [ 'type', require('./CustomPalette') ],
  elementFactory: [ 'type', require('./CustomElementFactory') ],
  customRenderer: [ 'type', require('./CustomRenderer') ],
  customRules: [ 'type', require('./CustomRules') ],
  customUpdater: [ 'type', require('./CustomUpdater') ],
  customContextPad: [ 'type', require('./CustomContextPadProvider') ]
};
