import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51IaqH2JDvWJZUcGlREarMGaA4f1oI04vgEsykd7d3dCKEQVqocJ8tRavLVP13DfEj7QuH30oowrG3oehpeAV8b7r00h5ZuAoP2";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Succesful!");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
