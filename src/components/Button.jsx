import React from "react";
import "./Button.css";

export default function Button({
    variant = "primary", //sets the look
    size = "md", // sets the size 
    isLoading = false, // shows loading state if true 
    disabled = false, // disables the button if true 
    children, // 4 whatever I put between <Button>
    ...rest // captures wany other props like onClick type etc.
}) {
      
return (
    <button 
    // CSS classes change based on variant and size
    className={'btn btn-${variant} btn-${size}'}
    // Disable the button if disabled or loading 
    disabled={disabled || isLoading}
    // Accessibility attributes: tells screen readers the button is busy
    aria-busy={isLoading}
    aria-live="polite"
    {...rest} // spread the remaining props to the <button>
    >

       {isLoading ? "⏳" : children} 
       {/* if loading show spinner emoji otherwise show children (button test)*/}
    </button>
 );
}