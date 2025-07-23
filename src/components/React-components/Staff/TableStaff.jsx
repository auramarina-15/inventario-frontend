import { useState, useEffect } from "react";
import TableContent from "../UI/TableContent";
import { useFetch } from "../../../hooks/useFetch";
import { Data } from "../../../utils/staffData";

export default function TableStaff() {
  const [reloadTrigger, setReloadTrigger] = useState(0);
  const { data: staffData, loading, error } = useFetch(Data, reloadTrigger);

  useEffect(() => {
    const handleDataPosted = () => {
      setReloadTrigger((prev) => prev + 1); // Incrementa el número
    };

    window.addEventListener("dataPosted", handleDataPosted);
    return () => window.removeEventListener("dataPosted", handleDataPosted);
  }, []);

  const handleStaffClick = (id) => {
    const url = new URL(window.location.href);
    url.searchParams.set("id", id);
    window.history.pushState({}, "", url);
    window.dispatchEvent(new CustomEvent("staffIdChanged", { detail: id }));
  };

  const staffColumns = [
    {
      key: "image",
      header: "Imagen",
      className: "w-10 px-",
      render: (item) => (
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={item.image} alt={item.name} />
          </div>
        </div>
      ),
    },
    { key: "name", header: "Nombre", className: "w-[175px] px-8 text-left" },
    { key: "species", header: "Especie" },

    {
      key: "status",
      header: "Estado",
      render: (item) => {
        const statusMap = {
          activo: { class: "badge-success", text: "Activo" },
          inactivo: { class: "badge-error", text: "Inactivo" },
          desconocido: { class: "badge-warning", text: "Desconocido" },
        };
        const normalizedStatus = item.status.toLowerCase().trim();
        const statusConfig = statusMap[normalizedStatus] || {
          class: "badge-warning",
          text: item.status,
        };
        return (
          <span className={`badge ${statusConfig.class}`}>
            {statusConfig.text}
          </span>
        );
      },
    },
  ];

  return (
    <TableContent
      title="Gestión de personal"
      data={staffData || []}
      columns={staffColumns}
      loading={loading}
      error={error}
      searchPlaceholder="Buscar personal..."
      itemsPerPage={5}
      renderActions={(item) => (
        <button
          className="btn btn-dash btn-accent"
          onClick={() => handleStaffClick(item.id)}>
          Detalles
        </button>
      )}
    />
  );
}
