import React from "react";
import Logo from "./Logo.jpg"; // Ensure you have a logo image in the src directory

const App = () => {
  return (
    <div>
      <style>{`
        body {
          font-family: "Segoe UI", sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
          color: #333;
        }

        header {
          background-color: #004080;
          color: white;
          padding: 2rem 1rem;
          text-align: center;
        }

        header h1 {
          margin: 0;
        }

        .container {
          max-width: 900px;
          margin: auto;
          padding: 2rem 1rem;
        }

        .section {
          margin-bottom: 2rem;
        }

        .section h2 {
          color: #004080;
          margin-bottom: 1rem;
        }

        .info p,
        .product-list li {
          line-height: 1.6;
        }

        .product-list li {
          margin-bottom: 1rem;
        }

        .footer {
          text-align: center;
          padding: 1rem;
          background-color: #eee;
          color: #777;
          font-size: 0.9rem;
        }

        @media (max-width: 600px) {
          header,
          .container {
            padding: 1rem;
          }
        }
      `}</style>

      <header>
        <img
          src={Logo}
          alt="GoldMine Logo"
          style={{ maxHeight: "80px", marginBottom: "1rem" }}
        />
        <h1>GoldMine Link Solution</h1>
        <p>Empowering Businesses Through CRM, Training, and Coaching</p>
      </header>

      <div className="container">
        <div className="section info">
          <h2>Company Information</h2>
          <p>
            <strong>Address:</strong> Lot 1001 Menara 1, Faber Towers, Jalan
            Desa Bahagia, Taman Desa, 58100 Kuala Lumpur, Malaysia
          </p>
          <p>
            <strong>Telephone:</strong> +6012-3288-102
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:wayne@inforlink.net">wayne@inforlink.net</a>,{" "}
            <a href="mailto:sherrymcaw1960@gmail.com">
              sherrymcaw1960@gmail.com
            </a>
          </p>
        </div>

        <div className="section products">
          <h2>Our Solutions</h2>
          <ul className="product-list">
            <li>
              <strong>GoldMine CRM System</strong>
              <ul>
                <li>Most Affordable CRM for Small Business</li>
                <li>Assign tasks & activities</li>
                <li>Sales forecasting and follow up activities</li>
                <li>Marketing campaign management</li>
              </ul>
            </li>
            <li>
              <strong>Quotation System</strong>
            </li>
            <li>
              <strong>Training</strong>
            </li>
            <li>
              <strong>Business Coaching</strong>
            </li>
          </ul>
        </div>

        <div className="section contact">
          <h2>Contact Us</h2>
          <p>
            Sales / Support: <strong>+6012-3288-102</strong>
          </p>
        </div>
      </div>

      <div className="footer">
        &copy; 2025 GoldMine Link Solution. All rights reserved.
      </div>
    </div>
  );
};

export default App;
