import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    () => {
      const iconOptions = { none: null, 'chevron-right': 'chevron-right' };

      return (
        <Button
          onClick={() => action('Button clicked')('Click')}
          icon={select('icon', iconOptions, iconOptions.none)}
          disabled={boolean('disabled', false)}
        >
          {text('children', 'TEXT')}
        </Button>
      );
    },
    {
      'in-dsm': { id: '5cf5371e4ffc3ff59fd5ee1a', versionFilePath: '../components/versionFile.json' }
    }
  );
