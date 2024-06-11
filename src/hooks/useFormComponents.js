import { useQuery } from 'react-query';
import { fetchFormConfig } from '../api/formComponentsConfig';

export const useFormComponents = () => {
   return useQuery("formConfigs", fetchFormConfig);
}