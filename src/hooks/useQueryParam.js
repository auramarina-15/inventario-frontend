import { useState, useEffect } from "react";

export const useQueryParam = (paramName, eventName) => {
  const [paramValue, setParamValue] = useState(null);

  useEffect(() => {
    // Obtener valor inicial del query param
    const searchParams = new URLSearchParams(window.location.search);
    const initialValue = searchParams.get(paramName);
    setParamValue(initialValue);

    // Manejar cambios de navegación (back/forward)
    const handlePopState = () => {
      const newParams = new URLSearchParams(window.location.search);
      setParamValue(newParams.get(paramName));
    };

    // Manejar eventos personalizados de cambio
    const handleParamChanged = (e) => setParamValue(e.detail);

    // Registrar listeners
    window.addEventListener("popstate", handlePopState);
    window.addEventListener(eventName, handleParamChanged);

    // Limpieza
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener(eventName, handleParamChanged);
    };
  }, [paramName, eventName]); // Dependencias configurables

  return paramValue;
};
