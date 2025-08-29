"use client";

import {
  Modal,
  Box,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
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
          p: 3,
          outline: "none",
          maxWidth: "90vw",
          maxHeight: "90vh",
          overflow: "auto", // important for big tables
        }}
      >
        {/* Circular red close button with plain X */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "white",
            color: "black",
            "&:hover": { backgroundColor: "black", color: "white" },
            width: 25,
            height: 25,
            fontSize: "15px",
            border: "1px solid black",
            borderRadius: "50%",
          }}
        >
          X
        </IconButton>

        {/* Responsive Optimized Image */}
        {/* <Image
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
        /> */}

        {/* Table instead of Image */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Size</TableCell>
                <TableCell align="center">Chest (in)</TableCell>
                <TableCell align="center">Length (in)</TableCell>
                <TableCell align="center">Sleeve (in)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { size: "S", chest: 42, length: 25.5, sleeve: 24.5 },
                { size: "M", chest: 44, length: 26.5, sleeve: 25 },
                { size: "L", chest: 46, length: 27, sleeve: 25.5 },
                { size: "XL", chest: 48, length: 27.5, sleeve: 26 },
                { size: "XXL", chest: 50, length: 28, sleeve: 26 },
                { size: "3XL", chest: 52, length: 28.5, sleeve: 26.5 },
                { size: "4XL", chest: 54, length: 29, sleeve: 26.5 },
                { size: "5XL", chest: 56, length: 29.5, sleeve: 27 },

              ].map((row) => (
                <TableRow key={row.size}>
                  <TableCell>{row.size}</TableCell>
                  <TableCell align="center">{row.chest}</TableCell>
                  <TableCell align="center">{row.length}</TableCell>
                  <TableCell align="center">{row.sleeve}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
