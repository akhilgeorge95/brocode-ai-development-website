/** Field schema for per-page quote forms — driven by each page's conversion brief (field 16). */
export type FieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'multiselect' | 'date' | 'number';

export type FormField = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  helper?: string;
  options?: string[]; // for select / multiselect
  /** Default value (handy for pre-fill from context). */
  defaultValue?: string;
};

export type PageFormConfig = {
  /** Headline shown above the form. */
  title: string;
  /** Sub-label under the headline. */
  subtitle?: string;
  /** Primary CTA text for the form. */
  ctaLabel: string;
  /** Slug of the page (used for tracking events). */
  pageSlug: string;
  /** Page-specific qualification fields (added after the always-on contact basics). */
  fields: FormField[];
  /** Optional pre-filled WhatsApp message (so the form's WhatsApp fallback link is contextual). */
  whatsappMessage?: string;
};
