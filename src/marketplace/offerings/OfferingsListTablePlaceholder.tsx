import { connect } from 'react-redux';

import { Link } from '@waldur/core/Link';
import { translate } from '@waldur/i18n';
import { RootState } from '@waldur/store/reducers';
import { ImageTablePlaceholder } from '@waldur/table/ImageTablePlaceholder';
import { getCustomer, isOwnerOrStaff } from '@waldur/workspace/selectors';
import { Customer } from '@waldur/workspace/types';

const TwoDocumentsIllustration: string = require('@waldur/images/table-placeholders/undraw_no_data_qbuo.svg');

const PureOfferingsListTablePlaceholder = ({
  customer,
  isOwnerOrStaff,
}: {
  customer: Customer;
  isOwnerOrStaff: boolean;
}) => (
  <ImageTablePlaceholder
    illustration={TwoDocumentsIllustration}
    title={translate('Nothing to see here')}
    description={
      customer?.is_service_provider && isOwnerOrStaff
        ? translate(
            'You can start filling this table by creating your first offering.',
          )
        : null
    }
    action={
      customer?.is_service_provider &&
      isOwnerOrStaff && (
        <Link
          state="marketplace-offering-create"
          className="btn btn-success btn-md"
        >
          {translate('Add new offering')}
        </Link>
      )
    }
  />
);

export const OfferingsListTablePlaceholder = connect((state: RootState) => ({
  customer: getCustomer(state),
  isOwnerOrStaff: isOwnerOrStaff(state),
}))(PureOfferingsListTablePlaceholder);
