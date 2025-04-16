import { signInWithGoogle } from "@/lib/firebase";
import React from "react";

interface LoginButtonProps {
    imageSrc: ImageMetadata;
}

export default function LoginButton({ imageSrc }: LoginButtonProps) {
    return (
        <button
            type="button" // Explicitly set the button type
            onClick={signInWithGoogle}
            style={{
                width: "200px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                display: "inline-flex", // Use inline-flex to fit content
                alignItems: "center", // Center image vertically
                padding: 0, // Remove default button padding
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                transition: "box-shadow 0.3s ease",
                borderRadius: "5px",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "3px 3px 7px rgba(0, 0, 0, 0.4)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
            }}
            onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.5)";
            }}
            onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = "3px 3px 7px rgba(0, 0, 0, 0.4)";
            }}
            onFocus={(e) => {
                e.currentTarget.style.boxShadow = "3px 3px 7px rgba(0, 0, 0, 0.4)"; // Apply the same style as onMouseOver
                // You might want a slightly different focus style for better distinction
            }}
            onBlur={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)"; // Revert to the default style
            }}
        >
            <img src={imageSrc.src} alt="Sign In with Google" style={{ display: "block" }} />
        </button>
    );
}