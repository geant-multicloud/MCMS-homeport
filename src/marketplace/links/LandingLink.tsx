import { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { Link } from '@waldur/core/Link';
import { getWorkspace } from '@waldur/workspace/selectors';
import { OuterState, ORGANIZATION_WORKSPACE } from '@waldur/workspace/types';

const PureLandingLink: FunctionComponent<any> = (props) => (
  <Link state={props.state}>{props.children}</Link>
);

const connector = connect<{ state: string }, {}, {}, OuterState>((state) => {
  const workspace = getWorkspace(state);
  if (workspace === ORGANIZATION_WORKSPACE) {
    return {
      state: 'marketplace-landing-customer',
    };
  } else {
    return {
      state: 'marketplace-landing',
    };
  }
});

export const LandingLink = connector(PureLandingLink);
