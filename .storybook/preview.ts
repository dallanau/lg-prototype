import type { Preview } from '@storybook/react';
import '../src/i18n';
import 'antd/dist/reset.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        mobile1: {
          name: 'Mobile (375px)',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        mobile2: {
          name: 'Mobile (414px)',
          styles: {
            width: '414px',
            height: '736px',
          },
        },
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Design System', [
            'Colors',
            'Typography',
            'Spacing',
            'Icons'
          ],
          'Foundation', [
            'Action',
            'Badge',
            'Button',
            'Input',
            'Tag',
            'StatusTag',
            '*'
          ],
          'Components', [
            'Message',
            'AddressCard',
            'StatusDisplay',
            'Tab',
            '*'
          ],
          'Sections', [
            'ContainerList',
            'ContainerForm',
            'ContainerDetail',
            '*'
          ],
          'Layout', [
            'AppLayout',
            '*'
          ],
          'Pages', [
            'Home',
            'BookingSuccess',
            '*'
          ],
          '*'
        ],
      },
    },
  },
};

export default preview;
