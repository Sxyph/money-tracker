import React,{ChangeEventHandler} from 'react';

interface DropdownProps{
    options:{
      label: string;
      value: string;
    }[];
    value: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    label: string;
}

const Dropdown = ({options, label, value, onChange}: DropdownProps) => {

    return (
        <div>
            <h3 className='ui header'>{label}</h3>
            <select className='ui dropdown' value={value} onChange={onChange}>
                {
                    options.map( (option) =>
                        <option key={option.label} value={option.value}>{option.value}</option>
                    )
                }
            </select>
        </div>
    );
};

export default Dropdown;