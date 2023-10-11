jest.mock('@Hooks/useFetch/useFetch', () => ({
  __esModule: true,
  default: () => ({
    data: [],
  }),
}));
