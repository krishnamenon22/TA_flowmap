jest.mock('echarts', () => ({
  init: () => ({
    setOption: jest.fn(),
    dispose: jest.fn(),
    clear: jest.fn(),
  }),
}));