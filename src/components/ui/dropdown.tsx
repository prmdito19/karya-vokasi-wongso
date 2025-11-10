import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  label?: string;
  required?: boolean; // <-- tambah props required
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
  error?: string;
};

export default function Dropdown({
  label,
  required,
  options,
  value,
  onChange,
  error,
}: DropdownProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[14px] font-medium mb-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          {/* Trigger */}
          <Listbox.Button
            className={`relative w-full cursor-default rounded-lg border ${
              error ? "border-red-500" : "border-gray-300"
            } bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus:ring-2 ${
              error ? "focus:ring-red-500" : "focus:ring-green-500"
            }`}
          >
            <span className="block truncate text-[14px]">{value?.label || "Pilih..."}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>

          {/* Options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white text-[13px] ring-1 ring-black/5 focus:outline-none z-10">
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-green-100 text-green-700" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {/* Error */}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
