import { useQueryParam } from "../../../hooks/useQueryParam";
import { useFetch } from "../../../hooks/useFetch";
import { DataId } from "../../../utils/staffData";
import AlertDataError from "../UI/AlertDataError";
import LoadingStaff from "../UI/LoadingStaff";
import StaffContent from "./StaffContent";

export default function InfoStaff() {
  const staffId = useQueryParam("id", "staffIdChanged");

  const { data: staffData, loading, error } = useFetch(DataId, staffId);

  if (error) return <AlertDataError text="Personal no encontrado" />;
  if (loading) return <LoadingStaff />;
  if (staffData) return <StaffContent data={staffData} />;

  return (
    <div className="p-4 rounded-lg min-h-[200px] flex items-center justify-center h-full">
      <p className="text-gray-500 italic">Selecciona un empleado de la lista</p>
    </div>
  );
}
