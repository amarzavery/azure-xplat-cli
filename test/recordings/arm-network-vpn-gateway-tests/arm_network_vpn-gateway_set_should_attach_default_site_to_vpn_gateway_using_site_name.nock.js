// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"35bd23af-b689-4d99-b9c8-070ccb9b9b0f\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"35bd23af-b689-4d99-b9c8-070ccb9b9b0f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e208ee44-2547-43bb-9c80-35a1e2114635',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'cea94d8d-972c-4cdd-9787-09618af1ea22',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090846Z:cea94d8d-972c-4cdd-9787-09618af1ea22',
  date: 'Mon, 11 Apr 2016 09:08:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"35bd23af-b689-4d99-b9c8-070ccb9b9b0f\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"35bd23af-b689-4d99-b9c8-070ccb9b9b0f\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2206',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e208ee44-2547-43bb-9c80-35a1e2114635',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'cea94d8d-972c-4cdd-9787-09618af1ea22',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090846Z:cea94d8d-972c-4cdd-9787-09618af1ea22',
  date: 'Mon, 11 Apr 2016 09:08:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"be08f573-2cde-48c5-939e-d3ccc9b35c1b\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2672fc7-95d2-4551-ae3e-ea1089b3d8bb\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"be08f573-2cde-48c5-939e-d3ccc9b35c1b"',
  'x-ms-request-id': 'a5610b0e-077f-47f4-a8e7-ed3a99cc3481',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '2f9b407b-cc19-4e61-85d5-7fdb070e9d08',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090847Z:2f9b407b-cc19-4e61-85d5-7fdb070e9d08',
  date: 'Mon, 11 Apr 2016 09:08:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-local-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n  \"etag\": \"W/\\\"be08f573-2cde-48c5-939e-d3ccc9b35c1b\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e2672fc7-95d2-4551-ae3e-ea1089b3d8bb\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/24\"\r\n      ]\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.0\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '667',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"be08f573-2cde-48c5-939e-d3ccc9b35c1b"',
  'x-ms-request-id': 'a5610b0e-077f-47f4-a8e7-ed3a99cc3481',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '2f9b407b-cc19-4e61-85d5-7fdb070e9d08',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090847Z:2f9b407b-cc19-4e61-85d5-7fdb070e9d08',
  date: 'Mon, 11 Apr 2016 09:08:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"8f6325f8-e714-4305-9516-fdddff7a24e3\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"8f6325f8-e714-4305-9516-fdddff7a24e3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2239',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '618d87dd-6a15-4f24-b2f4-bb5ca115869f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/618d87dd-6a15-4f24-b2f4-bb5ca115869f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5070bf29-3e05-4cb4-9320-70fdb38a3f38',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090847Z:5070bf29-3e05-4cb4-9320-70fdb38a3f38',
  date: 'Mon, 11 Apr 2016 09:08:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"8f6325f8-e714-4305-9516-fdddff7a24e3\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"8f6325f8-e714-4305-9516-fdddff7a24e3\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2239',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '618d87dd-6a15-4f24-b2f4-bb5ca115869f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/618d87dd-6a15-4f24-b2f4-bb5ca115869f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5070bf29-3e05-4cb4-9320-70fdb38a3f38',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090847Z:5070bf29-3e05-4cb4-9320-70fdb38a3f38',
  date: 'Mon, 11 Apr 2016 09:08:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/618d87dd-6a15-4f24-b2f4-bb5ca115869f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '73269206-eea2-406f-b22f-bef68d47b059',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'c9439c31-0c26-400a-9864-9c6bdd459f0b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090918Z:c9439c31-0c26-400a-9864-9c6bdd459f0b',
  date: 'Mon, 11 Apr 2016 09:09:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/618d87dd-6a15-4f24-b2f4-bb5ca115869f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '73269206-eea2-406f-b22f-bef68d47b059',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'c9439c31-0c26-400a-9864-9c6bdd459f0b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090918Z:c9439c31-0c26-400a-9864-9c6bdd459f0b',
  date: 'Mon, 11 Apr 2016 09:09:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/618d87dd-6a15-4f24-b2f4-bb5ca115869f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a569302d-9788-4bf1-9306-44d5051fc7d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '6f11a9a5-1a66-45a8-bfe6-17c517ab2c06',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090948Z:6f11a9a5-1a66-45a8-bfe6-17c517ab2c06',
  date: 'Mon, 11 Apr 2016 09:09:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operations/618d87dd-6a15-4f24-b2f4-bb5ca115869f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a569302d-9788-4bf1-9306-44d5051fc7d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '6f11a9a5-1a66-45a8-bfe6-17c517ab2c06',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090948Z:6f11a9a5-1a66-45a8-bfe6-17c517ab2c06',
  date: 'Mon, 11 Apr 2016 09:09:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"08adf5da-f5de-42a7-a1fa-09ebb79a93d2\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"08adf5da-f5de-42a7-a1fa-09ebb79a93d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2416',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '71b7be52-8e03-464b-9909-d313476be272',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '5050a141-f2cb-4724-b42b-9bd7f3ff7720',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090949Z:5050a141-f2cb-4724-b42b-9bd7f3ff7720',
  date: 'Mon, 11 Apr 2016 09:09:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualnetworkgateways/test-vpn-gateway?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"08adf5da-f5de-42a7-a1fa-09ebb79a93d2\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"7785d7b6-903f-4d95-bace-928bfc188ceb\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/ip-config\",\r\n        \"etag\": \"W/\\\"08adf5da-f5de-42a7-a1fa-09ebb79a93d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.1.0.12\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 65515,\r\n      \"bgpPeeringAddress\": \"10.1.0.14\",\r\n      \"peerWeight\": 0\r\n    },\r\n    \"gatewayDefaultSite\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vpn-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2416',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '71b7be52-8e03-464b-9909-d313476be272',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '5050a141-f2cb-4724-b42b-9bd7f3ff7720',
  'x-ms-routing-request-id': 'WESTEUROPE:20160411T090949Z:5050a141-f2cb-4724-b42b-9bd7f3ff7720',
  date: 'Mon, 11 Apr 2016 09:09:49 GMT',
  connection: 'close' });
 return result; }]];