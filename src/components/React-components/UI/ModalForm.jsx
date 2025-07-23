import { motion } from "framer-motion";
import React from "react";

export default function ModalForm({
  btn,
  title,
  content,
  id,
  icon,
  w_costumer,
}) {
  const handleClose = () => {
    document.getElementById(id).close(); // Usar el ID dinámico del modal
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`btn bg-[var(--primary)] text-white hover:bg-[var(--secondary)] transition-all duration-300 ${w_costumer} `}
        onClick={() => document.getElementById(id).showModal()}>
        {btn} {icon}
      </motion.button>

      <dialog id={id} className="modal">
        <div className="modal-box bg-[var(--bg-secundary)] rounded-2xl p-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}>
            <h1 className="text-2xl font-bold mb-6 text-[var(--text-main)]">
              {title}
            </h1>
            {React.cloneElement(content, {
              formId: `${id}-form`,
              onClose: handleClose,
            })}

            <div className="modal-action mt-8">
              <div className="flex gap-4">
                <motion.button
                  type="submit"
                  form={`${id}-form`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-[var(--primary)] text-white hover:bg-[var(--secondary)] px-8 py-3 rounded-xl transition-all duration-300 ">
                  Guardar
                </motion.button>
                <form method="dialog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="btn bg-gray-100 text-[var(--text-main)] hover:bg-gray-200 px-8 py-3 rounded-xl transition-all duration-300 ">
                    Cerrar
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </dialog>
    </>
  );
}
