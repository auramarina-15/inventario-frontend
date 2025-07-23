import { useState } from "react";
import { AddIcon } from "../../../assets/Icons/StaffIcon";

import AlertDataError from "../UI/AlertDataError";
import ModalForm from "./ModalForm";
import {
  NextIcon,
  FormerIcon,
  SearchIcon,
} from "../../../assets/Icons/TableIcon";
import RegisterTest from "../Staff/RegisterTest";

export default function TableContent({
  title,
  data = [],
  columns,
  loading,
  error,
  itemsPerPage = 5,
  searchPlaceholder = "Buscar...",
  renderActions,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (error)
    return <AlertDataError text="Ocurrio un Error al cargar los datos" />;

  return (
    <div className="h-full flex flex-col rounded-lg p-3">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 px-2">
        <h1 className="text-3xl font-mono text-[var(--primary)]">{title}</h1>

        <div className="flex flex-col items-end gap-3">
          <ModalForm
            btn="Abrir formulario"
            title="Registro de personal"
            content={<RegisterTest />}
            id="register"
            icon={<AddIcon />}
          />

          <label className="input" button="Registrar personal">
            <SearchIcon />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={handleSearch}
            />
          </label>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-auto rounded-lg border border-base-300">
          <table className="table table-auto w-full relative">
            <thead className="sticky top-0">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className={column.className || ""}>
                    {column.header}
                  </th>
                ))}
                {renderActions && <th className="w-30">Acciones</th>}
              </tr>
            </thead>

            <tbody className="[height:_calc(100vh-320px)] top-9">
              {paginatedData.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-base-300 transition-colors h-14">
                  {columns.map((column) => (
                    <td key={column.key} className={column.cellClassName || ""}>
                      {column.render ? column.render(item) : item[column.key]}
                    </td>
                  ))}
                  {renderActions && <td>{renderActions(item)}</td>}
                </tr>
              ))}

              {/* Ghost Rows */}
              {Array(itemsPerPage - paginatedData.length)
                .fill()
                .map((_, index) => (
                  <tr
                    key={`ghost-${index}`}
                    className="invisible h-14"
                    aria-hidden="true">
                    <td colSpan={columns.length + (renderActions ? 1 : 0)}></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="mt-4 pt-4 border-t border-base-300">
          {filteredData.length === 0 ? (
            <div className="text-center text-gray-500 py-2">
              No se encontraron resultados
            </div>
          ) : (
            <div className="flex justify-between items-center px-2">
              <div className="text-sm text-gray-500">
                Mostrando {startIndex + 1} -{" "}
                {Math.min(endIndex, filteredData.length)} de{" "}
                {filteredData.length}
              </div>

              <div className="join">
                <button
                  className="join-item btn"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}>
                  <FormerIcon />
                </button>
                <button className="join-item btn">
                  Página {currentPage} de {totalPages}
                </button>
                <button
                  className="join-item btn"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}>
                  <NextIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
