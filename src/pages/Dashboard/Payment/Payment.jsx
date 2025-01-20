import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
//todo: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const { coins, dollars } = useLoaderData();
  console.log(coins, dollars);
  return (
    <div>
      <SectionTitle
        heading="payment"
        subHeading="You have to pay"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm dollars={dollars}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
