// StripeComponent.js

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Load your publishable key from the Stripe Dashboard
const stripePromise = loadStripe(
  "pk_test_51OIZw5KzX3rFI0XXyOWKTw6yVEIN9XrTNpA5NemHGiTwe2VYDXjsiAUxjMDnHPTfGJLxT4Eg0uYk7HwF85OP14E300G0huPhsV"
);

const StripeComponent = ({ campaignId }: { campaignId: string }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm campaignId={campaignId} />
    </Elements>
  );
};

export default StripeComponent;
