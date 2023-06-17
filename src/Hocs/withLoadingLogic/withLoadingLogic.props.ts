export interface CommonProps<T> {
  isLoading: boolean;
  data: Array<T>;
  isShownNoFoundMessage?: boolean;
}
