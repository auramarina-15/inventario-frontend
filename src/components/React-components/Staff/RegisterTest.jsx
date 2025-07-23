import { useForm } from "react-hook-form";
import { postData } from "../../../utils/staffData";
import { useState } from "react";
import AlertDataError from "../UI/AlertDataError";

const RegisterTest = ({ onClose, formId }) => {
  const [submitError, setSubmitError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await postData(data);
      reset();
      onClose(); // Cierra solo si fue exitoso
      window.dispatchEvent(new CustomEvent("dataPosted"));
    } catch (error) {
      console.error("Error al enviar datos:", error);
      setSubmitError(error.message || "Error al enviar el formulario");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id={formId}>
      {submitError && (
        <AlertDataError text="Error al enviar datos del formulario" />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
            Nombre
          </label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] transition-all 
                ${
                  errors.name
                    ? "border-2 border-red-400"
                    : "border border-[var(--primary)]/30 focus:border-[var(--primary)]"
                } focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500`}
              placeholder="Name staff"
              {...register("name", {
                required: "Nombre requerido",
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
                  message: "Solo letras permitidas",
                },
              })}
            />
            {errors.name && (
              <span className="absolute right-3 top-3.5 text-red-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
            Estado
          </label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] transition-all 
                ${
                  errors.status
                    ? "border-2 border-red-400"
                    : "border border-[var(--primary)]/30 focus:border-[var(--primary)]"
                } focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500`}
              placeholder="Status Staff"
              {...register("status", {
                required: "Estado requerido",
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
                  message: "Solo letras permitidas",
                },
              })}
            />
            {errors.status && (
              <span className="absolute right-3 top-3.5 text-red-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </div>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>
      </div>

      {/* Position */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
          Position
        </label>
        <div className="relative">
          <input
            type="text"
            className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] transition-all 
                ${
                  errors.position
                    ? "border-2 border-red-400"
                    : "border border-[var(--primary)]/30 focus:border-[var(--primary)]"
                } focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500`}
            placeholder="Status Staff"
            {...register("position", {
              required: "Estado requerido",
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
                message: "Solo letras permitidas",
              },
            })}
          />
          {errors.position && (
            <span className="absolute right-3 top-3.5 text-red-500">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </div>
        {errors.position && (
          <p className="text-red-500 text-sm mt-1">{errors.position.message}</p>
        )}
      </div>
    </form>
  );
};

export default RegisterTest;
