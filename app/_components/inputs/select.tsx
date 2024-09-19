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
      <label className="block dark:text-white text-sm font-medium leading-6 text-gray-900">
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
            control: () => "text-sm dark:bg-slate-600 dark:text-white",
            dropdownIndicator: () => "dark:text-white",
            input: () => "dark:text-white",
            placeholder: () => "dark:text-white",
            menu: () => "dark:bg-slate-600",
            option: () => "dark:hover:bg-slate-700 dark:target:bg-slate-600",
            noOptionsMessage: () => "dark:text-white",
            multiValue: () => "dark:bg-slate-500 dark:text-white",
            singleValue: () => "dark:text-white",
          }}
        />
      </div>
    </div>
  );
};

export default Select;
