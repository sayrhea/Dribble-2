import React from "react";
import { FaArrowRight } from "react-icons/fa";

function ShopPage() {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h1 style={{ fontSize: "80px", fontFamily: "Roboto" }}>Shop</h1>
          <h1
            style={{
              fontFamily: "IBM Plex Serif",
              fontSize: "70px",
            }}
          >
            Man
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <div>
            <h1 style={{ fontSize: "80px", fontFamily: "Roboto" }}>Shop</h1>
            <h1
              style={{
                fontFamily: "IBM Plex Serif",
                fontSize: "70px",
              }}
            >
              Woman
            </h1>
          </div>
          <button
            style={{
              backgroundColor: "#1C49DF",
              textAlign: "center",
              color: "white",
              fontSize: "19px",
              padding: "1px 18px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <FaArrowRight />
          </button>
        </div>
      </header>
    </div>
  );
}

export default ShopPage;
