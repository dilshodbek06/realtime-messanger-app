"use client";

import ReactSelect, { MultiValue } from "react-select";

interface SelectProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: Record<string, any>;
  onChange: (value: MultiValue<Record<string, never>>) => void;
  options: Record<string, unknown>[];
  disabled?: boolean;
}

const Select = ({ label, onChange, options, disabled, value }: SelectProps) => {
  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label> 
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
          }}
          classNames={{
            control: () => "text-sm",
          }}
        />
      </div>
    </div>
  );
};

export default Select;
