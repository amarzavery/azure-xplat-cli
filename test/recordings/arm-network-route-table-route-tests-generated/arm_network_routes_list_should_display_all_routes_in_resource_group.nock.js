// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"routeName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n      \"etag\": \"W/\\\"82c361d3-c415-45de-92d0-dd216eff9246\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"11.0.0.0/8\",\r\n        \"nextHopType\": \"VnetLocal\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '449',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd6cd7573-cdf5-441d-bef2-2c6a90f2f8e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd8627abb-b666-44e5-b56c-82d40cc1b90b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100540Z:d8627abb-b666-44e5-b56c-82d40cc1b90b',
  date: 'Fri, 01 Sep 2017 10:05:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"routeName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n      \"etag\": \"W/\\\"82c361d3-c415-45de-92d0-dd216eff9246\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"addressPrefix\": \"11.0.0.0/8\",\r\n        \"nextHopType\": \"VnetLocal\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '449',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd6cd7573-cdf5-441d-bef2-2c6a90f2f8e8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'd8627abb-b666-44e5-b56c-82d40cc1b90b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T100540Z:d8627abb-b666-44e5-b56c-82d40cc1b90b',
  date: 'Fri, 01 Sep 2017 10:05:39 GMT',
  connection: 'close' });
 return result; }]];
