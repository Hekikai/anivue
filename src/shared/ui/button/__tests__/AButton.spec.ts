import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ABookmarkOutlineIcon from '../../../icons/ABookmarkOutlineIcon.vue';
import AStarIcon from '../../../icons/AStarIcon.vue';

describe('AButton', () => {
  const wrapper = mount(AButton, {
    props: {
      text: 'hello world',
    },
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should have text', () => {
    expect(wrapper.text()).toContain('hello world');
  });

  it('should have left and right icon', () => {
    const $w = mount(AButton, {
      slots: {
        'left-icon': AStarIcon,
        'right-icon': ABookmarkOutlineIcon,
      },
      props: {
        text: 'hello world',
      },
    });

    expect($w.html()).toMatchSnapshot();
  });
});
