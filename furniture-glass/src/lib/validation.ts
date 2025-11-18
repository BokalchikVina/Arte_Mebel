import { z } from "zod";

export const validateProps = <Schema extends z.ZodTypeAny>(
  schema: Schema,
  props: z.input<Schema>,
): z.infer<Schema> => schema.parse(props);
