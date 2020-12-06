import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./CustomTextField";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingDivisions, setShippingDivisions] = useState([]);
  const [shippingDivision, setShippingDivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const fetchCountries = async (checkoutTokenID) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenID
    );
    console.log(countries);

    setShippingCountries(countries);
  };

  useEffect(() => {
    console.log(checkoutToken);
    fetchCountries(checkoutToken?.id);
  }, []);

  const handleSubmit = () => {};
  const handleSelect = () => {};

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <FormInput name="first name" label="First Name" required />
            <FormInput name="last name" label="Last Name" required />
            <FormInput name="address1" label="Address" required />
            <FormInput name="email " label="Email" required />
            <FormInput name="first name" label="City" required />
            <FormInput name="zip" label="Zip Code" required />
            <Grid>
              <InputLabel>Shipping Country</InputLabel>s
              <Select fullWidth onChange={handleSelect}>
                <MenuItem>Select me</MenuItem>
              </Select>
            </Grid>
            <Grid>
              <InputLabel>Shipping Sundivision</InputLabel>
              <Select fullWidth onChange={handleSelect}>
                <MenuItem>Select me</MenuItem>
              </Select>
            </Grid>
            <Grid>
              <InputLabel>Shipping Options</InputLabel>
              <Select fullWidth onChange={handleSelect}>
                <MenuItem>Select me</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
