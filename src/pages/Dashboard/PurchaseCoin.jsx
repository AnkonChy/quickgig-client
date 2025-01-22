import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const PurchaseCoin = () => {
  const axiosSecure = useAxiosSecure();
  const { data: paymentCard = [] } = useQuery({
    queryKey: ["paymentCard"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payment-card");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        heading="Purchase Coins Card"
        subHeading="Please purchase coin"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {paymentCard.map((card) => (
          <Link to={`/dashboard/payment/${card._id}`} key={card._id}>
            <div className="card bg-base-100 image-full shadow-xl">
              <figure>
                <img
                  src="https://img.freepik.com/premium-photo/payment-system-online-payments-credit-card-dark-wooden-background-3d-render_120871-390.jpg?w=360"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{card.coins} coins</h2>
                <p className="text-xl">{card.dollars} $</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PurchaseCoin;
