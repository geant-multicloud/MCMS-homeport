import { LanguageSelectorBox } from '@waldur/i18n/LanguageSelectorBox';
import { FooterLinks } from '@waldur/navigation/FooterLinks';

import { AuthHeader } from './AuthHeader';
import { IdentityProviderSelector } from './IdentityProviderSelector';
import { LocalLogin } from './LocalLogin';
import { PoweredBy } from './PoweredBy';
import { useAuthFeatures } from './useAuthFeatures';
import { UserAuthWarning } from './UserAuthWarning';

import './LoginColumn.css';

export const LoginColumn = () => {
  const features = useAuthFeatures();
  return (
    <div className="LoginColumn">
      <div className="LoginBody">
        <div className="LoginGridItemContainer">
          <div className="LoginLogo m-b-sm">
            <img src="/images/login_logo.png" />
          </div>
          <AuthHeader />
          {features.SigninForm && <LocalLogin />}
          <IdentityProviderSelector features={features} />
          <UserAuthWarning />
          <PoweredBy />
        </div>
      </div>
      <div className="LoginFooter">
        <LanguageSelectorBox />
        <FooterLinks />
      </div>
    </div>
  );
};
