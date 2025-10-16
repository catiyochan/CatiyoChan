import { useEffect } from "react";

const AdsterraSocialBar = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "//pl27861757.effectivegatecpm.com/06/c2/7a/06c27a3d2c7cd1ce0d4c36b1fd08ebba.js";
    script.type = "text/javascript";
    script.async = true;

    // Append to body
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Social bar shows itself, no need to return anything
};

export default AdsterraSocialBar;
