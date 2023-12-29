import CHATBOT_ICON from "@assets/chatbot.png";

export default function BigChatBox({
  open,
  onClose,
  staticBackdrop = false,
  children,
}) {
  const handleCloseOnClickingOutside = (e) => {
    if (!staticBackdrop) {
      if (e.target.id === "wrapper") onClose();
    }
  };

  return (
    <div
      id="wrapper"
      onClick={handleCloseOnClickingOutside}
      className={`fixed inset-0 flex justify-center duration-300 ease-in-out z-40 ${
        open ? "visible bg-black/60 backdrop-blur-sm" : "invisible"
      }`}
    >
      <div
        className={`absolute z-50 w-11/12 lg:w-3/6 max-h-[80%] bg-white rounded-tl-md rounded-tr-md shadow pt-3 pb-2 px-2 duration-300 ease-in-out ${
          open ? "top-20 opacity-100" : "top-0 opacity-0"
        } flex justify-between`}
      >
        <div className="flex items-center">
          <img className="rounded-full w-12 h-12" src={CHATBOT_ICON} />
          <div className="pl-2">
            <div className="font-semibold">
              <p className="text-lg">Bot</p>
            </div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>Online
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="py-2 px-4 text-red-500 bg-red-50 hover:bg-red-100 hover:text-red-600 rounded-xl"
        >
          <i className="fa-solid fa-times fa-fw fa-md"></i>
        </button>
      </div>

      <div
        className={`absolute w-11/12 lg:w-3/6 h-[80%] bg-white rounded-md shadow pt-4 duration-300 ease-in-out overflow-x-hidden ${
          open ? "top-20 opacity-100" : "top-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
