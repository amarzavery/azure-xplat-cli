// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9643/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'f25f1b4d-506b-4287-96ca-b35c9ff4bfce',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'fcf4cf0b-ebe2-4c08-9b9a-07b9fe623026',
  'x-ms-routing-request-id': 'WESTUS:20160428T093451Z:fcf4cf0b-ebe2-4c08-9b9a-07b9fe623026',
  date: 'Thu, 28 Apr 2016 09:34:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9643/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'f25f1b4d-506b-4287-96ca-b35c9ff4bfce',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'fcf4cf0b-ebe2-4c08-9b9a-07b9fe623026',
  'x-ms-routing-request-id': 'WESTUS:20160428T093451Z:fcf4cf0b-ebe2-4c08-9b9a-07b9fe623026',
  date: 'Thu, 28 Apr 2016 09:34:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:34:50.7762997+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f25f1b4d-506b-4287-96ca-b35c9ff4bfce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '39af16a1-aae6-4b36-a96a-9dbcb2660461',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '962f41d8-c8a0-471e-bc08-4be0bb9245cd',
  'x-ms-routing-request-id': 'WESTUS:20160428T093522Z:962f41d8-c8a0-471e-bc08-4be0bb9245cd',
  date: 'Thu, 28 Apr 2016 09:35:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:34:50.7762997+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f25f1b4d-506b-4287-96ca-b35c9ff4bfce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '39af16a1-aae6-4b36-a96a-9dbcb2660461',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '962f41d8-c8a0-471e-bc08-4be0bb9245cd',
  'x-ms-routing-request-id': 'WESTUS:20160428T093522Z:962f41d8-c8a0-471e-bc08-4be0bb9245cd',
  date: 'Thu, 28 Apr 2016 09:35:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:34:50.7762997+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f25f1b4d-506b-4287-96ca-b35c9ff4bfce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '8492754e-a012-4b8d-b914-ed86dfb18b7f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'cc31cb92-ccb5-474a-8790-b7246a038677',
  'x-ms-routing-request-id': 'WESTUS:20160428T093553Z:cc31cb92-ccb5-474a-8790-b7246a038677',
  date: 'Thu, 28 Apr 2016 09:35:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:34:50.7762997+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f25f1b4d-506b-4287-96ca-b35c9ff4bfce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '8492754e-a012-4b8d-b914-ed86dfb18b7f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': 'cc31cb92-ccb5-474a-8790-b7246a038677',
  'x-ms-routing-request-id': 'WESTUS:20160428T093553Z:cc31cb92-ccb5-474a-8790-b7246a038677',
  date: 'Thu, 28 Apr 2016 09:35:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:34:50.7762997+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f25f1b4d-506b-4287-96ca-b35c9ff4bfce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '3d7bb7d1-0244-4986-aa5c-9e26c158d49d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '500b0df0-9c7d-4031-8ead-eb8bc5d495b8',
  'x-ms-routing-request-id': 'WESTUS:20160428T093624Z:500b0df0-9c7d-4031-8ead-eb8bc5d495b8',
  date: 'Thu, 28 Apr 2016 09:36:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:34:50.7762997+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f25f1b4d-506b-4287-96ca-b35c9ff4bfce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '3d7bb7d1-0244-4986-aa5c-9e26c158d49d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '500b0df0-9c7d-4031-8ead-eb8bc5d495b8',
  'x-ms-routing-request-id': 'WESTUS:20160428T093624Z:500b0df0-9c7d-4031-8ead-eb8bc5d495b8',
  date: 'Thu, 28 Apr 2016 09:36:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:34:50.7762997+00:00\",\r\n  \"endTime\": \"2016-04-28T09:36:44.026992+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"f25f1b4d-506b-4287-96ca-b35c9ff4bfce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '8b8e98bf-376b-4d17-ac55-0baf17a1ad62',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '26fcd1ce-acae-4ca7-ae26-51d99ca4f409',
  'x-ms-routing-request-id': 'WESTUS:20160428T093655Z:26fcd1ce-acae-4ca7-ae26-51d99ca4f409',
  date: 'Thu, 28 Apr 2016 09:36:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f25f1b4d-506b-4287-96ca-b35c9ff4bfce?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:34:50.7762997+00:00\",\r\n  \"endTime\": \"2016-04-28T09:36:44.026992+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"f25f1b4d-506b-4287-96ca-b35c9ff4bfce\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '8b8e98bf-376b-4d17-ac55-0baf17a1ad62',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '26fcd1ce-acae-4ca7-ae26-51d99ca4f409',
  'x-ms-routing-request-id': 'WESTUS:20160428T093655Z:26fcd1ce-acae-4ca7-ae26-51d99ca4f409',
  date: 'Thu, 28 Apr 2016 09:36:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9643/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'c7e052fa-d262-4bc4-90bd-b8c6ddb4c829',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4f598b67-a433-4b11-9850-b70f4fa9af04',
  'x-ms-routing-request-id': 'WESTUS:20160428T093657Z:4f598b67-a433-4b11-9850-b70f4fa9af04',
  date: 'Thu, 28 Apr 2016 09:36:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate9643/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'c7e052fa-d262-4bc4-90bd-b8c6ddb4c829',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4f598b67-a433-4b11-9850-b70f4fa9af04',
  'x-ms-routing-request-id': 'WESTUS:20160428T093657Z:4f598b67-a433-4b11-9850-b70f4fa9af04',
  date: 'Thu, 28 Apr 2016 09:36:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:36:56.9958548+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c7e052fa-d262-4bc4-90bd-b8c6ddb4c829\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'eabccc11-b5a0-497d-8f2e-a5f0cfcc91fc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '1ecf9882-1f4e-4a53-97f9-4ce57ecee473',
  'x-ms-routing-request-id': 'WESTUS:20160428T093728Z:1ecf9882-1f4e-4a53-97f9-4ce57ecee473',
  date: 'Thu, 28 Apr 2016 09:37:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:36:56.9958548+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c7e052fa-d262-4bc4-90bd-b8c6ddb4c829\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'eabccc11-b5a0-497d-8f2e-a5f0cfcc91fc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '1ecf9882-1f4e-4a53-97f9-4ce57ecee473',
  'x-ms-routing-request-id': 'WESTUS:20160428T093728Z:1ecf9882-1f4e-4a53-97f9-4ce57ecee473',
  date: 'Thu, 28 Apr 2016 09:37:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:36:56.9958548+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c7e052fa-d262-4bc4-90bd-b8c6ddb4c829\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '9c73f83b-f1e7-4435-ac3b-5d07cf8b44c7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': '030c84fe-9ff9-4019-aa19-5aab82e63ba6',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T093759Z:030c84fe-9ff9-4019-aa19-5aab82e63ba6',
  date: 'Thu, 28 Apr 2016 09:37:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:36:56.9958548+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c7e052fa-d262-4bc4-90bd-b8c6ddb4c829\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '9c73f83b-f1e7-4435-ac3b-5d07cf8b44c7',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14921',
  'x-ms-correlation-request-id': '030c84fe-9ff9-4019-aa19-5aab82e63ba6',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T093759Z:030c84fe-9ff9-4019-aa19-5aab82e63ba6',
  date: 'Thu, 28 Apr 2016 09:37:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:36:56.9958548+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c7e052fa-d262-4bc4-90bd-b8c6ddb4c829\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'c4ba2e1b-cdad-484a-a628-660dfbdd6981',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14913',
  'x-ms-correlation-request-id': '339ee214-4760-48c3-8076-f134da53146d',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T093830Z:339ee214-4760-48c3-8076-f134da53146d',
  date: 'Thu, 28 Apr 2016 09:38:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:36:56.9958548+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"c7e052fa-d262-4bc4-90bd-b8c6ddb4c829\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'c4ba2e1b-cdad-484a-a628-660dfbdd6981',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14913',
  'x-ms-correlation-request-id': '339ee214-4760-48c3-8076-f134da53146d',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T093830Z:339ee214-4760-48c3-8076-f134da53146d',
  date: 'Thu, 28 Apr 2016 09:38:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:36:56.9958548+00:00\",\r\n  \"endTime\": \"2016-04-28T09:38:50.074726+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c7e052fa-d262-4bc4-90bd-b8c6ddb4c829\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'da5f462e-b861-4dd7-b7af-9d4cd386a2ee',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14925',
  'x-ms-correlation-request-id': '71b7c387-4703-4a51-b9f5-701dcf06f8e1',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T093901Z:71b7c387-4703-4a51-b9f5-701dcf06f8e1',
  date: 'Thu, 28 Apr 2016 09:39:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/c7e052fa-d262-4bc4-90bd-b8c6ddb4c829?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T09:36:56.9958548+00:00\",\r\n  \"endTime\": \"2016-04-28T09:38:50.074726+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"c7e052fa-d262-4bc4-90bd-b8c6ddb4c829\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'da5f462e-b861-4dd7-b7af-9d4cd386a2ee',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14925',
  'x-ms-correlation-request-id': '71b7c387-4703-4a51-b9f5-701dcf06f8e1',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T093901Z:71b7c387-4703-4a51-b9f5-701dcf06f8e1',
  date: 'Thu, 28 Apr 2016 09:39:00 GMT',
  connection: 'close' });
 return result; }]];