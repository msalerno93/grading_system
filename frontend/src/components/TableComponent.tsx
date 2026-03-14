import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
} from "@mui/material";

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
}

interface TableProps {
  title: string;
  buttonLabel: string;              // <-- NEW
  onButtonClick: () => void;        // <-- NEW
  columns: Column[];
  rows: any[];
  onRowClick?: (row: any) => void;
}

const TableComponent: React.FC<TableProps> = ({
  title,
  buttonLabel,
  onButtonClick,
  columns,
  rows,
  onRowClick,
}) => {
  return (
    <>
      {/* Title */}
      <Typography
        variant="h1"
        sx={{
          paddingTop: "40px",
          textAlign: "center",
          flexGrow: 1,
          fontWeight: 900,
          color: "#ff5353",
          fontSize: "2.8rem",
          letterSpacing: "1px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {title}
      </Typography>

      {/* Button aligned with table */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "1100px",
          margin: "0 auto",
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button
          onClick={onButtonClick}
          sx={{
            background: "linear-gradient(90deg, #ff8a00, #e52e71)",
            color: "#fff",
            fontWeight: 600,
            padding: "10px 22px",
            borderRadius: "12px",
            textTransform: "none",
            fontFamily: "Poppins, sans-serif",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            },
            transition: "0.25s ease",
          }}
        >
          {buttonLabel}
        </Button>
      </Box>

      {/* Table */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            width: "90%",
            maxWidth: "1100px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow
                sx={{
                  background: "linear-gradient(90deg, #ff8a00, #e52e71)",
                }}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || "left"}
                    sx={{
                      color: "#000",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "0.5px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow
                  hover
                  key={rowIndex}
                  onClick={() => onRowClick && onRowClick(row)}
                  sx={{
                    cursor: "pointer",
                    transition: "0.25s ease",
                    "&:nth-of-type(odd)": {
                      backgroundColor: "rgba(255, 240, 245, 0.6)",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255, 200, 220, 0.8)",
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align || "left"}
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.95rem",
                        color: "#333",
                        padding: "14px 16px",
                      }}
                    >
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default TableComponent;
