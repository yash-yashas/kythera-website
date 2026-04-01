# Kythera Systems - Corporate Website 🚀

This is the repository for the **Kythera Systems** professional corporate website. It is designed to be a modern, minimal, and high-performance showcase of the company's 5 core digital services, internship programs, and business operations.

## 🛠️ Technology Stack Used

This project was built from scratch using the latest modern frontend infrastructure:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router, Version 16+)
*   **UI Library:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (configured entirely in `globals.css` using modern CSS variables for a deep tech dark theme)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (for type safety and scalable code)
*   **Icons:** `lucide-react` (clean, professional SVG vector icons used natively throughout the site)
*   **Fonts:** Custom Google Fonts configured natively in Next.js (`Inter` for modern sans-serif readable copy, and `Outfit` for sleek monolithic monospace headers).

> **Note on Databases:** 
> 🛑 Currently, **NO database** is attached to this project. The website acts as a static, blazing-fast frontend corporate portfolio. The "Apply for Internship" and "Contact Us" forms are currently mocked (they just show a success alert). 
> 
> *Future implementation note: If you want to connect these forms to a database, you would typically integrate a service like **Supabase**, **Firebase**, or simply use a form-handler API like **Formspree** or **Resend** without needing a full database context.*

---

## 🏗️ Project Architecture & Pages

The application is structured inside the `src/` directory separating components from routable pages natively.

### 🌐 Pages (`src/app/`):
1.  **Home (`/`)**: High conversion landing page featuring a Hero section with the global tagline, a responsive grid of the 5 Core Services, and a "Why Choose Us" block prioritizing the dynamic internship tracks.
2.  **Services (`/services`)**: A deep dive listing highly specific service packages:
    *   Website Development + Maintenance
    *   Billing / Inventory Software
    *   Internship + Training Program
    *   Digital Services
    *   Cloud Services
3.  **Internship Program (`/internships`)**: Features an overarching program layout without hard-coding specific tech stacks. Outlines primary domains (Web Dev, Digital Marketing, Cybersecurity, Analytics, AI) and includes a mocked form for applications.
4.  **Portfolio (`/portfolio`)**: A sleek case study grid filtering past SaaS dashboards, Cloud deployments, and local business websites.
5.  **About Us (`/about`)**: Lists the founders' strategic vision, company mission, and the lean architectural team structure.
6.  **Contact (`/contact`)**: Global contact details mapped alongside a visually themed Google Maps placeholder and an inquiry form.

### 🧩 Reusable Components (`src/components/`):
*   `Navbar.tsx`: Responsive top-navigation bar featuring blurred backdrop transparency and an interactive mobile drawer (using `useState` and Client-Side rendering). *Note: The legacy Business Proposal download logic was completely purged from this component.*
*   `Footer.tsx`: Global footer routing all site links alongside standard non-trademarked generic social icons.
*   `ServiceCard.tsx`: A lightweight, heavily customizable card element displaying specific service packages efficiently.

---

## 💻 How to Run Locally

If you need to make changes or preview the site on your machine:

1.  Make sure you are in the project folder:
    ```bash
    cd "kythera website"
    ```
2.  Install any missing node modules (if you haven't already):
    ```bash
    npm install
    ```
3.  Start the Next.js development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page hot-reloads dynamically as you edit the source files.

---

## 🚀 Deployment (Vercel)

This project is perfectly natively configured to be deployed on **Vercel** via GitHub. 
Since Next.js is maintained by Vercel, the architecture we've built requires zero custom deployment configuration.
1. Push this folder to a GitHub repository.
2. Link the repository to your Vercel Dashboard.
3. Vercel will automatically detect Next.js, run `npm run build`, and deploy your live URL within seconds with global CDN caching natively enabled.
