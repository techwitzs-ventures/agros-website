import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import { Units } from "app/configs/unitConfig";
import { selectAllItemsCategories } from "app/store/allItemsCategoriesSlice";

function BasicInfoTab(props) {
  const methods = useFormContext();
  const { control, formState, getValues } = methods;
  const { errors } = formState;
  const val = getValues();
  const products = useSelector(selectAllItemsCategories);
  const user = useSelector(selectUser);


  return (
    <>
      <div>
        <Card component={motion.div} className="flex mb-32">
          <CardContent className="flex flex-col flex-1 px-32 py-24">
            <form
              name="registerForm"
              noValidate
              className="flex flex-col"
            >
              {val.item_code !== undefined && <Controller
                name="item_code"
                defaultValue={val.item_code}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mt-8 mb-16"
                    required
                    disabled
                    label="Item Code"
                    id="item_code"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />}
              <Controller
                name="items_cat_id"
                control={control}
                render={({ field }) => (
                  <FormControl className="mb-24" required>
                    <InputLabel>Items Category</InputLabel>
                    <Select
                      {...field}
                      label="Items Category"
                      error={!!errors.items_cat_id}
                    >
                      {products.map((itemcategory) => (
                        <MenuItem key={itemcategory.id} value={itemcategory.items_cat_id}>
                          {itemcategory.items_cat_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />

              <Controller
                name="item_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-24"
                    label="Name"
                    type="text"
                    error={!!errors.item_name}
                    helperText={errors?.item_name?.message}
                    variant="outlined"
                    required
                  />
                )}
              />

              <Controller
                name="rate"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-24"
                    label={`Rate ( ${user.organization_data.currency_code} )`}
                    type="text"
                    error={!!errors.rate}
                    helperText={errors?.rate?.message}
                    variant="outlined"
                    required
                  />
                )}
              />

              <Controller
                name="unit"
                control={control}
                render={({ field }) => (
                  <FormControl className="mb-24" required>
                    <InputLabel>Unit</InputLabel>
                    <Select
                      {...field}
                      label="Unit"
                      error={!!errors.unit}
                    >
                      {Units.map((units) => (
                        <MenuItem key={units.id} value={units.value}>
                          {units.value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default BasicInfoTab;