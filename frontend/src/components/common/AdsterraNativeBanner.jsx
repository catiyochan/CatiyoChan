import React, { useEffect } from "react";

const AdsterraNativeBanner = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.src = "//pl27861887.effectivegatecpm.com/7c0f1637f186159be3bd760f4a56219e/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    // Append the script to the container
    document.getElementById("container-7c0f1637f186159be3bd760f4a56219e")?.appendChild(script);

    // Cleanup if component unmounts
    return () => {
      const container = document.getElementById("container-7c0f1637f186159be3bd760f4a56219e");
      if (container) container.innerHTML = "";
    };
  }, []);

  return <div id="container-7c0f1637f186159be3bd760f4a56219e"></div>;
};

export default AdsterraNativeBanner;
