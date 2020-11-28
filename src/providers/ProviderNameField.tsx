import React from 'react';

import { StringField } from '@waldur/form';

export const ProviderNameField = (props) => (
  <StringField
    label={props.translate('Provider name')}
    name="name"
    required={true}
  />
);
