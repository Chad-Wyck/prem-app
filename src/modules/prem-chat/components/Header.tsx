import hamburgerMenu from "assets/images/hamburger-menu.svg";
import setting from "assets/images/setting.svg";
import WarningModal from "modules/service/components/WarningModal";
import { useState } from "react";
import WarningIcon from "shared/components/WarningIcon";
import type { HeaderProps } from "shared/types";

const Header = ({ setRightSidebar, hamburgerMenuOpen, setHamburgerMenu, title }: HeaderProps) => {
  const [open, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="md:border-b border-light w-full h-[77px] py-3 flex sticky bg-darkjunglegreen z-[11] top-0">
        <div className="maxMd:w-full flex md:justify-center header__center maxMd:items-center">
          <button
            onClick={() => setHamburgerMenu(!hamburgerMenuOpen)}
            className="md:hidden ml-5 w-10 h-10"
          >
            <img src={hamburgerMenu} alt="msg" width={22} height={22} className="mx-auto" />
          </button>
          <h1 className="flex items-center text-white md:text-xl text-md font-proximaNova-regular mx-[18px]">
            {title}
          </h1>
        </div>
        <div className="md:border-l border-light md:pl-6 flex items-center ml-auto max-w-max w-full md:absolute md:right-0">
          <button type="button" onClick={openModal} className="share-chat__btn">
            Share Chat
          </button>
          <button onClick={() => setRightSidebar(true)} className="setting__btn" type="button">
            <img src={setting} alt="msg" width={22} height={22} />
          </button>
        </div>
      </div>
      <WarningModal
        description="Share Chat is not available yet"
        title="Coming Soon"
        isOpen={open}
        onCancel={closeModal}
        onOk={closeModal}
        icon={<WarningIcon />}
      />
    </>
  );
};

export default Header;
