import { Func } from '@Utils/types';
import { DebouncedFunc } from 'lodash';

export interface FormProps {
  handleSearch: DebouncedFunc<Func>;
  handlePagination: DebouncedFunc<Func>;
}
