import React from 'react';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import BootstrapTooltip from 'react-bootstrap/lib/Tooltip';

export const HelpIcon = ({ helpText }) =>
  helpText ? (
    <OverlayTrigger
      placement="top"
      overlay={
        <BootstrapTooltip
          id="help-icon"
          className="select-workspace-dialog__tooltip--order"
        >
          {helpText}
        </BootstrapTooltip>
      }
    >
      <i className="fa fa-question-circle" aria-hidden="true" />
    </OverlayTrigger>
  ) : null;
