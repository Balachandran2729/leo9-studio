# Leo9 Studio - Internship Assignment

This project is a recreation of the [Leo9 Studio](https://leo9studio.com/) website's Hero Section and Navbar as part of an internship application process. It aims to demonstrate frontend development skills using modern technologies like Next.js, Tailwind CSS, and Framer Motion.

## Features Implemented

1.  **Responsive Navbar:**
    *   Desktop view with hover-activated mega menus for 'Services' and 'About'.
    *   Smooth icon transitions (dot to chevron) on hover for menu items.
    *   Theme toggle button with animated icon switch (sun/moon).
    *   Animated 'Contact' button with text swap on hover.
    *   Card hover animations within mega menus using Framer Motion.
    *   Mobile view with a hamburger menu that slides in from the left.
    *   Interactive dropdowns for 'Services' and 'About' within the mobile menu.
2.  **Dynamic Hero Section:**
    *   Lottie animation on the left side.
    *   Main headline ("Design Transform Accelerate") and subtext with entrance animations using Framer Motion.
    *   Continuously running client logo animation at the bottom using Framer Motion.
    *   Fixed circular contact button in the bottom right corner with rotating text (using a custom `CircularText` component) and inner Lottie animation.
    *   Theme-aware styling: Text and icon colors adapt to light/dark mode.
    *   Adjustable circular text size via props.
3.  **Theme Switching:**
    *   Global light/dark mode toggle affecting the Navbar, Hero section, and overall page background.
4.  **Bonus Sections (as per assignment):**
    *   Blog post cards section with hover effects.
    *   Image section featuring `leo9-bottom.png` and `illustration_ui_ux_leo9_studio.png`.

## Technologies Used

*   **Framework:** [Next.js 13+ (App Router)](https://nextjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/), [Lottie-web](https://github.com/airbnb/lottie-web) (via `lottie-react`)
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Images/Lottie Files:** Next.js `Image` component, `lottie-react`

## Getting Started

### Prerequisites

*   Node.js (version 16 or later recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd leo9-studio-internship
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Place required assets:
    *   Ensure your Lottie animation files (e.g., `Man and robot with computers sitting together in workplace.json`, `fs_lion.json`) are located in the `src/animation/` directory.
    *   Place the `Leo9Logo.svg` file in the `public/` directory.
    *   Place the client logo SVGs or images (`logo-client-1.svg`, etc.) and `contact-button-icon.png` in the `public/` directory.
    *   Place `leo9-bottom.png` and `illustration_ui_ux_leo9_studio.png` in the `public/` directory.

### Running the Development Server

```bash
npm run dev
# or
yarn dev