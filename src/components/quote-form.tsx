import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { enquirySchema, saveEnquiry, type Enquiry } from "@/lib/enquiry";
import { products } from "@/lib/content/products";
import { madeProducts } from "@/lib/content/made-products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function QuoteForm({
  defaultProduct,
  intent = "quote",
}: {
  defaultProduct?: string;
  intent?: Enquiry["intent"];
}) {
  const form = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      company: "",
      country: "",
      email: "",
      phone: "",
      product: defaultProduct ?? "",
      quantity: "",
      sample: intent === "sample",
      intent,
      message: "",
    },
  });

  function onSubmit(values: Enquiry) {
    saveEnquiry(values);
    form.reset({
      ...form.getValues(),
      name: "",
      company: "",
      country: "",
      email: "",
      phone: "",
      quantity: "",
      message: "",
      sample: false,
    });
    toast.success("Enquiry saved. We reply within one working day on WhatsApp or email.");
  }

  const err = form.formState.errors;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={err.name?.message}>
          <Input autoComplete="name" {...form.register("name")} />
        </Field>
        <Field label="Company" error={err.company?.message}>
          <Input autoComplete="organization" {...form.register("company")} />
        </Field>
        <Field label="Country" error={err.country?.message}>
          <Input autoComplete="country-name" {...form.register("country")} />
        </Field>
        <Field label="Email" error={err.email?.message}>
          <Input type="email" autoComplete="email" {...form.register("email")} />
        </Field>
        <Field label="Phone / WhatsApp" error={err.phone?.message}>
          <Input type="tel" autoComplete="tel" {...form.register("phone")} />
        </Field>
        <Field label="Article">
          <select
            className="h-11 w-full rounded-sm bg-paper px-3.5 text-sm text-body shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saddle"
            {...form.register("product")}
          >
            <option value="">Select an article</option>
            <optgroup label="Leather articles">
              {products.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Leather made products">
              {madeProducts.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
            </optgroup>
            <option value="Custom / other">Custom / other</option>
          </select>
        </Field>
        <Field label="Quantity (sq ft, pcs or containers)">
          <Input placeholder="e.g. 20,000 sq ft" {...form.register("quantity")} />
        </Field>
        <label className="flex items-center gap-3 self-end pb-1 text-sm text-body">
          <input type="checkbox" className="size-4 accent-saddle" {...form.register("sample")} />
          Request a cutting / sample
        </label>
      </div>
      <Field label="Brief" error={err.message?.message}>
        <Textarea
          placeholder="Substance, tannage, colour, end use, destination port — or a goods tech pack…"
          {...form.register("message")}
        />
      </Field>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send enquiry
      </Button>
      <p className="text-xs text-muted">
        Stored on this device for the preview. For a live order, WhatsApp +880 1734-420401 or email
        abmtrc@gmail.com.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-xs text-danger">{error}</p> : null}
    </div>
  );
}
