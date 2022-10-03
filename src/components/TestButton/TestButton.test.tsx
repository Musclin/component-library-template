import React from 'react';
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import { TestButton } from './TestButton';

describe('TestButton', () => {
  test('충돌 없이 렌더링 되나요?', () => {
    render(<TestButton>테스트 버튼!</TestButton>);
  });

  test('제공한 캡션이 정확히 표현 되나요?', () => {
    const caption = '테스트 버튼!!'
    render(<TestButton>{caption}</TestButton>);
    expect(screen.getByText(caption).textContent).toBe(caption);
  });
});
