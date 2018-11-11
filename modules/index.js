/*var Query = require('./components/Query');
var Builder = require('./components/Builder');
var Preview = require('./components/Preview');
module.exports = { Query: Query, Builder: Builder, Preview: Preview};
*/
export { default as Query } from './components/Query';
export { default as Builder } from './components/Builder';
export { default as Preview } from './components/Preview';

export { TextWidget, SelectWidget, DateWidget } from './components/widgets';
export { ComplexQueryOptions } from './components/options';
export { ProximityOperator } from './components/operators';
