"use client";

import { Card, CardContent } from "@/components/ui/card";
import { productCountryDiscountsSchema } from "@/schemas/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReactCountryFlag from "react-country-flag";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { updateCountryDiscounts } from "@/server/actions/products";

function CountryDiscountsForm({
  productId,
  countryGroups,
}: {
  productId: string;
  countryGroups: {
    id: string;
    name: string;
    recommendedDiscountPercentage: number | null;
    countries: {
      name: string;
      code: string;
    }[];
    discount?: {
      coupon: string;
      discountPercentage: number;
    };
  }[];
}) {
  const form = useForm<z.infer<typeof productCountryDiscountsSchema>>({
    resolver: zodResolver(productCountryDiscountsSchema),
    defaultValues: {
      groups: countryGroups.map((group) => {
        const discount = group.discount?.discountPercentage ?? group.recommendedDiscountPercentage;

        return {
          countryGroupId: group.id,
          coupon: group.discount?.coupon ?? "",
          discountPercentage: discount != null ? discount * 100 : undefined,
        };
      }),
    },
  });

  async function onSubmit(values: z.infer<typeof productCountryDiscountsSchema>) {
    const data = await updateCountryDiscounts(productId, values);

    if (data?.message) {
      if (data.error) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-6 flex-col">
        {countryGroups.map((group, index) => (
          <Card key={group.id}>
            <CardContent className="pt-6 flex gap-16 items-center">
              <div>
                <h2 className="text-muted-foreground text-sm font-semibold mb-2">{group.name}</h2>
                <div className="flex gap-2 flex-wrap">
                  {group.countries.map((country) => (
                    <ReactCountryFlag
                      key={country.code}
                      countryCode={country.code}
                      svg
                      style={{
                        width: "1.5rem",
                        height: "1rem",
                      }}
                    />
                  ))}
                </div>
              </div>
              <Input type="hidden" {...form.register(`groups.${index}.countryGroupId`)} />
              <div className="ml-auto flex-shrink-0 flex gap-2 flex-col w-min">
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name={`groups.${index}.discountPercentage`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discount %</FormLabel>
                        <FormControl>
                          <Input
                            className="w-24"
                            {...field}
                            type="number"
                            value={field.value ?? ""}
                            onChange={(e) => field.onChange(e.target.valueAsNumber)}
                            min="0"
                            max="100"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    control={form.control}
                    name={`groups.${index}.coupon`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Coupon</FormLabel>
                        <FormControl>
                          <Input className="w-48" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  ></FormField>
                </div>
                <FormMessage>{form.formState.errors.groups?.[index]?.root?.message}</FormMessage>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="self-end">
          <Button disabled={form.formState.isSubmitting} type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CountryDiscountsForm;
