// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3BBFA8A37D4BE\",\"lastModified\":\"2016-08-04T00:01:52.4504766Z\",\"creationTime\":\"2016-08-04T00:01:27.6149957Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:01:27.6149957Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-04T00:01:27.779986Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo updated\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:01:52 GMT',
  etag: '0x8D3BBFA8A37D4BE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a654b62e-a907-4cd1-80eb-1cdcead506f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '7ed0b10a-45ba-4e33-a9ab-f5fda4fb742b',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3BBFA8A37D4BE\",\"lastModified\":\"2016-08-04T00:01:52.4504766Z\",\"creationTime\":\"2016-08-04T00:01:27.6149957Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:01:27.6149957Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-04T00:01:27.779986Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo updated\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:01:52 GMT',
  etag: '0x8D3BBFA8A37D4BE',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a654b62e-a907-4cd1-80eb-1cdcead506f4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '7ed0b10a-45ba-4e33-a9ab-f5fda4fb742b',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatCreatedPool/updateproperties?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 04 Aug 2016 00:01:53 GMT',
  etag: '0x8D3BBFA8B0AF921',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4a65fb23-1490-47c3-b358-d534044de5ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f82528bc-238c-40f7-863f-03f643d77bcb',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatCreatedPool/updateproperties',
  date: 'Thu, 04 Aug 2016 00:01:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatCreatedPool/updateproperties?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 04 Aug 2016 00:01:53 GMT',
  etag: '0x8D3BBFA8B0AF921',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4a65fb23-1490-47c3-b358-d534044de5ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'f82528bc-238c-40f7-863f-03f643d77bcb',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/pools/xplatCreatedPool/updateproperties',
  date: 'Thu, 04 Aug 2016 00:01:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3BBFA8B0AF921\",\"lastModified\":\"2016-08-04T00:01:53.8342177Z\",\"creationTime\":\"2016-08-04T00:01:27.6149957Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:01:27.6149957Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-04T00:01:27.779986Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"hostname\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:01:53 GMT',
  etag: '0x8D3BBFA8B0AF921',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ddab4850-dd73-4e2d-9195-b97127c9e36a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '02376bba-00c1-4b73-8748-a3d8bee7bdc7',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3BBFA8B0AF921\",\"lastModified\":\"2016-08-04T00:01:53.8342177Z\",\"creationTime\":\"2016-08-04T00:01:27.6149957Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-04T00:01:27.6149957Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-04T00:01:27.779986Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"hostname\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Thu, 04 Aug 2016 00:01:53 GMT',
  etag: '0x8D3BBFA8B0AF921',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ddab4850-dd73-4e2d-9195-b97127c9e36a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '02376bba-00c1-4b73-8748-a3d8bee7bdc7',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:54 GMT',
  connection: 'close' });
 return result; }]];