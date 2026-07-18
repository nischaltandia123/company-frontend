import Image from "next/image";
import { Bell, Search, UserCircle } from "lucide-react";
import { CDN_URL } from "@/app/config/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}

      <div className="logo-section">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/logo.png`}
          width={64}
          height={64}
          alt="Logo"
        />

        <h2>Company</h2>
      </div>

      {/* Right Side */}

      <div className="nav-actions">
        <div className="search-box">
          <Search size={18} />

          <input type="text" placeholder="Search..." />
        </div>

        <Bell className="icon" />

        <UserCircle className="icon" size={34} />
      </div>
    </nav>
  );
}
