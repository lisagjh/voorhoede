<script lang="ts">
  import { onMount } from "svelte";
  import MenuToggleBtn from "./../input/MenuToggleBtn.svelte";
  import NavItem from "./NavItem.svelte";

  // Menu state
  let isOpen = false; // Initial state for menu visibility
  let openVacancies = 0;
  let hasAnimated = false;
  const delay = 1750;

  // Pages data
  let pages = [
    { title: "Home", ref: "/" },
    { title: "Leden", ref: "/members" },
    { title: "Vacatures", ref: "/vacatures" },
  ];

  let pagesCTA = [
  ];

  let allPages = [...pages, ...pagesCTA];

  // Toggle menu visibility and handle body overflow
  function toggle() {
    isOpen = !isOpen;
    document.body.style.overflow = isOpen ? "hidden" : ""; // Disable/enable scrolling
    if (isOpen && !hasAnimated) {
      hasAnimated = true;
      startVacancyAnimation();
    }
  }

  // Fetch vacancies and animate counter
  async function startVacancyAnimation() {
    try {
      const response = await fetch(
        "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/"
      );
      const vacatures = await response.json();
      const totalVacancies = vacatures.data ? vacatures.data.length : 0;
      animateCounter(openVacancies, totalVacancies, delay);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  }

  // Function to animate the vacancy badge in the nav menu
  function animateCounter(start, end, duration) {
    // Calculate the range of the animation
    const range = end - start;

    // when it starts
    const startTime = performance.now();

    // Easing function to make the animation slow down at the end
    function easeOut(t) {
      return t * (2 - t);
    }

    // Function to update the animation on each frame
    function update(currentTime) {
      // Calculate how much time has passed since the animation started
      const elapsedTime = currentTime - startTime;
      // Translates the elapsedtime to a number between 0 (start) and 1 (end)
      const normalizedTime = Math.min(elapsedTime / duration, 1);
      // Apply the easing function
      const easedProgress = easeOut(normalizedTime);
      // Update the number of the counter
      openVacancies = Math.floor(start + range * easedProgress);
      // checks if the animation is finished or not
      if (normalizedTime < 1) {
        // if not keeps updating
        requestAnimationFrame(update);
      }
    }
    // Start the animation by calling the update function
    requestAnimationFrame(update);
  }

  // to close the menu after a menu item or backdrop gets clicked
  const menuToggle: Action = (node) => {
    const handleClick = () => {
      toggle(); // Call the toggle function when clicked
    };
    node.addEventListener("click", handleClick);
    // Cleanup when the element is removed
    return {
      destroy() {
        node.removeEventListener("click", handleClick);
      },
    };
  };

  // close menu when esc is pressed
  function closeMenuOnEsc(event) {
    // check if esc key is pressed
    if (event.key === "Escape") {
      // close menu
      isOpen = false;
    }
  }

  onMount(async () => {
    // event listener for keydown event
    document.addEventListener("keydown", closeMenuOnEsc);
  });
</script>

<MenuToggleBtn {isOpen} {toggle} />

<nav class:is-open={isOpen}>
  <ul>
    {#each allPages as page}
      <li use:menuToggle>
        <NavItem
          title={page.title}
          href={page.ref}
          badge={page.ref === "/vacatures" ? openVacancies : null}
        />
      </li>
    {/each}
  </ul>
</nav>

<div id="backdrop" class:is-open={isOpen} use:menuToggle></div>

<style>
  nav {
    display: none;
    visibility: hidden;
    background-color: var(--white);
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    /* clamp(min, val, max) - clamp means it will use the preferred value (val) when its between the min or max value. */
    width: clamp(190px, 50%, 300px);
    z-index: 1;
    border-left: 1px solid var(--black);

    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    transform: translateX(100%);
    opacity: 0;
  }

  nav.is-open {
    visibility: visible;
    display: flex;
    transform: translateY(0);
    opacity: 1;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    transform: translateX(-10%);
    clip-path: circle(29.3% at 86% 89%);
    transition: all 0.25s ease-in-out;
  }

  div.is-open {
    background-color: black;
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    transform: translateX(0);
    clip-path: none;
  }

  ul {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    margin-top: 5rem;
    margin-bottom: 1rem;
    padding: 0;
  }

  li {
    font-family: var(--martian-mono);
    margin: 1rem;
  }

  @media (width > 50rem) {
    nav {
      background-color: transparent;
      border: none;
      position: relative;

      visibility: visible;
      display: flex;
      transform: translateY(0);
      opacity: 1;
      height: fit-content;
      margin-top: 2rem;
    }

    ul {
      margin-top: 0;
    }

    li {
      font-size: 0.85rem;
      margin: 0;
      margin-bottom: 1.5rem;
    }

    div {
      display: none;
    }
  }

  @media (width > 56rem) {
    li {
      font-size: 1rem;
    }
  }
</style>
