import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import SelectCustomer from "./SaleHistoryProducts/SelectCustomer";
import ProductSearch from "./SaleHistoryProducts/ProductSearch";

const ProductPage = () => {
  const [term, setTerm] = useState("");

  return (
    <Grid container direction="column">
      <Grid item>
        <SelectCustomer />
      </Grid>
      <Grid item>
        <ProductSearch />
      </Grid>
    </Grid>
  );
};

export default ProductPage;
