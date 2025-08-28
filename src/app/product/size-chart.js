"use client";

import { Modal, Box, IconButton } from "@mui/material";
import Image from "next/image";

export default function ImagePopup({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="image-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 2,
          outline: "none",
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Circular red close button with plain X */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "red",
            color: "white",
            "&:hover": { backgroundColor: "#cc0000" },
            width: 30,
            height: 30,
            fontSize: "15px",
            // padding: "20px",
            borderRadius: "50%",
            // fontWeight: "bold",
          }}
        >
          X
        </IconButton>

        {/* Responsive Optimized Image */}
        <Image
          src="https://yxdyohefwpubwydtctbs.supabase.co/storage/v1/object/public/products/products/1ddb00a9-a9a7-40d4-9df6-178b409cb1ac-1754762790581-j9mee0.blob"
          alt="Popup"
          width={1200}
          height={800}
          style={{
            maxWidth: "80vw",
            maxHeight: "80vh",
            width: "auto",
            height: "auto",
            objectFit: "cover",
            borderRadius: "8px",
          }}
          priority
        />
      </Box>
    </Modal>
  );
}
