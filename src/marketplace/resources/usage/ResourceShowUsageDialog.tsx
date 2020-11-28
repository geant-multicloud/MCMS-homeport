import React from 'react';

import { translate } from '@waldur/i18n';
import { CloseDialogButton } from '@waldur/modal/CloseDialogButton';
import { ModalDialog } from '@waldur/modal/ModalDialog';

import { ResourceUsagesList } from './ResourceUsageList';

interface ResourceUsageDialogProps {
  resolve: { resource_uuid: string };
}

export const ResourceShowUsageDialog = (props: ResourceUsageDialogProps) => (
  <ModalDialog
    title={translate('Resource usage')}
    footer={<CloseDialogButton />}
  >
    <ResourceUsagesList resource_uuid={props.resolve.resource_uuid} />
  </ModalDialog>
);
