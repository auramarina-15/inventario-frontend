export default function UserBar() {
  return (
    <>
      <div className="divider divider-accent "></div>
      <div class="grid grid-cols-[25%_1fr] grid-rows-[1fr] gap-y-[10px] gap-x-[20px] mx-5 ">
        <div className="">
          <div className="avatar avatar-placeholder">
            <div className="bg-[#202020] text-neutral-content w-12 rounded-full">
              <span>AG</span>
            </div>
          </div>
        </div>
        <div className="flex items-center text-[15px] text[var(--text-main)]">
          name
        </div>
      </div>
    </>
  );
}
