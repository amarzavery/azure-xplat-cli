// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e55e7c87-7bdc-445b-8213-56cdfca27374',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'fc53715f-c87b-43fc-9876-78ef5139cf26',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"f825a2be-346d-4a84-bc84-afd0008829dd\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"f825a2be-346d-4a84-bc84-afd0008829dd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2415',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '62bdba05-f9c5-4338-825a-1f5cf7701079',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'dfeea960-92c7-4ed2-a831-764f509f1db7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124217Z:dfeea960-92c7-4ed2-a831-764f509f1db7',
  date: 'Tue, 18 Apr 2017 12:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"f825a2be-346d-4a84-bc84-afd0008829dd\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"f825a2be-346d-4a84-bc84-afd0008829dd\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2415',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '62bdba05-f9c5-4338-825a-1f5cf7701079',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'dfeea960-92c7-4ed2-a831-764f509f1db7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124217Z:dfeea960-92c7-4ed2-a831-764f509f1db7',
  date: 'Tue, 18 Apr 2017 12:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"0643a793-8330-43a5-9a61-0a93a6633f94\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"0643a793-8330-43a5-9a61-0a93a6633f94\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2027',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'fb002059-3165-49e3-b6c6-77bb6619e387',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/fb002059-3165-49e3-b6c6-77bb6619e387?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3acd3307-6a31-40f6-8e1b-9a4deed8e8f3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124217Z:3acd3307-6a31-40f6-8e1b-9a4deed8e8f3',
  date: 'Tue, 18 Apr 2017 12:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"0643a793-8330-43a5-9a61-0a93a6633f94\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"0643a793-8330-43a5-9a61-0a93a6633f94\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2027',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'fb002059-3165-49e3-b6c6-77bb6619e387',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/fb002059-3165-49e3-b6c6-77bb6619e387?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3acd3307-6a31-40f6-8e1b-9a4deed8e8f3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124217Z:3acd3307-6a31-40f6-8e1b-9a4deed8e8f3',
  date: 'Tue, 18 Apr 2017 12:42:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/fb002059-3165-49e3-b6c6-77bb6619e387?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11306821-bf4b-4d34-a0d2-cd183da97dae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '96990d92-2f1b-4120-8b4e-2cd5653784bb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124248Z:96990d92-2f1b-4120-8b4e-2cd5653784bb',
  date: 'Tue, 18 Apr 2017 12:42:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/fb002059-3165-49e3-b6c6-77bb6619e387?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '11306821-bf4b-4d34-a0d2-cd183da97dae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '96990d92-2f1b-4120-8b4e-2cd5653784bb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124248Z:96990d92-2f1b-4120-8b4e-2cd5653784bb',
  date: 'Tue, 18 Apr 2017 12:42:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"17bd232e-1f6d-4ce2-9ca7-8973026b5589\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"17bd232e-1f6d-4ce2-9ca7-8973026b5589\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2204',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a2fb2943-0229-4dad-95ec-da53606685d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '0ad1d867-afab-4903-9412-0dd9d4237214',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124248Z:0ad1d867-afab-4903-9412-0dd9d4237214',
  date: 'Tue, 18 Apr 2017 12:42:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"17bd232e-1f6d-4ce2-9ca7-8973026b5589\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"17bd232e-1f6d-4ce2-9ca7-8973026b5589\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2204',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a2fb2943-0229-4dad-95ec-da53606685d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '0ad1d867-afab-4903-9412-0dd9d4237214',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124248Z:0ad1d867-afab-4903-9412-0dd9d4237214',
  date: 'Tue, 18 Apr 2017 12:42:48 GMT',
  connection: 'close' });
 return result; }]];
