import { api } from "./api";

export const fetchFormConfig = async () => {
   const response = await api.get("/form-configurations");
   const data = response.data.formConfigurations;
   return data;
}