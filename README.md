# [ParityDeals Clone](https://parity-deals-dimnov.vercel.app/)

This project is a clone of [ParityDeals](https://www.paritydeals.com/), a SaaS platform designed to help businesses maximize sales revenue through dynamic pricing strategies tailored to customers' geographical locations and purchasing power parity.

## Features

- **Dynamic Pricing by Location:**  
  Adjust product prices based on the customer's country, considering purchasing power parity to make products more accessible globally.

- **Quantity-Based Pricing:**  
  Offer discounts based on the quantity purchased to encourage bulk orders.

- **Market Insights:**  
  Gain insights into sales performance across different markets to optimize marketing efforts.

## Technologies Used

- **Frontend:**  
  Built with [Next.js](https://nextjs.org/), styled with [Tailwind CSS](https://tailwindcss.com/) and [shadcn](https://shadcn.dev/) for UI components.

- **Backend:**  
  Implemented using [Drizzle](https://orm.drizzle.team/) and [Neon](https://console.neon.tech/app/) for database management and real-time data handling.

- **Authentication:**  
  Integrated [Clerk](https://clerk.dev/) for robust user authentication and management.

- **Data Visualization:**  
  Utilized [Recharts](https://recharts.org/) for creating interactive charts and visualizing market insights.

- **Schema Validation:**  
  Implemented [Zod](https://zod.dev/) for TypeScript-first schema validation.

- **Payment Integration:**  
  Handled with [Stripe](https://stripe.com/) for secure and reliable payment processing.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dimnov/parity-deals-clone.git
   cd parity-deals-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file in the root directory and add your credentials:

```env
# Database
DATABASE_URL=

# Clerk
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

# Authentication URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_BASIC_PLAN_PRICE_ID=

# Other
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Development
TEST_COUNTRY_CODE=
```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

### User Authentication
- User sign-up and login handled through Clerk.
![hero](https://github.com/user-attachments/assets/ee07846b-e37c-4be0-992a-35cd5481ad3f)

### Dashboard
- Displays products and analytics.
![dashboard](https://github.com/user-attachments/assets/fe3ad7e3-59be-4ec9-b1dd-3950ab5556c3)

### Analytics
- Market insights visualized with Recharts for better decision-making.
![analytics](https://github.com/user-attachments/assets/8c8ab853-22d6-4122-b816-1659a94e5edc)

### Product Page
- View detailed information about each product, including Editing, Country Discounts and Customization.
![edit](https://github.com/user-attachments/assets/5fb33e62-bb57-406a-9998-520b5eef6b18)

### Checkout
- Users can proceed to secure checkout via Stripe when selecting a subscription.
