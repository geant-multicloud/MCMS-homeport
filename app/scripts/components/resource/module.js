import resourceUtils from './resource-utils-service';
import resourceDetails from './resource-details';
import resourceRoutes from './routes';
import resourceHeader from './resource-header';
import resourceName from './ResourceName';
import resourceRefreshButton from './ResourceRefreshButton';
import resourcesService from './resources-service';
import ResourceProvisionPolicy from './resource-provision-policy';
import resourceSummaryModule from './summary/module';
import resourceBreadcrumbsModule from './breadcrumbs/module';
import resourceStateModule from './state/module';
import resourceTabsModule from './tabs/module';
import resourcesListModule from './list/module';
import monitoringModule from './monitoring/module';
import actionsModule from './actions/module';
import filtersModule from './filters';

export default module => {
  module.service('resourceUtils', resourceUtils);
  module.component('resourceDetails', resourceDetails);
  module.component('resourceHeader', resourceHeader);
  module.component('resourceName', resourceName);
  module.component('resourceRefreshButton', resourceRefreshButton);
  module.config(resourceRoutes);
  module.service('resourcesService', resourcesService);
  module.service('ResourceProvisionPolicy', ResourceProvisionPolicy);
  resourceSummaryModule(module);
  resourceBreadcrumbsModule(module);
  resourceStateModule(module);
  resourceTabsModule(module);
  resourcesListModule(module);
  monitoringModule(module);
  actionsModule(module);
  filtersModule(module);
};
