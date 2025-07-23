export default function ModalContent({ title, name, content, icon, add }) {
  return (
    <div>
      <button
        className={`btn ${add} w-32`}
        onClick={() => document.getElementById("my_modal_1").showModal()}>
        {name} {icon}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className=" font-medium text-xl">{title}</h3>
          <p className="text-[20px]">{content}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn mx-2 btn-dash btn-error">Si</button>
              <button className="btn">No</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
