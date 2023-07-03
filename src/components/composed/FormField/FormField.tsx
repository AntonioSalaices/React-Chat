import { Input } from '@Components/Core';
import { FormFieldProps } from './FormField.props';
import { translate } from '@Translate/translate';
import { ForwardRefExoticComponent, forwardRef } from 'react';

const FormField: ForwardRefExoticComponent<Omit<FormFieldProps, 'ref'>> = forwardRef(
  ({ type, right, left, search, handleChange, txOptions, text, tx, subTx, subText, testID, max, min }, ref) => {
    const i18Text = tx && translate(tx, txOptions);
    const content = i18Text || text;
    const i18SubText = subTx && translate(subTx, txOptions);
    const subContent = i18SubText || subText;

    return (
      <div className="col-11-xs col-11-sm col-5-md col-5-xl">
        <Input
          left={left}
          right={right}
          testID={testID}
          value={search}
          type={type}
          placeholder={content}
          subText={subContent}
          onChange={handleChange}
          max={max}
          min={min}
          ref={ref}
        />
      </div>
    );
  }
);

export { FormField };
