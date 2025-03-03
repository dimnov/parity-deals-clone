import CountryDiscountsForm from "@/app/dashboard/_components/forms/CountryDiscountsForm";
import ProductDetailsForm from "@/app/dashboard/_components/forms/ProductDetailsForm";
import PageWithBackButton from "@/app/dashboard/_components/PageWithBackButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clearFullCache } from "@/lib/cache";
import { getProduct, getProductCountryGroups } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ tab?: string }>;
};

export default async function EditProductPage({ params, searchParams }: Props) {
  const { productId } = await params;
  const { tab = "details" } = await searchParams;

  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const product = await getProduct({
    id: productId,
    userId,
  });

  if (product == null) return notFound();

  return (
    <PageWithBackButton backButtonHref="/dashboard/products" pageTitle="Edit Product">
      <Tabs defaultValue={tab}>
        <TabsList className="bg-background/60">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="country">Country</TabsTrigger>
          <TabsTrigger value="customization">Customization</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <DetailsTab product={product} />
        </TabsContent>
        <TabsContent value="country">
          <CountryTab productId={productId} userId={userId} />
        </TabsContent>
        <TabsContent value="customization">Customization</TabsContent>
      </Tabs>
    </PageWithBackButton>
  );
}

function DetailsTab({
  product,
}: {
  product: {
    id: string;
    name: string;
    description: string | null;
    url: string;
  };
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Product Details</CardTitle>
      </CardHeader>
      <CardContent>
        <ProductDetailsForm product={product} />
      </CardContent>
    </Card>
  );
}

async function CountryTab({ productId, userId }: { productId: string; userId: string }) {
  const countryGroups = await getProductCountryGroups({
    productId,
    userId,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Country Discounts</CardTitle>
        <CardDescription>
          Leave the discount field blank if you do not want to display deals for any specific parity
          group.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CountryDiscountsForm productId={productId} countryGroups={countryGroups} />
      </CardContent>
    </Card>
  );
}
