import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function EditStaff({ onClose, formId, staffData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    if (staffData) {
      reset({
        name: staffData.name,
        lastName: staffData.lastName,
        phone: staffData.phone,
        status: staffData.status.toLowerCase(),
        species: staffData.species,
        gender: staffData.gender.toLowerCase(),
      });
    }
  }, [staffData, reset]);

  const currentValues = watch();

  const onSubmit = (data) => {
    console.log("Datos actualizados:", data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id={formId}>
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
            placeholder="Ej: Juan"
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
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Apellido */}
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
            placeholder="Ej: Pérez"
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
        {errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
        )}
      </div>

      {/* Teléfono */}
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
            placeholder="Ej: +549114567890"
            {...register("phone", {
              required: "Teléfono requerido",
              pattern: {
                value: /^[0-9+]{7,15}$/,
                message: "Número inválido",
              },
            })}
          />
          {errors.phone && (
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
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Estado y Género */}
      <div className="space-y-2 grid grid-cols-2 gap-2">
        {/* Género */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Género</legend>
          <select
            className={`select  bg-[var(--bg-secundary)] ${
              errors.gender ? "border-red-400" : "border-[var(--primary)]/30"
            }`}
            {...register("gender", { required: "Género requerido" })}>
            <option disabled value="">
              Selecciona un Género
            </option>
            <option value="female" selected={currentValues.gender === "female"}>
              Mujer
            </option>
            <option value="male" selected={currentValues.gender === "male"}>
              Hombre
            </option>
            <option
              value="unknown"
              selected={currentValues.gender === "unknown"}>
              Desconocido
            </option>
          </select>
          {errors.gender && (
            <span className="fieldset-label text-red-500">
              {errors.gender.message}
            </span>
          )}
        </fieldset>

        {/* Estado */}
        <fieldset className="fieldset">
          <legend class="fieldset-legend">Estado</legend>
          <select
            className={`select bg-[var(--bg-secundary)] ${
              errors.status ? "border-red-400" : "border-[var(--primary)]/30"
            }`}
            {...register("status", { required: "Estado requerido" })}>
            <option disabled value="">
              Selecciona un Estado
            </option>
            <option value="alive" selected={currentValues.status === "alive"}>
              Vivo
            </option>
            <option value="dead" selected={currentValues.status === "dead"}>
              Muerto
            </option>
            <option
              value="unknown"
              selected={currentValues.status === "unknown"}>
              Desconocido
            </option>
          </select>
          {errors.status && (
            <span className="fieldset-label text-red-500">
              {errors.status.message}
            </span>
          )}
        </fieldset>
      </div>

      {/* Especie */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-[var(--text-main)] mb-1">
          Especie
        </label>
        <input
          type="text"
          className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-secundary)] border ${
            errors.species ? "border-red-400" : "border-[var(--primary)]/30"
          }`}
          placeholder="Ej: Humano"
          {...register("species", { required: "Especie requerida" })}
        />
        {errors.species && (
          <p className="text-red-500 text-sm mt-1">{errors.species.message}</p>
        )}
      </div>
    </form>
  );
}
