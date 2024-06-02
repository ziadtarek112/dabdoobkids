import React from "react";
import styles from "../styles/components/Category.module.css";
import bodySuit from "../images/body-suit.png";
import { useNavigate } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";
export default function Category({ item }) {
  console.log(item);
  const navigate = useNavigate();

  return (
    <div
      style={{ margin: "8px auto", maxWidth: "100%" }}
      onClick={() => {
        // navigate(`search/${item.id}`);
        navigate(`/search/?categoryId=${item.id}`);
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          justifyContent: "center",
          backgroundColor: "#F4F4F4",
          padding: { lg: "22px", md: "18px", xs: "8px" },
          borderRadius: "8px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <div className={styles.title}>{item.name}</div>
          <div className={styles.subtitle}>2310 Product</div>
        </div>

        <CardMedia
          component={"img"}
          sx={{
            width: { lg: "140px", md: "110px", xs: "80px" },
            height: { lg: "120px", md: "90px", xs: "60px" },
            objectFit: "contain",
          }}
          src={item?.images?.[0]}
          alt="Category Image"
        />
      </Box>
    </div>
  );
}
