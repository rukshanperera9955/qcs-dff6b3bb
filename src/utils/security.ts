import { z } from 'zod';

const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS = 5;

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(identifier);

  if (!record || now > record.resetTime) {
    requestCounts.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}

export function sanitizeForUrl(input: string): string {
  return encodeURIComponent(input.trim().slice(0, 500));
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .transform(sanitizeInput),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters')
    .transform((val) => val.toLowerCase().trim()),
  phone: z
    .string()
    .min(6, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[+\d\s()-]+$/, 'Invalid phone number format')
    .transform(sanitizeInput),
  service: z
    .string()
    .min(1, 'Please select a service')
    .max(100, 'Service name is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .transform(sanitizeInput),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;