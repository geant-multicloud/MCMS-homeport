import { connectAngularComponent } from '@waldur/store/connect';

import { AppFooter } from './AppFooter';
import breadcrumbsModule from './breadcrumbs/module';
import cookiesModule from './cookies/module';
import headerModule from './header/module';
import NavigationUtilsService from './navigation-utils-service';
import workspaceModule from './workspace/module';

export default module => {
  module.service('NavigationUtilsService', NavigationUtilsService);
  module.component('appFooter', connectAngularComponent(AppFooter));
  breadcrumbsModule(module);
  cookiesModule(module);
  headerModule(module);
  workspaceModule(module);
};
