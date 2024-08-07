import { Box, Modal } from "@mui/material";
import Counter from "./counter";
import { useNavigate } from "react-router-dom";

export default function SingleProductModal({
  open,
  handleClose,
  productDetails,
}) {
  const navigate = useNavigate();
  return (
    <Modal open={open} >
      <Box>
        <Box sx={style}>
          <div
            style={{
              width: "100%",
              margin: "6px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{display : "flex", justifyContent : "space-between"}}>
              <h2 style={{ marginBottom: "16px", fontWeight: "500" }}>
                Added to Cart
              </h2>
              <span style={{cursor : "pointer"}} onClick={() => handleClose(false)}>x</span>
            </div>
            <div style={{ display: "flex", width: "100%", gap: "8px" }}>
              <img
                style={{ width: "116px", height: "150px", flex: 1 }}
                src={productDetails?.images[0]}
                alt="product"
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flex: 2,
                }}
              >
                <div>
                  <h2 style={{ fontWeight: "500" }}>
                    {productDetails?.description}
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Counter initialValue={1} />
                  <h3>400$</h3>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "8px",
              }}
            >
              <h2>Subtotal</h2>
              <h2>3000$</h2>
            </div>

            <p style={{ marginTop: "16px" }}>
              Taxes and shipping fee will be calculated at checkout
            </p>

            <div
              style={{
                display: "flex",
                gap: "32px",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <button
                style={{
                  backgroundColor: "white",
                  border: "1px solid var(--errie-black)",
                  padding: "12px 32px",
                  fontWeight: "400",
                  fontSize: "18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/cart");
                  handleClose(false);
                }}
              >
                View Cart
              </button>
              <button
              onClick={() => {
                navigate("/checkout");
                handleClose(false);}
              }
                style={{
                  backgroundColor: "var(--brown)",
                  color: "white",
                  border: "none",
                  padding: "12px 32px",
                  fontWeight: "400",
                  fontSize: "18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </Box>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  bgcolor: "background.paper",
  
  boxShadow: 24,
  borderRadius: "10px",
  
  p: 4,
};
