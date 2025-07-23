import { DeleteIcon, EditIcon } from "../../../assets/Icons/StaffIcon";
import EditStaff from "./EditStaff";
import ModalContent from "../UI/ModalContent";
import ModalForm from "../UI/ModalForm";

export default function StaffContent({ data }) {
  const status = data.status.toLowerCase();
  const statusConfig = {
    alive: {
      ring: "ring-[var(--primary)]",
      badge: "badge-success",
    },
    dead: {
      ring: "ring-red-300",
      badge: "badge-error",
    },
    unknown: {
      ring: "ring-amber-300",
      badge: "badge-warning",
    },
  };

  return (
    <div className="p-8 rounded-lg duration-300 animate-fade-in">
      <div className="flex items-center space-x-6">
        <div className="shrink-0">
          <div
            className={`avatar ${
              status === "alive" ? "avatar-online" : "avatar-offline"
            } relative`}>
            <div
              className={`w-20 h-20 rounded-full ring-2 ${
                statusConfig[status]?.ring || "ring-amber-300"
              } ring-offset-2`}>
              <img
                src={data.image}
                alt={data.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-grow">
          <h2 className="text-2xl font-bold truncate mb-1">{data.name}</h2>
          <div
            className={`badge ${
              statusConfig[status]?.badge || "badge-warning"
            }`}>
            {data.status}
          </div>
          <div className="flex space-x-2 mt-1">
            <div className="badge badge-secondary">{data.gender}</div>
            <div className="badge badge-secondary">{data.species}</div>
          </div>
        </div>

        {/* Botones de Editar y Eliminar */}

        <div className="flex flex-col gap-2 ml-auto">
          <div>
            <ModalForm
              w_costumer="w-32"
              btn="Editar"
              icon={<EditIcon />}
              title="Editar personal"
              content={<EditStaff staffData={data} />}
              id="edit"
            />
          </div>

          <div>
            <ModalContent
              title="Eliminar personal"
              name={"Eliminar"}
              icon={<DeleteIcon />}
              content="Seguro que desea eliminar este trabajador?"
              add="btn-error btn-dash"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
