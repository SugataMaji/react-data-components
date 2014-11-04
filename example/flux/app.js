require('bootstrap/less/bootstrap.less');
require('../../less/rdc.less');

var React = require('react');
var FluxTable = require('./FluxTable');
var WebAPIUtils = require('./WebAPIUtils');
var DataStore = require('./DataStore');
var {containsIgnoreCase} = require('../../').utils;

DataStore.init({
  pageSize: 5,
  sortBy: { prop: 'CITY', order: 'desc' },
  filters: {
    globalSearch: {
      filter: containsIgnoreCase
    }
  }
});

WebAPIUtils.getCsvFile('table/CTA_-_Map_of_Fare_Media_Sales_Outlets.csv');

React.render(<FluxTable />, document.body);
