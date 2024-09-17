"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { logout } from "@/src/services/AuthService";
const NavbarDropdown = () => {
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" name="Rak" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem onClick={() => handleNavigation("/profile")}>
            Profile
          </DropdownItem>

          <DropdownItem
            onClick={() => handleNavigation("/profile/create-post")}
          >
            Create Post
          </DropdownItem>

          <DropdownItem onClick={() => handleNavigation("/profile/setting")}>
            Settings
          </DropdownItem>

          <DropdownItem
            onClick={() => handleNavigation("/profile/claim-request")}
          >
            Claim Request
          </DropdownItem>

          <DropdownItem
            onClick={() => handleLogout()}
            className="text-danger"
            color="danger"
          >
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
