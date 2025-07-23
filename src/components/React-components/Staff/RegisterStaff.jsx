import { useForm } from "react-hook-form";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

const RegisterStaff = ({ onClose, formId }) => {
  const [date, setDate] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Hacer funcion para metodo post desde aqui
    console.log("Form Data:", data);

    const response = await postData(data);
    console.log("Respuesta del servidor:", response);

    reset();
    setDate(undefined);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id={formId}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
            Nombre
          </label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] transition-all 
                ${
                  errors.firstName
                    ? "border-2 border-red-400"
                    : "border border-[var(--primary)]/30 focus:border-[var(--primary)]"
                } focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500`}
              placeholder="Juan"
              {...register("firstName", {
                required: "Nombre requerido",
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
                  message: "Solo letras permitidas",
                },
              })}
            />
            {errors.firstName && (
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
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
            Apellido
          </label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] transition-all 
                ${
                  errors.lastName
                    ? "border-2 border-red-400"
                    : "border border-[var(--primary)]/30 focus:border-[var(--primary)]"
                } focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500`}
              placeholder="Pérez"
              {...register("lastName", {
                required: "Apellido requerido",
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
                  message: "Solo letras permitidas",
                },
              })}
            />
            {errors.lastName && (
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
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
          Correo electrónico
        </label>
        <div className="relative">
          <input
            type="email"
            className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] transition-all 
              ${
                errors.email
                  ? "border-2 border-red-400"
                  : "border border-[var(--primary)]/30 focus:border-[var(--primary)]"
              } focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500`}
            placeholder="juan.perez@ejemplo.com"
            {...register("email", {
              required: "Email requerido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email inválido",
              },
            })}
          />
          {errors.email && (
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
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone and Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
            Teléfono
          </label>
          <div className="relative">
            <input
              type="tel"
              className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] transition-all 
                ${
                  errors.phone
                    ? "border-2 border-red-400"
                    : "border border-[var(--primary)]/30 focus:border-[var(--primary)]"
                } focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500`}
              placeholder="+34 600 000 000"
              {...register("phone", {
                required: "Teléfono requerido",
                pattern: {
                  value: /^[0-9+\-() ]+$/,
                  message: "Número inválido",
                },
              })}
            />
            {errors.phone && (
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
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
            Empresa <span className="text-gray-500">(opcional)</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] border border-[var(--primary)]/30 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500"
            placeholder="Nombre de la empresa"
            {...register("company")}
          />
        </div>
      </div>

      {/* Website */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
          Sitio web <span className="text-gray-500">(opcional)</span>
        </label>
        <div className="relative">
          <input
            type="url"
            className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] transition-all 
              ${
                errors.website
                  ? "border-2 border-red-400"
                  : "border border-[var(--primary)]/30 focus:border-[var(--primary)]"
              } focus:ring-1 focus:ring-[var(--primary)] placeholder-gray-500`}
            placeholder="https://www.ejemplo.com"
            {...register("website", {
              pattern: {
                value:
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                message: "URL inválida",
              },
            })}
          />
          {errors.website && (
            <p className="text-red-500 text-sm mt-1">
              {errors.website.message}
            </p>
          )}
        </div>
      </div>

      {/* Date Picker */}

      <div className="space-y-2 ">
        <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
          Fecha de Registro <span className="text-gray-500">(opcional)</span>
        </label>
        <button
          type="button" // <- Esto es lo que falta
          popoverTarget="rdp-popover"
          className="input input-border  bg-[var(--bg-secundary)] border border-[var(--primary)]/30 focus:border-[var(--primary)] "
          style={{ anchorName: "--rdp" }}>
          {date ? date.toLocaleDateString() : "Pick a date"}
        </button>

        <div
          popover="auto"
          id="rdp-popover"
          className="dropdown [&::popover-open]:anchor-bottom  " // Añade esta clase
          style={{
            anchorName: "--rdp",
            bottom: "calc(anchor(top) - 8px)", // Ajusta posición
            transform: "translateY(-100%)", // Invierte dirección
          }}>
          <DayPicker
            className="react-day-picker"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </form>
  );
};

export default RegisterStaff;
