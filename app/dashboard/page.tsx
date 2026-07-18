import {
  Users,
  IndianRupee,
  ShoppingCart,
  Eye,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, Monalisa 👋</p>
        </div>
      </div>

      <section className="cards">

        <div className="card blue">
          <Users size={35} />
          <h3>Total Users</h3>
          <h2>1,254</h2>
        </div>

        <div className="card green">
          <IndianRupee size={35} />
          <h3>Revenue</h3>
          <h2>₹2,50,000</h2>
        </div>

        <div className="card orange">
          <ShoppingCart size={35} />
          <h3>Orders</h3>
          <h2>320</h2>
        </div>

        <div className="card red">
          <Eye size={35} />
          <h3>Visitors</h3>
          <h2>8,940</h2>
        </div>

      </section>

      <section className="dashboard-grid">

        <div className="dashboard-box">
          <h3>Recent Activity</h3>

          <ul>
            <li>✔ New user registered</li>
            <li>✔ Order #1024 completed</li>
            <li>✔ Payment received</li>
            <li>✔ Profile updated</li>
          </ul>
        </div>

        <div className="dashboard-box">
          <h3>Quick Actions</h3>

          <button>Add User</button>

          <button>Create Report</button>

          <button>Settings</button>
        </div>

      </section>
    </div>
  );
}