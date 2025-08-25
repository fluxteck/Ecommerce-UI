"use client";
import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import AddressForm from "./addressForm";
import { useAddressActions } from "ecom-user-sdk/user";
import { MessageContext } from "../providers/messageContext";
import useMessage from "../hook/messageHook";
export default function EditAddress({
  open,
  setOpen,
  editAddressDetail,
  setEditAddressDetail,
}) {
  const { editAddress } = useAddressActions();
  const { closeMessage, openMessage } = useMessage();
  const {
    register,
    handleSubmit,
    onSubmit,
    // reset,
    formState: { errors },
  } = editAddress({ address: editAddressDetail });
  const handleClose = () => {
    setOpen(false);
    setEditAddressDetail(null);
  };

  const handleAddress = async ({ data: address, extra }) => {
    openMessage("Updating address...");
    const { result, error } = await onSubmit({
      data: address,
      extra: extra,
    });
    // console.log(result);

    if (result.success) {
      console.log("Address updated successfully");
      closeMessage("Address updated successfully", "success");
      handleClose();
      //   reset();
    } else {
      console.log("Failed to add address");
    }
    // console.log(result);
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Address</DialogTitle>
      <DialogContent dividers>
        <form
          onSubmit={handleSubmit((data) =>
            handleAddress({
              data: data,
              extra: { addressId: editAddressDetail.id },
            })
          )}
        >
          <AddressForm register={register} errors={errors} />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Close
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Edit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
