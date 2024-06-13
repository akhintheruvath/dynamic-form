import React from 'react';
import { TextInput, DropdownSingle, CheckboxList, RadioList, DatePicker } from 'oolib';
import { useFormComponents } from '../hooks/useFormComponents';

const componentMap = {
  TextInput,
  DropdownSingle,
  CheckboxList,
  RadioList,
  DatePicker,
};

export const DynamicForm = () => {
  const { data: formConfigs, isLoading, error } = useFormComponents();

  if(isLoading) return <p className='flex justify-center text-2xl mt-20'>Loading...</p>;
  if(error) return <p className='flex justify-center text-2xl mt-20'>{error.message}</p>;

  return (
    <div className='flex justify-center md:p-3'>
      <form onSubmit={(e) => e.preventDefault()} className='sm:w-1/2 xl:w-1/3 bg-blue-200 px-5 pt-4 mt-4 rounded-sm'>
        {formConfigs.map((field, index) => {
          const Component = componentMap[field.comp];
          return (
            <div key={index} className='mb-5'>
              <Component
                {...field.props}
                isRequired={field.isRequired}
                onChange={() => {}}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};