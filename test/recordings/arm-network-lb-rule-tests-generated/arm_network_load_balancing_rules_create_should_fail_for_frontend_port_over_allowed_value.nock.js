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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"4b202249-6e41-41f3-a72d-8f4a06416dcb\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ac94904a-b954-41ec-b2e6-7503a3d5af58\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"4b202249-6e41-41f3-a72d-8f4a06416dcb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"4b202249-6e41-41f3-a72d-8f4a06416dcb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"probeName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/probes/probeName\",\r\n        \"etag\": \"W/\\\"4b202249-6e41-41f3-a72d-8f4a06416dcb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2286',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4b202249-6e41-41f3-a72d-8f4a06416dcb"',
  'x-ms-request-id': '05e7f98c-e834-484e-8665-9c891b2cb198',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '30a3d7e7-bc56-4f91-9232-ea5453857d84',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T110345Z:30a3d7e7-bc56-4f91-9232-ea5453857d84',
  date: 'Fri, 01 Sep 2017 11:03:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"4b202249-6e41-41f3-a72d-8f4a06416dcb\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"ac94904a-b954-41ec-b2e6-7503a3d5af58\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"4b202249-6e41-41f3-a72d-8f4a06416dcb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"4b202249-6e41-41f3-a72d-8f4a06416dcb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"probeName\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/probes/probeName\",\r\n        \"etag\": \"W/\\\"4b202249-6e41-41f3-a72d-8f4a06416dcb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2286',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4b202249-6e41-41f3-a72d-8f4a06416dcb"',
  'x-ms-request-id': '05e7f98c-e834-484e-8665-9c891b2cb198',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '30a3d7e7-bc56-4f91-9232-ea5453857d84',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T110345Z:30a3d7e7-bc56-4f91-9232-ea5453857d84',
  date: 'Fri, 01 Sep 2017 11:03:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource FrontendPortOverAllowedValueName has invalid value of FrontendPort (65535). The value must be between 0 and 65534.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '223',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b6b72960-675e-4d17-8326-72a6d5b52e26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '25ce4314-eecb-4267-ab61-b928ac1a3c3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T110346Z:25ce4314-eecb-4267-ab61-b928ac1a3c3e',
  date: 'Fri, 01 Sep 2017 11:03:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-09-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource FrontendPortOverAllowedValueName has invalid value of FrontendPort (65535). The value must be between 0 and 65534.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '223',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b6b72960-675e-4d17-8326-72a6d5b52e26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '25ce4314-eecb-4267-ab61-b928ac1a3c3e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170901T110346Z:25ce4314-eecb-4267-ab61-b928ac1a3c3e',
  date: 'Fri, 01 Sep 2017 11:03:46 GMT',
  connection: 'close' });
 return result; }]];
