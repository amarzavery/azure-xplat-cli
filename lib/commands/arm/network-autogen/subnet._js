'use strict';
var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {

  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var virtualNetworks = network.category('vnet')
    .description($('Commands to manage virtual networks'));
  var subnets = virtualNetworks.category('subnet')
    .description($('Commands to manage subnet'));

  subnets.command('create [resource-group] [vnet-name] [name] [address-prefix]')
    .description($('Create subnet'))
    .usage('[options] <resource-group> <vnet-name> <name> <address-prefix>')
    .option('-g, --resource-group <resource-group>', $('the resource group'))
    .option('-e, --vnet-name <vnet-name>', $('the vnet name'))
    .option('-n, --name <name>', $('the name'))
    .option('-a, --address-prefix <address-prefix>', $('the address prefix for the subnet'))
    .option('-w, --network-security-group-id [network-security-group-id]', $('sets network security group id. This' +
      '\n     option is mutually exclusive with --network-security-group-name'))
    .option('-o, --network-security-group-name [network-security-group-name]', $('sets network security group name. This' +
      '\n     option is mutually exclusive with --network-security-group-id'))
    .option('-i, --route-table-id [route-table-id]', $('sets route table id. This option is' +
      '\n     mutually exclusive with --route-table-name'))
    .option('-r, --route-table-name [route-table-name]', $('sets route table name. This option is' +
      '\n     mutually exclusive with --route-table-id'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, vnetName, name, addressPrefix, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      vnetName = cli.interaction.promptIfNotGiven($('vnet name : '), vnetName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);
      options.addressPrefix = cli.interaction.promptIfNotGiven($('address prefix : '), addressPrefix, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the subnet "%s"'), name));
      try {
        result = networkManagementClient.subnets.get(resourceGroup, vnetName, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (result) {
        throw new Error(util.format($('subnet with name "%s" already exists in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = {};
      if(options.addressPrefix) {
        parameters.addressPrefix = options.addressPrefix;
      }
      if(!parameters.networkSecurityGroup) {
        parameters.networkSecurityGroup = {};
      }
      if(options.networkSecurityGroupId) {
        if(options.networkSecurityGroupName) {
          cli.output.warn($('--network-security-group-name parameter will be ignored because --network-security-group-id and --network-security-group-name are mutually exclusive'));
        }
        if(!utils.argHasValue(options.networkSecurityGroupId)) {
          delete parameters.networkSecurityGroup;
        } else {
          parameters.networkSecurityGroup.id = options.networkSecurityGroupId;
        }
      } else if(options.networkSecurityGroupName) {
        if(!utils.argHasValue(options.networkSecurityGroupName)) {
          delete parameters.networkSecurityGroup;
        } else {
          var idContainernetworkSecurityGroup = networkManagementClient.networkSecurityGroups.get(resourceGroup, options.networkSecurityGroupName, _);
          parameters.networkSecurityGroup.id = idContainernetworkSecurityGroup.id;
        }
      }
      if(!parameters.routeTable) {
        parameters.routeTable = {};
      }
      if(options.routeTableId) {
        if(options.routeTableName) {
          cli.output.warn($('--route-table-name parameter will be ignored because --route-table-id and --route-table-name are mutually exclusive'));
        }
        if(!utils.argHasValue(options.routeTableId)) {
          delete parameters.routeTable;
        } else {
          parameters.routeTable.id = options.routeTableId;
        }
      } else if(options.routeTableName) {
        if(!utils.argHasValue(options.routeTableName)) {
          delete parameters.routeTable;
        } else {
          var idContainerrouteTable = networkManagementClient.routeTables.get(resourceGroup, options.routeTableName, _);
          parameters.routeTable.id = idContainerrouteTable.id;
        }
      }


      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating subnet "%s"'), name));
      try {
        result = networkManagementClient.subnets.createOrUpdate(resourceGroup, vnetName, name, parameters, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });

  subnets.command('set [resource-group] [vnet-name] [name]')
    .description($('Update subnet'))
    .usage('[options] <resource-group> <vnet-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the resource group'))
    .option('-e, --vnet-name <vnet-name>', $('the vnet name'))
    .option('-n, --name <name>', $('the name'))
    .option('-a, --address-prefix [address-prefix]', $('the address prefix for the subnet'))
    .option('-w, --network-security-group-id [network-security-group-id]', $('sets network security group id. This' +
      '\n     option is mutually exclusive with --network-security-group-name'))
    .option('-o, --network-security-group-name [network-security-group-name]', $('sets network security group name. This' +
      '\n     option is mutually exclusive with --network-security-group-id'))
    .option('-i, --route-table-id [route-table-id]', $('sets route table id. This option is' +
      '\n     mutually exclusive with --route-table-name'))
    .option('-r, --route-table-name [route-table-name]', $('sets route table name. This option is' +
      '\n     mutually exclusive with --route-table-id'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, vnetName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      vnetName = cli.interaction.promptIfNotGiven($('vnet name : '), vnetName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the subnet "%s"'), name));
      try {
        result = networkManagementClient.subnets.get(resourceGroup, vnetName, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        throw new Error(util.format($('subnet with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }

      var parameters = result;
      if(options.addressPrefix) {
        parameters.addressPrefix = options.addressPrefix;
      }
      if(!parameters.networkSecurityGroup) {
        parameters.networkSecurityGroup = {};
      }
      if(options.networkSecurityGroupId) {
        if(options.networkSecurityGroupName) {
          cli.output.warn($('--network-security-group-name parameter will be ignored because --network-security-group-id and --network-security-group-name are mutually exclusive'));
        }
        if(!utils.argHasValue(options.networkSecurityGroupId)) {
          delete parameters.networkSecurityGroup;
        } else {
          parameters.networkSecurityGroup.id = options.networkSecurityGroupId;
        }
      } else if(options.networkSecurityGroupName) {
        if(!utils.argHasValue(options.networkSecurityGroupName)) {
          delete parameters.networkSecurityGroup;
        } else {
          var idContainernetworkSecurityGroup = networkManagementClient.networkSecurityGroups.get(resourceGroup, options.networkSecurityGroupName, _);
          parameters.networkSecurityGroup.id = idContainernetworkSecurityGroup.id;
        }
      }
      if(!parameters.routeTable) {
        parameters.routeTable = {};
      }
      if(options.routeTableId) {
        if(options.routeTableName) {
          cli.output.warn($('--route-table-name parameter will be ignored because --route-table-id and --route-table-name are mutually exclusive'));
        }
        if(!utils.argHasValue(options.routeTableId)) {
          delete parameters.routeTable;
        } else {
          parameters.routeTable.id = options.routeTableId;
        }
      } else if(options.routeTableName) {
        if(!utils.argHasValue(options.routeTableName)) {
          delete parameters.routeTable;
        } else {
          var idContainerrouteTable = networkManagementClient.routeTables.get(resourceGroup, options.routeTableName, _);
          parameters.routeTable.id = idContainerrouteTable.id;
        }
      }


      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating subnet "%s"'), name));
      try {
        result = networkManagementClient.subnets.createOrUpdate(resourceGroup, vnetName, name, parameters, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });

  subnets.command('delete [resource-group] [vnet-name] [name]')
    .description($('Delete subnet'))
    .usage('[options] <resource-group> <vnet-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the resource group'))
    .option('-e, --vnet-name <vnet-name>', $('the vnet name'))
    .option('-n, --name <name>', $('the name'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, vnetName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      vnetName = cli.interaction.promptIfNotGiven($('vnet name : '), vnetName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the subnet "%s"'), name));
      try {
        result = networkManagementClient.subnets.get(resourceGroup, vnetName, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        throw new Error(util.format($('subnet with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete subnet "%s"? [y/n] '), name), _)) {
        cli.output.info(util.format($('subnet "%s" was not deleted and still exists in the resource group "%s"'), name, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting subnet "%s"'), name));
      try {
        result = networkManagementClient.subnets.deleteMethod(resourceGroup, vnetName, name, _);
        cli.output.info(util.format($('subnet "%s" was successfully deleted from resource group "%s"'), name, resourceGroup));
      } finally {
        progress.end();
      }
    });

  subnets.command('show [resource-group] [vnet-name] [name]')
    .description($('Show subnet'))
    .usage('[options] <resource-group> <vnet-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the resource group'))
    .option('-e, --vnet-name <vnet-name>', $('the vnet name'))
    .option('-n, --name <name>', $('the name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, vnetName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      vnetName = cli.interaction.promptIfNotGiven($('vnet name : '), vnetName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);
      var result;

      var progress = cli.interaction.progress(util.format($('Looking up the subnet "%s"'), name));
      try {
        result = networkManagementClient.subnets.get(resourceGroup, vnetName, name, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          result = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }
      if (!result) {
        cli.output.warn(util.format($('subnet with name "%s" not found in the resource group "%s"'), name, resourceGroup));
      }
      cli.interaction.formatOutput(result, generatorUtils.traverse);
    });

  subnets.command('list [resource-group] [vnet-name]')
    .description($('List subnet'))
    .usage('[options] <resource-group> <vnet-name>')
    .option('-g, --resource-group <resource-group>', $('the resource group'))
    .option('-e, --vnet-name <vnet-name>', $('the vnet name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, vnetName, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var result = null;

      var progress;
      try {
        if(typeof networkManagementClient.subnets.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          vnetName = cli.interaction.promptIfNotGiven($('virtual network : '), vnetName, _);
          progress = cli.interaction.progress($('Getting the subnet'));
          result = networkManagementClient.subnets.list(resourceGroup, vnetName,  _);
        } else {
          if(options.resourceGroup) {
            vnetName = cli.interaction.promptIfNotGiven($('virtual network : '), vnetName, _);
            progress = cli.interaction.progress($('Getting the subnet'));
            result = networkManagementClient.subnets.list(resourceGroup, vnetName,  _);
          } else {
            vnetName = cli.interaction.promptIfNotGiven($('virtual network : '), vnetName, _);
            progress = cli.interaction.progress($('Getting the subnet'));
            result = networkManagementClient.subnets.listAll(vnetName, _);
          }
        }
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(result, function(result) {
        if (result.length === 0) {
          cli.output.warn($('No subnet found'));
        } else {
          cli.output.table(result, function (row, item) {
            row.cell($('Name'), item.name);
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });
};
