import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { openModalDialog } from '@waldur/table-react/actions';
import { withTranslation } from '@waldur/table-react/translate';
import ActionButton from '@waldur/table-react/ActionButton';
import { canCreateOrganization } from '@waldur/table-react/selectors';

const CustomerCreateButton = ({ isVisible, onClick, translate }) => (
  isVisible ?
    <ActionButton
      title={translate('Add organization')}
      action={onClick}
      icon={'fa fa-plus'}/>
    : null
);

const customerCreateDialog = () => openModalDialog('customerCreateDialog', {size: 'lg'});

const enhance = compose(
  withTranslation,
  connect(state => ({
    isVisible: canCreateOrganization(state)
  }), {
    onClick: customerCreateDialog,
  })
);

export default enhance(CustomerCreateButton);
