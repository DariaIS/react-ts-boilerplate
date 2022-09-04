import React, {InputHTMLAttributes} from 'react';

import styles from './index.module.scss';
import {InputDate} from './InputDate';
import {InputNumber} from './InputNumber';
import {InputText} from './InputText';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = ({type, className, ...rest}) => {
    switch (type) {
        case 'text':
            return (
                <InputText
                    className={
                        (className ? className + ' ' : '') + styles.input
                    }
                    {...rest}
                />
            );
        case 'number':
            return (
                <InputNumber
                    className={
                        (className ? className + ' ' : '') + styles.input
                    }
                    {...rest}
                />
            );
        case 'date':
            return (
                <InputDate
                    className={
                        (className ? className + ' ' : '') + styles.input
                    }
                    {...rest}
                />
            );
        default:
            return null;
    }
};
