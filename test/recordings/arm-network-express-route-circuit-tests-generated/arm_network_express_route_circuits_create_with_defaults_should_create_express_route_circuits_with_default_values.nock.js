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
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '78b17c4b-ee2b-49b8-9cac-22c28fb4a6ed',
  'x-ms-correlation-request-id': '78b17c4b-ee2b-49b8-9cac-22c28fb4a6ed',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T113852Z:78b17c4b-ee2b-49b8-9cac-22c28fb4a6ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 11:38:51 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName' under resource group 'xplat-test-circuit' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '78b17c4b-ee2b-49b8-9cac-22c28fb4a6ed',
  'x-ms-correlation-request-id': '78b17c4b-ee2b-49b8-9cac-22c28fb4a6ed',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T113852Z:78b17c4b-ee2b-49b8-9cac-22c28fb4a6ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 01 Sep 2017 11:38:51 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"a8b774ed-98af-48b8-aa20-9a0c88dc5060\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"8eda7c19-859b-4abb-8359-256e9fa38d15\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1002',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '42a49188-4539-4c23-842a-e85af85b499b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/42a49188-4539-4c23-842a-e85af85b499b?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9a3ce146-d8ad-46a3-aa9d-781b17ee249c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T113857Z:9a3ce146-d8ad-46a3-aa9d-781b17ee249c',
  date: 'Fri, 01 Sep 2017 11:38:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01', '*')
  .reply(201, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"a8b774ed-98af-48b8-aa20-9a0c88dc5060\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"8eda7c19-859b-4abb-8359-256e9fa38d15\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1002',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '42a49188-4539-4c23-842a-e85af85b499b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/42a49188-4539-4c23-842a-e85af85b499b?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '9a3ce146-d8ad-46a3-aa9d-781b17ee249c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T113857Z:9a3ce146-d8ad-46a3-aa9d-781b17ee249c',
  date: 'Fri, 01 Sep 2017 11:38:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/42a49188-4539-4c23-842a-e85af85b499b?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '24c4cc4a-ebe6-4bed-b86d-fb622e350868',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ade30085-955b-4e98-9521-b18e91a2f7aa',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T113929Z:ade30085-955b-4e98-9521-b18e91a2f7aa',
  date: 'Fri, 01 Sep 2017 11:39:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/42a49188-4539-4c23-842a-e85af85b499b?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '24c4cc4a-ebe6-4bed-b86d-fb622e350868',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ade30085-955b-4e98-9521-b18e91a2f7aa',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T113929Z:ade30085-955b-4e98-9521-b18e91a2f7aa',
  date: 'Fri, 01 Sep 2017 11:39:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/42a49188-4539-4c23-842a-e85af85b499b?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '82cd3852-bd0c-43b4-8883-32ae1a252be7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '9f9b064b-49ba-4b87-b3ff-795ef5033075',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114000Z:9f9b064b-49ba-4b87-b3ff-795ef5033075',
  date: 'Fri, 01 Sep 2017 11:39:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/42a49188-4539-4c23-842a-e85af85b499b?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '82cd3852-bd0c-43b4-8883-32ae1a252be7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '9f9b064b-49ba-4b87-b3ff-795ef5033075',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114000Z:9f9b064b-49ba-4b87-b3ff-795ef5033075',
  date: 'Fri, 01 Sep 2017 11:39:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"965bf8d6-cb91-459e-be8d-75a7f4e8735c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8eda7c19-859b-4abb-8359-256e9fa38d15\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"77a551c7-1704-46d0-b0e1-0e6b8e1bdbd7\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bf87c650-03f8-4027-8ef0-1bfe873a8563',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'af10a107-692e-40ad-ac1c-fbb354276065',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114002Z:af10a107-692e-40ad-ac1c-fbb354276065',
  date: 'Fri, 01 Sep 2017 11:40:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"965bf8d6-cb91-459e-be8d-75a7f4e8735c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8eda7c19-859b-4abb-8359-256e9fa38d15\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"77a551c7-1704-46d0-b0e1-0e6b8e1bdbd7\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bf87c650-03f8-4027-8ef0-1bfe873a8563',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'af10a107-692e-40ad-ac1c-fbb354276065',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114002Z:af10a107-692e-40ad-ac1c-fbb354276065',
  date: 'Fri, 01 Sep 2017 11:40:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"965bf8d6-cb91-459e-be8d-75a7f4e8735c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8eda7c19-859b-4abb-8359-256e9fa38d15\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"77a551c7-1704-46d0-b0e1-0e6b8e1bdbd7\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '095e11da-99b3-48a4-a79c-0b9678dc6370',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ffd7528e-abad-486c-bd2d-6ee3afaf05c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114004Z:ffd7528e-abad-486c-bd2d-6ee3afaf05c6',
  date: 'Fri, 01 Sep 2017 11:40:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitsDefaultName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName\",\r\n  \"etag\": \"W/\\\"965bf8d6-cb91-459e-be8d-75a7f4e8735c\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"brazilsouth\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8eda7c19-859b-4abb-8359-256e9fa38d15\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"Interxion\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"77a551c7-1704-46d0-b0e1-0e6b8e1bdbd7\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '095e11da-99b3-48a4-a79c-0b9678dc6370',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ffd7528e-abad-486c-bd2d-6ee3afaf05c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114004Z:ffd7528e-abad-486c-bd2d-6ee3afaf05c6',
  date: 'Fri, 01 Sep 2017 11:40:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operationResults/59896601-467a-4fb4-946c-d8ff98e4407d?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '59896601-467a-4fb4-946c-d8ff98e4407d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/59896601-467a-4fb4-946c-d8ff98e4407d?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'bf288e86-4a75-4b83-a28d-bae70cd1108f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114006Z:bf288e86-4a75-4b83-a28d-bae70cd1108f',
  date: 'Fri, 01 Sep 2017 11:40:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-circuit/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitsDefaultName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operationResults/59896601-467a-4fb4-946c-d8ff98e4407d?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '59896601-467a-4fb4-946c-d8ff98e4407d',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/59896601-467a-4fb4-946c-d8ff98e4407d?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'bf288e86-4a75-4b83-a28d-bae70cd1108f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114006Z:bf288e86-4a75-4b83-a28d-bae70cd1108f',
  date: 'Fri, 01 Sep 2017 11:40:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/59896601-467a-4fb4-946c-d8ff98e4407d?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a9526163-5e41-4085-b4e9-645ecf70c427',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'b3f8fef3-05a1-4cd8-8b65-f177762be228',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114038Z:b3f8fef3-05a1-4cd8-8b65-f177762be228',
  date: 'Fri, 01 Sep 2017 11:40:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/59896601-467a-4fb4-946c-d8ff98e4407d?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a9526163-5e41-4085-b4e9-645ecf70c427',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'b3f8fef3-05a1-4cd8-8b65-f177762be228',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114038Z:b3f8fef3-05a1-4cd8-8b65-f177762be228',
  date: 'Fri, 01 Sep 2017 11:40:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/59896601-467a-4fb4-946c-d8ff98e4407d?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '28ec5139-9bfc-4a8f-9f56-11d9e292f091',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '9624dde0-39e9-44ae-a0db-66e33b2af1cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114109Z:9624dde0-39e9-44ae-a0db-66e33b2af1cb',
  date: 'Fri, 01 Sep 2017 11:41:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/59896601-467a-4fb4-946c-d8ff98e4407d?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '28ec5139-9bfc-4a8f-9f56-11d9e292f091',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '9624dde0-39e9-44ae-a0db-66e33b2af1cb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T114109Z:9624dde0-39e9-44ae-a0db-66e33b2af1cb',
  date: 'Fri, 01 Sep 2017 11:41:09 GMT',
  connection: 'close' });
 return result; }]];
