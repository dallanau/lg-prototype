import type { Preview } from '@storybook/react';
import '../src/i18n';
import 'antd/dist/reset.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
  },
};

export default preview;
