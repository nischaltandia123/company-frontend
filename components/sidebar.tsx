import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Phone,
  House,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Company</h2>

      <nav>
        <ul className="sidebar-menu">
          <li>
            <Link href="/dashboard">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <Users size={20} />
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <Phone size={20} />
              <span>Contact</span>
            </Link>
          </li>

          <li>
            <Link href="/">
              <House size={20} />
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}