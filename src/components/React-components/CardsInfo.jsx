import { RightIcon } from "../../assets/Icons/CartIcons";


export default function CardsInfo({ title, sub, url = "/", Icon }) {
  return (
    <div
      className="text-white p-4 rounded-2xl shadow-md min-h-[180px]"
      style={{
        background: "linear-gradient(135deg, #019aa8 0%, #268890 100%)",
      }}>
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-center ml-4">
          <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
          <p className=" text-[14px] lg:text-[18px] mt-0.5">
            Un total de: <span className="font-bold text-[15px]">{sub}</span>
          </p>
        </div>

        <div className="flex flex-col items-end justify-between">
          <div className="bg-[#a3d5db]/20 p-4 rounded-full flex mt-6">
            <Icon className="h-10 w-10 lg:h-14 lg:w-14 text-[#c2eef3]" />
          </div>
          <a href={url}>
            <div className="flex items-center gap-2 text-sm hover:underline cursor-pointer pb-2 text-[#a3d5db] hover:text-sky-50">
              <p className="">Ver más detalles</p>
              <RightIcon className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
