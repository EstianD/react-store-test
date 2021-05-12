import { useState, useEffect } from "react";

const useCheckoutForm = (validateCheckout, submitCheckout) => {
  // Define form state
  const [checkoutValues, setCheckoutValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    contactNumber: "",
  });

  // Checkout errors
  const [checkoutErrors, setCheckoutErrors] = useState({});
  // Is submitting
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generateInvoice, setGenerateInvoice] = useState(false);

  // Handle checkout form change
  const handleCheckoutChange = (e) => {
    const { name, value } = e.target;

    //  Set form values
    setCheckoutValues({ ...checkoutValues, [name]: value });
  };

  const handleCheckoutSubmit = () => {
    console.log(checkoutValues);
    console.log("ERRORS: ", validateCheckout(checkoutValues));

    setCheckoutErrors(validateCheckout(checkoutValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(checkoutErrors).length === 0 && isSubmitting) {
      console.log("not errors: ", checkoutValues);
      submitCheckout(checkoutValues);
      setGenerateInvoice(true);
    }
  }, [checkoutErrors]);

  return {
    checkoutValues,
    checkoutErrors,
    handleCheckoutChange,
    handleCheckoutSubmit,
    generateInvoice,
  };
};

export default useCheckoutForm;
