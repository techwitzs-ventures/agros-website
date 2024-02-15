import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import {
  selectRecievedSalesOrdersSearchText,
  setrecievedsalesordersSearchText,
  setrecievedsalesordersActiveStatus,
} from "../store/recieved_sales_orders_Slice";
import { useState } from "react";
import { selectUser } from "app/store/userSlice";
import { showMessage } from "app/store/fuse/messageSlice";

function RecievedSalesOrdersHeader(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setchecked] = useState(false);
  const searchText = useSelector(selectRecievedSalesOrdersSearchText);
  const user = useSelector(selectUser);

  const handleActiveStatusChange = async (event) => {
    try {
      setchecked(event.target.checked);
      dispatch(setrecievedsalesordersActiveStatus(event));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">
      <Typography
        component={motion.span}
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="text-24 md:text-32 font-extrabold tracking-tight"
      >
        Recieved Sales Orders
      </Typography>

      <div className="flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          <FormControlLabel
            control={
              <Switch
                className="whitespace-nowrap mx-4"
                variant="contained"
                color="secondary"
                checked={checked}
                onChange={handleActiveStatusChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Show active only"
          />
        </motion.div>
        <Paper
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
        >
          <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

          <Input
            placeholder="Search Sales Order"
            className="flex flex-1"
            disableUnderline
            fullWidth
            value={searchText}
            inputProps={{
              "aria-label": "Search",
            }}
            onChange={(ev) => dispatch(setrecievedsalesordersSearchText(ev))}
          />
        </Paper>
      </div>
    </div>
  );
}

export default RecievedSalesOrdersHeader;
