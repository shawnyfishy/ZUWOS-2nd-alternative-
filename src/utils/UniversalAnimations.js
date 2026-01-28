import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * Universal GSAP Animation Controller
 * A production-grade utility for categorized GSAP animations.
 */
const Animate = {
    // --- Category 1: The Essentials (UI & Layout) ---

    /**
     * Simple fade from opacity 0.
     */
    fadeIn: (target, duration = 1, delay = 0) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.from(el, {
            opacity: 0,
            duration,
            delay,
            ease: "power2.out",
        });
    },

    /**
     * Moves from y: 50, opacity: 0 to y: 0.
     */
    slideUp: (target, duration = 1, delay = 0) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.from(el, {
            y: 50,
            opacity: 0,
            duration,
            delay,
            ease: "power3.out",
        });
    },

    /**
     * Moves from x: -50, opacity: 0 to x: 0.
     */
    slideInLeft: (target, duration = 1, delay = 0) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.from(el, {
            x: -50,
            opacity: 0,
            duration,
            delay,
            ease: "power3.out",
        });
    },

    /**
     * Moves from x: 50, opacity: 0 to x: 0.
     */
    slideInRight: (target, duration = 1, delay = 0) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.from(el, {
            x: 50,
            opacity: 0,
            duration,
            delay,
            ease: "power3.out",
        });
    },

    /**
     * Scales from 0.8, opacity 0 with back.out easing (bouncy).
     */
    popIn: (target, duration = 0.8, delay = 0) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.from(el, {
            scale: 0.8,
            opacity: 0,
            duration,
            delay,
            ease: "back.out(1.7)",
        });
    },

    /**
     * Animates children one-by-one with 0.1s stagger.
     */
    staggerList: (parent, childClass, duration = 0.8, stagger = 0.1) => {
        const parentEl = gsap.utils.toArray(parent)[0];
        if (!parentEl) return;
        const children = parentEl.querySelectorAll(childClass);
        if (!children.length) return;
        return gsap.from(children, {
            y: 30,
            opacity: 0,
            duration,
            stagger,
            ease: "power2.out",
        });
    },

    // --- Category 2: ScrollTrigger Specials ---

    /**
     * Uses scrub: true to move element slower/faster than scroll.
     */
    parallax: (target, speed = 1) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.to(el, {
            y: -100 * speed,
            ease: "none",
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });
    },

    /**
     * Pins the element in place while user scrolls past.
     */
    pinSection: (target, end = "+=100%") => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: end,
            pin: true,
            pinSpacing: false,
        });
    },

    /**
     * Standard 'fade up' that triggers only when element enters viewport.
     */
    revealOnScroll: (target, start = "top 85%") => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: start,
                toggleActions: "play none none reverse",
            },
        });
    },

    /**
     * Scales a width from 0% to 100% linked to the page scroll progress.
     */
    progressBar: (target) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.fromTo(el,
            { scaleX: 0 },
            {
                scaleX: 1,
                ease: "none",
                transformOrigin: "left center",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.3,
                },
            }
        );
    },

    // --- Category 3: Text Effects ---

    /**
     * Animates text content character by character.
     * Simulates with opacity since SplitText is premium.
     */
    typewriter: (target, duration = 0.05) => {
        const el = gsap.utils.toArray(target)[0];
        if (!el) return;
        const text = el.innerText;
        el.innerText = "";
        const chars = text.split("").map(char => {
            const span = document.createElement("span");
            span.innerText = char;
            span.style.opacity = 0;
            el.appendChild(span);
            return span;
        });

        return gsap.to(chars, {
            opacity: 1,
            duration: 0.1,
            stagger: duration,
            ease: "none",
        });
    },

    /**
     * The 'Luxury' effect. Text translates Y from 100% to 0% inside a container with overflow: hidden.
     */
    maskReveal: (target, duration = 1.2) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;

        el.forEach(item => {
            // Ensure the item has overflow hidden and a wrapper if not already present
            if (item.style.overflow !== "hidden") {
                item.style.overflow = "hidden";
            }

            const content = item.innerHTML;
            item.innerHTML = `<div class="mask-reveal-inner">${content}</div>`;
            const inner = item.querySelector(".mask-reveal-inner");

            gsap.from(inner, {
                y: "100%",
                duration,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                }
            });
        });
    },

    // --- Category 4: Special FX ---

    /**
     * Infinite loop scaling up/down slightly.
     */
    pulse: (target, scale = 1.05, duration = 0.5) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        return gsap.to(el, {
            scale,
            duration,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
        });
    },

    /**
     * Error state animation (rapid x-axis movement).
     */
    shake: (target, duration = 0.1, pixels = 10) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;
        const tl = gsap.timeline();
        tl.to(el, { x: pixels, duration: duration })
            .to(el, { x: -pixels, duration: duration })
            .to(el, { x: pixels, duration: duration })
            .to(el, { x: 0, duration: duration });
        return tl;
    },

    /**
     * Add event listeners for mouseenter/leave to scale up slightly.
     */
    hoverScale: (target, scale = 1.1, duration = 0.3) => {
        const elements = gsap.utils.toArray(target);
        if (!elements.length) return;

        elements.forEach(el => {
            el.addEventListener("mouseenter", () => {
                gsap.to(el, { scale, duration, ease: "power2.out" });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(el, { scale: 1, duration, ease: "power2.out" });
            });
        });
    },

    /**
     * Animate strokeDashoffset to simulate drawing a line.
     */
    drawSVG: (target, duration = 2, delay = 0) => {
        const el = gsap.utils.toArray(target);
        if (!el.length) return;

        el.forEach(svgPath => {
            const length = svgPath.getTotalLength();
            gsap.set(svgPath, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(svgPath, {
                strokeDashoffset: 0,
                duration,
                delay,
                ease: "power1.inOut",
            });
        });
    },
};

export default Animate;
