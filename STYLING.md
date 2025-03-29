# UI/UX Design and Style Guidelines

# Color Scheme (using TailwindCSS)

#### Consistent color usage ensures an accessible design. A modern neutral color fit our application well.

| Color | Usage | Example |
| :---- | :---- | :---- |
| **Primary** (--color-primary) | ![Primary](https://img.shields.io/badge/Primary-%236a7282-6a7282)   | **Main UI elements**, major submit buttons, (ex. Sign in Button) |
| **Secondary** (--color-secondary) | ![Secondary](https://img.shields.io/badge/Secondary-%23d4d4d4-d4d4d4)  | **Subheaders**, less important UI elements (ex. Date in Article page) |
| **Tertiary** (--color-tertiary) | ![Tertiary](https://img.shields.io/badge/Tertiary-%23f5f5f5-f5f5f5) | **Lighter backgrounds**, commonly used as offset to primary color (ex. Navbar background color uses it and the text on top is primary color) |

# Component Behavior

#### Ensuring consistent and intuitive UI interactions for smooth user experience. Below are guidelines for key interactive components.

1. **Button Hover Effects**  
* When a user hovers over a button, the brightness of the button increases slightly to indicate interactivity.  
* No cursor change occurs (remains default arrow).  
* Ex. Tailwind implementation:

  **{hover:brightness-90}**


2. **Hyperlink Behavior**  
* Links (ex. Navigating from Sign In to Sign Out, source references) should indicate interactivity.  
* On hover, the cursor changes to cursor-pointer, ensuring users recognize it as a clickable link.  
* Ex. Tailwind implementation:

  **{cursor-pointer}**


3. **Click Animations for Main Buttons**  
* For primary actions (navbar buttons, sign-in buttons), a slight animation on click provides feedback.  
* The animation briefly scales down the button before returning to normal.  
* Ex. Tailwind implementation:

  **{transition-transform duration-300 ease-in-out active:scale-75}**


# Accessibility Standards (WCAG Compliance)

#### Ensuring accessibility is important to this application, as our goal is to supply news to **everyone**. Here are some of the measures we took to comply with WCAG standards:

1. **Contrast and Readability**  
* High Contrast for Readability:  
  * Primary text is always displayed on high contrast backgrounds.  
  * Ex. bg-white with text-black for default readability  
  * Ex. bg-tertiary with text-primary to maintain sufficient contrast while keeping a softer more modern look.  
2. **Motion and Animation Considerations**  
* Animations are subtle and don’t use excessive motion  
  * For sensitive users, even though we have some animations on buttons, we made sure not to make anything too extreme to prevent discomfort from motion sensitive users.

# Responsive Design Considerations

#### Ensuring a clean user experience across all devices is a priority in our UI/UX design. We have structured our components to be fully responsive, adapting from large desktops to smaller mobile devices, including screens as compact as the iPhone SE. Below are principles we established:

1. **Adaptive Layouts with Flexbox and Grid**  
* Used Flexbox (flex, justify-between, items-center) and CSS Grid (grid-cols-) to adjust layouts based on screen size.  
* Ex. The Navbar is structured into three sections (basis-⅓) that adjust for different viewports.  
* On smaller screens, non essential elements like the date section and logo section are hidden to optimize space and prevent overflow.  
* Components automatically stack and adjust using md:, lg:, and xl: breakpoints.  
2. **Scalable Typography and Spacing**  
* Text sizes (text-lg, text-md, text-sm) maintain readability at different levels.  
* Margins and paddings (py3, px-2) adjust dynamically for better spacing across screen sizes.  
3. **Icon and Image Responsiveness**  
* Images use max-w-full to scale appropriately within defined containers.  
* Article page image section is wrapped in a container (h-100 w-full flex justify-center) to ensure it adjusts proportionally on different devices.
