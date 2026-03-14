import { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

interface FieldConfig {
  name: string;
  label: string;
  type?: "text" | "number" | "select";
  options?: { label: string; value: any }[]; // For dropdowns
}

interface PopUpModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  fields: FieldConfig[];
  initialValues?: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
}

const PopUpModal = ({
  open,
  onClose,
  title,
  fields,
  initialValues = {},
  onSubmit,
}: PopUpModalProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

useEffect(() => {
  if (open) {
    setFormData(initialValues || {});
  }
}, [open]);


  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          bgcolor: "white",
          padding: 4,
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            marginBottom: 3,
            textAlign: "center",
            color: "#ff5353",
          }}
        >
          {title}
        </Typography>

        {fields.map((field) => {
          if (field.type === "select") {
            return (
              <TextField
                key={field.name}
                select
                label={field.label}
                fullWidth
                value={formData[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                sx={{ marginBottom: 2 }}
              >
                {field.options?.map((opt) => (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                ))}
              </TextField>
            );
          }

          return (
            <TextField
              key={field.name}
              label={field.label}
              type={field.type || "text"}
              fullWidth
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              sx={{ marginBottom: 2 }}
            />
          );
        })}

        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              background: "linear-gradient(135deg, #ff8a00, #e52e71)",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PopUpModal;
