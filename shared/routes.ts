
import { z } from 'zod';
import { insertContactSchema, contactMessageSchema } from './schema';

export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactSchema,
      responses: {
        201: contactMessageSchema,
        400: z.object({ message: z.string() }),
      },
    },
  },
};
