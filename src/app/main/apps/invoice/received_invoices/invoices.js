import FusePageCarded from "@fuse/core/FusePageCarded";
import withReducer from "app/store/withReducer";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import reducer from "../store";
import InvoicesHeader from "./invoices_Header";
import InvoicesTable from "./invoices_Table";

function Invoices() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <FusePageCarded
      header={<InvoicesHeader />}
      content={<InvoicesTable />}
      scroll={isMobile ? "normal" : "content"}
    />
  );
}

export default withReducer("invoiceApp", reducer)(Invoices);
