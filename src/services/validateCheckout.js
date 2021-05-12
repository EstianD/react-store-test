export default function validateCheckout(values) {
  let errors = {};
  console.log("VALUES: ", values);

  // Check first name
  if (values.firstName === "") {
    errors.firstName = "First name cannot be empty";
  }

  // Check last name
  if (values.lastName === "") {
    errors.lastName = "Last name cannot be empty";
  }

  // Check address
  if (values.address === "") {
    errors.address = "Address cannot be empty";
  }

  // Check contact number
  if (values.contactNumber === "") {
    errors.contactNumber = "Contact number cannot be empty";
  }
  console.log(errors);

  return errors;
}
