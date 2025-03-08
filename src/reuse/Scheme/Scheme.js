import { object, string } from "yup";

export const fromScheme = object({
   name: string().required(),
   email: string().required(),
   topic: string().required(),
})