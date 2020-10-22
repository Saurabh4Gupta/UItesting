import React from 'react';
import { Navigation } from '@dentsu-ui/components';
import { NavLink } from 'react-router-dom';

const SideNavigation = (
  <Navigation as={NavLink}>
    <Navigation.Section
      title="Client portal"
      items={[
        {
          label: 'Client app link 2',
          url: '/fields',
        },
        {
          label: 'Client app link 2',
          url: '/naming-conventions',
        },
      ]}
    />

    <Navigation.Section
      title="App Manager"
      items={[
        {
          label: 'Client app link 1',
          url: '/publish',
        },
      ]}
    />
  </Navigation>
);

export { SideNavigation };
