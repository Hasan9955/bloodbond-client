// CheckoutForm.js

import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "./style.css";
import useAuth from "../../hooks/useAuth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CheckoutForm = ({ campaignId }: { campaignId: string }) => {
  // this is for geeting user data
  const auth = useAuth();
  // @ts-ignore
  const { user } = auth;
  const stripe = useStripe();
  const elements = useElements();
  const [inputAmount, setInputAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleAmountChange = (event: any) => {
    setInputAmount(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("Card element not found");
      return;
    }

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      // Send the token and amount to your server and handle the payment
      // console.log(token, inputAmount);

      axios
        .post("https://bloodbond-server.vercel.app/stripe", {
          token: token.id,
          amount: inputAmount,
          campaignId: campaignId || "65bcd81af947cd787d3ce15a",
          email: user.email,
        })
        .then(() => {
          setIsSuccess(true);
          setIsError(false);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsSuccess(false);
          setIsError(true);
          setIsLoading(false);
          console.log(err.messages);
        });

      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
        setIsLoading(false);
      }, 7000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input
            type="number"
            value={inputAmount}
            onChange={handleAmountChange}
            placeholder="Enter amount in cents"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mt-6">
          <p className="text-sm font-semibold mb-5">Card details</p>
          <CardElement />
        </div>
        <button
          type="submit"
          disabled={isLoading === true ? true : false}
          className="btn"
        >
          {isLoading === true ? (
            <AiOutlineLoading3Quarters className="loaderIcon" />
          ) : (
            "Donate"
          )}
        </button>
      </form>
      <div className="w-full h-[32px] mt-5">
        {isSuccess && (
          <p className="text-[1.5rem] text-center text-green-500">
            Donated successfully
          </p>
        )}
        {isError && (
          <p className="text-[2rem] text-center text-red-500">
            Something went wrong
          </p>
        )}
      </div>
    </>
  );
};

export default CheckoutForm;
