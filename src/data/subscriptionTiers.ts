export type TierNames = keyof typeof subscriptionTiers;

export const subscriptionTiers = {
  Free: {
    name: "Free",
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
  },
  Basic: {
    name: "Basic",
    priceInCents: 1900,
    maxNumberOfProducts: 5,
    maxNumberOfVisits: 10000,
    canAccessAnalytics: true,
    canCustomizeBanner: false,
    canRemoveBranding: true,
  },
  Standard: {
    name: "Standard",
    priceInCents: 4900,
    maxNumberOfProducts: 30,
    maxNumberOfVisits: 100000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
  },
  Premium: {
    name: "Premium",
    priceInCents: 9900,
    maxNumberOfProducts: 50,
    maxNumberOfVisits: 1000000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
  },
} as const;

export const subscriptionTiersInOrder = [
  subscriptionTiers.Free,
  subscriptionTiers.Basic,
  subscriptionTiers.Standard,
  subscriptionTiers.Premium,
] as const;
