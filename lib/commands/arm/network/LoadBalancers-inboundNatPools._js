/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var loadBalancers = network.category('lb')
    .description($('Commands to manage load balancers'));
  var inboundNatPools = loadBalancers.category('inbound-nat-pool')
    .description($('Commands to manage inbound nat pools'));

  var defaultProtocol = 'TCP';
  var defaultFrontendPortRangeStart = '1';
  var defaultFrontendPortRangeEnd = '65534';
  var defaultBackendPort = '80';

  inboundNatPools.command('create [resource-group] [lb-name] [name]')
    .description($('Create an inbound nat pools'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat pool'))
    .option('-i, --frontend-ip-name [frontend-ip-name]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-id'))
    .option('-d, --frontend-ip-id [frontend-ip-id]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-name'))
    .option('-p, --protocol [protocol]', $('the transport protocol for the' +
      '\n     endpoint. Possible values are: \'Udp\' or \'Tcp\''))
    .option('-f, --frontend-port-range-start [frontend-port-range-start]', $('the first port number in the range of' +
      '\n     external ports that will be used to provide Inbound Nat to NICs associated with' +
      '\n     a load balancer. Acceptable values range between 1 and 65534'))
    .option('-e, --frontend-port-range-end [frontend-port-range-end]', $('the last port number in the range of' +
      '\n     external ports that will be used to provide Inbound Nat to NICs associated with' +
      '\n     a load balancer. Acceptable values range between 1 and 65535'))
    .option('-b, --backend-port [backend-port]', $('the port used for internal connections' +
      '\n     on the endpoint. Acceptable values are between 1 and 65535'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var index = 0;
      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      if(utils.findFirstCaseIgnore(loadBalancer.inboundNatPools, {name: name})) {
        throw new Error(util.format($('inbound nat pools with name "%s" already exists in the "%s"'), name, lbName));
      }

      var parameters = {};
      if(!parameters.inboundNatPools) {
        parameters.inboundNatPools = [];
      }
      if(!parameters.inboundNatPools[index]) {
        parameters.inboundNatPools[index] = {};
      }
      if(!parameters.inboundNatPools[index].frontendIPConfiguration) {
        parameters.inboundNatPools[index].frontendIPConfiguration = {};
      }
      if(options.frontendIpId) {
        if(options.frontendIpName) {
          cli.output.warn($('--frontend-ip-name parameter will be ignored because --frontend-ip-id and --frontend-ip-name are mutually exclusive'));
        }
        parameters.inboundNatPools[index].frontendIPConfiguration.id = options.frontendIpId;
      } else if(options.frontendIpName) {
        var referredfrontendIPConfiguration = utils.findFirstCaseIgnore(loadBalancer.frontendIPConfigurations, {name: options.frontendIpName});
        if(!referredfrontendIPConfiguration) {
          throw new Error(util.format($('No frontend ip configuration with name "%s" found'), options.frontendIpName));
        }
        var idContainerfrontendIPConfiguration = referredfrontendIPConfiguration;
        parameters.inboundNatPools[index].frontendIPConfiguration.id = idContainerfrontendIPConfiguration.id;
      } else if(useDefaults) {
        if(loadBalancer.frontendIPConfigurations.length !== 0) {
          parameters.inboundNatPools[index].frontendIPConfiguration.id = loadBalancer.frontendIPConfigurations[0].id;
        } else {
          throw new Error(util.format($('Resource has no frontend ip configuration defined')));
        }
      }

      if(options.protocol) {
        parameters.inboundNatPools[index].protocol = validation.isIn(options.protocol, ['Udp', 'Tcp'], '--protocol');
      } else if(useDefaults) {
        parameters.inboundNatPools[index].protocol = defaultProtocol;
      }

      if(options.frontendPortRangeStart) {
        parameters.inboundNatPools[index].frontendPortRangeStart = parseInt(options.frontendPortRangeStart, 10);
      } else if(useDefaults) {
        parameters.inboundNatPools[index].frontendPortRangeStart = parseInt(defaultFrontendPortRangeStart, 10);
      }

      if(options.frontendPortRangeEnd) {
        parameters.inboundNatPools[index].frontendPortRangeEnd = parseInt(options.frontendPortRangeEnd, 10);
      } else if(useDefaults) {
        parameters.inboundNatPools[index].frontendPortRangeEnd = parseInt(defaultFrontendPortRangeEnd, 10);
      }

      if(options.backendPort) {
        parameters.inboundNatPools[index].backendPort = parseInt(options.backendPort, 10);
      } else if(useDefaults) {
        parameters.inboundNatPools[index].backendPort = parseInt(defaultBackendPort, 10);
      }

      parameters.inboundNatPools[index].name = name;
      loadBalancer.inboundNatPools.push(parameters.inboundNatPools[index]);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating inbound nat pools in "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(loadBalancer.inboundNatPools[generatorUtils.findIndexByKeyValue(loadBalancer.inboundNatPools, 'name', name)], generatorUtils.traverse);
    });

  inboundNatPools.command('set [resource-group] [lb-name] [name]')
    .description($('Update an inbound nat pools'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat pool'))
    .option('-i, --frontend-ip-name [frontend-ip-name]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-id'))
    .option('-d, --frontend-ip-id [frontend-ip-id]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-name'))
    .option('-p, --protocol [protocol]', $('the transport protocol for the' +
      '\n     endpoint. Possible values are: \'Udp\' or \'Tcp\''))
    .option('-f, --frontend-port-range-start [frontend-port-range-start]', $('the first port number in the range of' +
      '\n     external ports that will be used to provide Inbound Nat to NICs associated with' +
      '\n     a load balancer. Acceptable values range between 1 and 65534'))
    .option('-e, --frontend-port-range-end [frontend-port-range-end]', $('the last port number in the range of' +
      '\n     external ports that will be used to provide Inbound Nat to NICs associated with' +
      '\n     a load balancer. Acceptable values range between 1 and 65535'))
    .option('-b, --backend-port [backend-port]', $('the port used for internal connections' +
      '\n     on the endpoint. Acceptable values are between 1 and 65535'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var inboundNatPool = utils.findFirstCaseIgnore(loadBalancer.inboundNatPools, {name: name});
      var index = utils.indexOfCaseIgnore(loadBalancer.inboundNatPools, {name: name});
      if(!inboundNatPool) {
        throw new Error(util.format($('inbound nat pools with name "%s" not found in the "%s"'), name, lbName));
      }

      var parameters = loadBalancer;
      if(!parameters.inboundNatPools) {
        parameters.inboundNatPools = [];
      }
      if(!parameters.inboundNatPools[index]) {
        parameters.inboundNatPools[index] = {};
      }
      if(!parameters.inboundNatPools[index].frontendIPConfiguration) {
        parameters.inboundNatPools[index].frontendIPConfiguration = {};
      }
      if(options.frontendIpId) {
        if(options.frontendIpName) {
          cli.output.warn($('--frontend-ip-name parameter will be ignored because --frontend-ip-id and --frontend-ip-name are mutually exclusive'));
        }
        parameters.inboundNatPools[index].frontendIPConfiguration.id = options.frontendIpId;
      } else if(options.frontendIpName) {
        var referredfrontendIPConfiguration = utils.findFirstCaseIgnore(loadBalancer.frontendIPConfigurations, {name: options.frontendIpName});
        if(!referredfrontendIPConfiguration) {
          throw new Error(util.format($('No frontend ip configuration with name "%s" found'), options.frontendIpName));
        }
        var idContainerfrontendIPConfiguration = referredfrontendIPConfiguration;
        parameters.inboundNatPools[index].frontendIPConfiguration.id = idContainerfrontendIPConfiguration.id;
      }

      if(options.protocol) {
        parameters.inboundNatPools[index].protocol = validation.isIn(options.protocol, ['Udp', 'Tcp'], '--protocol');
      } else if(useDefaults) {
        parameters.inboundNatPools[index].protocol = defaultProtocol;
      }

      if(options.frontendPortRangeStart) {
        parameters.inboundNatPools[index].frontendPortRangeStart = parseInt(options.frontendPortRangeStart, 10);
      } else if(useDefaults) {
        parameters.inboundNatPools[index].frontendPortRangeStart = parseInt(defaultFrontendPortRangeStart, 10);
      }

      if(options.frontendPortRangeEnd) {
        parameters.inboundNatPools[index].frontendPortRangeEnd = parseInt(options.frontendPortRangeEnd, 10);
      } else if(useDefaults) {
        parameters.inboundNatPools[index].frontendPortRangeEnd = parseInt(defaultFrontendPortRangeEnd, 10);
      }

      if(options.backendPort) {
        parameters.inboundNatPools[index].backendPort = parseInt(options.backendPort, 10);
      } else if(useDefaults) {
        parameters.inboundNatPools[index].backendPort = parseInt(defaultBackendPort, 10);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating inbound nat pools in "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(loadBalancer.inboundNatPools[index], generatorUtils.traverse);
    });

  inboundNatPools.command('delete [resource-group] [lb-name] [name]')
    .description($('Delete a inbound nat pools'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat pool'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(loadBalancer.inboundNatPools, {name: name});
      if (index === -1) {
        throw new Error(util.format($('inbound nat pools "%s" not found in the lbName "%s"'), name, loadBalancer.name));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete inbound nat pools with name "%s" from "%s"? [y/n] '), name, lbName), _)) {
        return;
      }

      loadBalancer.inboundNatPools.splice(index, 1);
      progress = cli.interaction.progress('Deleting inbound nat pools');
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }
    });

  inboundNatPools.command('show [resource-group] [lb-name] [name]')
    .description($('Show an inbound nat pools'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the inbound nat pool'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var inboundNatPool = utils.findFirstCaseIgnore(loadBalancer.inboundNatPools, {name: name});
      if(!inboundNatPool) {
        cli.output.warn(util.format($('inbound nat pools with name "%s" not found in the lbName "%s"'), name, loadBalancer.name));
      }

      cli.interaction.formatOutput(inboundNatPool, generatorUtils.traverse);
    });

  inboundNatPools.command('list [resource-group] [lb-name]')
    .description($('List inbound nat pools'))
    .usage('[options] <resource-group> <lb-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer = null;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if(!loadBalancer) {
        throw new Error(util.format($('load balancers with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var items = loadBalancer.inboundNatPools;
      cli.interaction.formatOutput(items, function(items) {
        if (items.length === 0) {
          cli.output.warn($('No inbound nat pools found'));
        } else {
          cli.output.table(items, function (row, item) {
            row.cell($('Name'), item.name);
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });
};