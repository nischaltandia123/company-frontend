import Image from "next/image";
import { CDN_URL } from "./config/image";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <span className="badge">Welcome to Company Dashboard</span>

            <h1>
              Modern Dashboard <br />
              Built with Next.js
            </h1>

            <p>
              Fast, responsive and ready to integrate with your backend APIs.
              This dashboard is optimized for production deployments.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Get Started</button>

              <button className="secondary-btn">Learn More</button>
            </div>
          </div>

          <div className="hero-right">
            <Image
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/images.png`}
              alt="Hero"
              width={550}
              height={450}
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}