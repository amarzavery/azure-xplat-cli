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
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate6772/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '15ef381a-a1a8-4819-a282-c7f25cf19ce4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3037c95d-ed55-4e4f-8aed-3e489a8780b1',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102000Z:3037c95d-ed55-4e4f-8aed-3e489a8780b1',
  date: 'Thu, 28 Apr 2016 10:20:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstVmssGCreate6772/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss5?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '15ef381a-a1a8-4819-a282-c7f25cf19ce4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '3037c95d-ed55-4e4f-8aed-3e489a8780b1',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102000Z:3037c95d-ed55-4e4f-8aed-3e489a8780b1',
  date: 'Thu, 28 Apr 2016 10:20:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '3c75af72-bcbe-4a6f-acd4-359c3d9b8ba8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'd68cd55e-2d32-4570-9de6-ea9b53976212',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102031Z:d68cd55e-2d32-4570-9de6-ea9b53976212',
  date: 'Thu, 28 Apr 2016 10:20:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '3c75af72-bcbe-4a6f-acd4-359c3d9b8ba8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'd68cd55e-2d32-4570-9de6-ea9b53976212',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102031Z:d68cd55e-2d32-4570-9de6-ea9b53976212',
  date: 'Thu, 28 Apr 2016 10:20:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'c4d01509-6d3b-4972-a44f-455f46f1c043',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '219b2359-52f4-4e4b-b694-7b44b1d10510',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102103Z:219b2359-52f4-4e4b-b694-7b44b1d10510',
  date: 'Thu, 28 Apr 2016 10:21:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'c4d01509-6d3b-4972-a44f-455f46f1c043',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '219b2359-52f4-4e4b-b694-7b44b1d10510',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102103Z:219b2359-52f4-4e4b-b694-7b44b1d10510',
  date: 'Thu, 28 Apr 2016 10:21:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'b6977208-0f29-49a3-811f-6de016bc669b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'a2fc4611-c61b-4544-a4e3-516462d59e13',
  'x-ms-routing-request-id': 'WESTUS:20160428T102134Z:a2fc4611-c61b-4544-a4e3-516462d59e13',
  date: 'Thu, 28 Apr 2016 10:21:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': 'b6977208-0f29-49a3-811f-6de016bc669b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'a2fc4611-c61b-4544-a4e3-516462d59e13',
  'x-ms-routing-request-id': 'WESTUS:20160428T102134Z:a2fc4611-c61b-4544-a4e3-516462d59e13',
  date: 'Thu, 28 Apr 2016 10:21:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '8fa14dbd-1933-48ac-84d4-2fd1435fdce8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'd4ed36f9-234e-4337-8686-ebbd7eea818a',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102204Z:d4ed36f9-234e-4337-8686-ebbd7eea818a',
  date: 'Thu, 28 Apr 2016 10:22:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '8fa14dbd-1933-48ac-84d4-2fd1435fdce8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'd4ed36f9-234e-4337-8686-ebbd7eea818a',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102204Z:d4ed36f9-234e-4337-8686-ebbd7eea818a',
  date: 'Thu, 28 Apr 2016 10:22:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"endTime\": \"2016-04-28T10:22:15.4976279+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '25b80440-4c11-48b1-8369-94399ff1c9c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '01c932a5-1521-4ba1-b6d7-b6029fd1ddbe',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102236Z:01c932a5-1521-4ba1-b6d7-b6029fd1ddbe',
  date: 'Thu, 28 Apr 2016 10:22:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/15ef381a-a1a8-4819-a282-c7f25cf19ce4?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-04-28T10:20:00.1686338+00:00\",\r\n  \"endTime\": \"2016-04-28T10:22:15.4976279+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"15ef381a-a1a8-4819-a282-c7f25cf19ce4\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131052441155687091',
  'x-ms-request-id': '25b80440-4c11-48b1-8369-94399ff1c9c9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '01c932a5-1521-4ba1-b6d7-b6029fd1ddbe',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T102236Z:01c932a5-1521-4ba1-b6d7-b6029fd1ddbe',
  date: 'Thu, 28 Apr 2016 10:22:35 GMT',
  connection: 'close' });
 return result; }]];