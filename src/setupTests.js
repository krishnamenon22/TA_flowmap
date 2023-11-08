jest.mock('echarts', () => ({
  init: () => ({
    setOption: jest.fn(),
    showLoading: jest.fn(), // Mock showLoading
  hideLoading: jest.fn(), // Mock hideLoading
    clear: jest.fn(),
  }),
  getInstanceByDom: jest.fn(),
  dispose: jest.fn(),
  
}));