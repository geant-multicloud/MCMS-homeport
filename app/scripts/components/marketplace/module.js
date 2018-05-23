import routes from './routes';
import marketplaceLanding from './landing/LandingPage';
import marketplaceCompare from './compare/ComparisonContainer';
import comparisonIndicator from './compare/ComparisonIndicator';
import marketplaceCheckout from './cart/CheckoutPage';
import cartIndicator from './cart/ShoppingCartIndicator';
import marketplaceProduct from './details/DetailsPage';
import { setupFixture } from '@waldur/marketplace/fixtures/setup';

export default module => {
  module.component('marketplaceLanding', marketplaceLanding);
  module.component('marketplaceCompare', marketplaceCompare);
  module.component('comparisonIndicator', comparisonIndicator);
  module.component('marketplaceCheckout', marketplaceCheckout);
  module.component('cartIndicator', cartIndicator);
  module.component('marketplaceProduct', marketplaceProduct);
  module.config(routes);
  module.run(setupFixture);
};
