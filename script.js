const fadeSections = document.querySelectorAll(".fade-section");
const scrollSections = document.querySelectorAll(".scroll-section:not(.brands-section):not(.familiar-section):not(.proof-section)");
const cards = document.querySelectorAll(".card");
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
const cardObserver = new IntersectionObserver((entries, observer) => {
entries.forEach((entry) => {
if (!entry.isIntersecting) {
return;
}

const index = Number(entry.target.dataset.cardIndex || 0);

window.setTimeout(() => {
entry.target.classList.add("show");
}, index * 90);

observer.unobserve(entry.target);
});
}, {
threshold: 0.2,
rootMargin: "0px 0px -30px 0px"
});

cards.forEach((card, index) => {
card.dataset.cardIndex = index;
cardObserver.observe(card);
});
} else {
cards.forEach((card) => {
card.classList.add("show");
});
}

const revealHero = () => {
reveals.forEach((item, index) => {
window.setTimeout(() => {
item.classList.add("is-visible");
}, 140 * index);
});
};

const animatePremiumHero = () => {
const hero = document.querySelector(".premium-hero");

if (!hero) {
return;
}

const animatedItems = hero.querySelectorAll(".hero-copy, .hero-panel");

if (!animatedItems.length) {
return;
}

if (!window.gsap) {
animatedItems.forEach((item) => {
item.style.opacity = "1";
item.style.transform = "translateY(0)";
});
return;
}

window.gsap.timeline({
defaults: {
duration: 0.9,
ease: "power3.out"
}
})
.to(hero.querySelector(".hero-copy"), {
autoAlpha: 1,
y: 0
})
.to(hero.querySelector(".hero-panel"), {
autoAlpha: 1,
y: 0
}, "-=0.55");
};

const animateTeamSection = () => {
const section = document.querySelector(".team-preview-section");

if (!section) {
return;
}

const header = section.querySelector(".team-preview-header");
const cards = section.querySelectorAll(".team-story, .team-story-link");

if (!window.gsap) {
if (header) {
header.style.opacity = "1";
header.style.transform = "translateY(0)";
}

cards.forEach((card) => {
card.style.opacity = "1";
card.style.transform = "translateY(0)";
});
return;
}

const timeline = window.gsap.timeline({
defaults: {
duration: 0.9,
ease: "power3.out"
}
});

if (header) {
timeline.to(header, {
autoAlpha: 1,
y: 0
});
}

if (cards.length) {
timeline.to(cards, {
autoAlpha: 1,
y: 0,
stagger: 0.12
}, header ? "-=0.45" : 0);
}
};

const animateBrandsSection = () => {
const section = document.querySelector(".brands-section");

if (!section) {
return;
}

const heading = section.querySelector(".brands-heading");
const logoPanel = section.querySelector(".brand-logos-figure");

if (!window.gsap) {
if (heading) {
heading.style.opacity = "1";
heading.style.transform = "translateY(0)";
}

if (logoPanel) {
logoPanel.style.opacity = "1";
logoPanel.style.transform = "translateY(0) scale(1)";
}
return;
}

const timeline = window.gsap.timeline({
scrollTrigger: window.ScrollTrigger ? {
trigger: section,
start: "top 80%",
once: true
} : undefined,
defaults: {
duration: 0.9,
ease: "power3.out"
}
});

if (heading) {
timeline.to(heading, {
autoAlpha: 1,
y: 0
});
}

if (logoPanel) {
timeline.to(logoPanel, {
autoAlpha: 1,
y: 0,
scale: 1
}, heading ? "-=0.45" : 0);
}
};

const animateProofSection = () => {
const section = document.querySelector(".proof-section");

if (!section) {
return;
}

const heading = section.querySelector(".section-heading");
const chips = section.querySelectorAll(".proof-chip");

if (!window.gsap) {
if (heading) {
heading.style.opacity = "1";
heading.style.transform = "translateY(0)";
}

chips.forEach((chip) => {
chip.style.opacity = "1";
chip.style.transform = "translateY(0) scale(1)";
});
return;
}

if (window.ScrollTrigger) {
window.gsap.registerPlugin(window.ScrollTrigger);
}

const timeline = window.gsap.timeline({
scrollTrigger: window.ScrollTrigger ? {
trigger: section,
start: "top 80%",
once: true
} : undefined,
defaults: {
duration: 0.85,
ease: "power3.out"
}
});

if (heading) {
timeline.to(heading, {
autoAlpha: 1,
y: 0
});
}

if (chips.length) {
timeline.to(chips, {
autoAlpha: 1,
y: 0,
scale: 1,
stagger: {
each: 0.1,
from: "center"
}
}, heading ? "-=0.4" : 0);
}
};

const animateFooter = () => {
const footer = document.querySelector(".site-footer");

if (!footer) {
return;
}

const columns = footer.querySelectorAll(".footer-container > *");
const cta = footer.querySelector(".footer-link-inline");
const socials = footer.querySelectorAll(".footer-socials img");
const bottom = footer.querySelector(".footer-bottom");

if (!window.gsap) {
return;
}

if (window.ScrollTrigger) {
window.gsap.registerPlugin(window.ScrollTrigger);
}

const timeline = window.gsap.timeline({
scrollTrigger: window.ScrollTrigger ? {
trigger: footer,
start: "top 88%",
once: true
} : undefined,
defaults: {
duration: 0.9,
ease: "power3.out"
}
});

if (columns.length) {
timeline.from(columns, {
autoAlpha: 0,
y: 42,
stagger: 0.12
});
}

if (cta) {
timeline.from(cta, {
autoAlpha: 0,
x: -18
}, columns.length ? "-=0.45" : 0);
}

if (socials.length) {
timeline.from(socials, {
autoAlpha: 0,
scale: 0.78,
rotation: -8,
transformOrigin: "50% 50%",
stagger: 0.08
}, "-=0.5");
}

if (bottom) {
timeline.from(bottom, {
autoAlpha: 0,
y: 22
}, "-=0.45");
}
};

const animateFamiliarSection = () => {
const section = document.querySelector(".familiar-section");

if (!section) {
return;
}

const header = section.querySelector(".familiar-header");
const cards = section.querySelectorAll(".familiar-card");
const closing = section.querySelector(".familiar-why");

if (!window.gsap) {
[header, closing].forEach((item) => {
if (item) {
item.style.opacity = "1";
item.style.transform = "translateY(0)";
}
});

cards.forEach((card) => {
card.style.opacity = "1";
card.style.transform = "translateY(0)";
});
return;
}

if (window.ScrollTrigger) {
window.gsap.registerPlugin(window.ScrollTrigger);
}

window.gsap.set([header, closing], {
autoAlpha: 0,
y: 28
});

const timeline = window.gsap.timeline({
scrollTrigger: window.ScrollTrigger ? {
trigger: section,
start: "top 78%",
once: true
} : undefined,
defaults: {
duration: 0.85,
ease: "power3.out"
}
});

if (header) {
timeline.to(header, {
autoAlpha: 1,
y: 0
});
}

if (cards.length) {
timeline.to(cards, {
autoAlpha: 1,
y: 0,
stagger: 0.08
}, "-=0.38");
}

if (closing) {
timeline.to(closing, {
autoAlpha: 1,
y: 0
}, "-=0.3");
}
};

const scrambleText = (element, finalText, delay = 0) => {
if (!element || !window.gsap) {
return;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const revealedText = finalText.replace(/\n/g, " ");
let frame = 0;

window.gsap.delayedCall(delay, () => {
window.gsap.to(element, {
opacity: 1,
duration: 0.2,
onStart: () => {
const scrambleStep = () => {
const nextText = finalText
.split("")
.map((character, index) => {
if (character === "\n") {
return "\n";
}

if (index < frame) {
return finalText[index];
}

return chars[Math.floor(Math.random() * chars.length)];
})
.join("");

element.textContent = nextText;
frame += 0.45;

if (frame < revealedText.length) {
window.requestAnimationFrame(scrambleStep);
return;
}

element.textContent = finalText;
};

scrambleStep();
}
});
});
};

const animateServicesPage = () => {
const page = document.querySelector(".services-page");

if (!page) {
return;
}

const scrambleLines = page.querySelectorAll(".services-scramble");
const serviceCards = page.querySelectorAll(".service-flip-card");

if (!window.gsap) {
serviceCards.forEach((card) => {
const inner = card.querySelector(".service-flip-inner");

if (inner) {
inner.style.transform = "rotateY(0deg)";
}
});
return;
}

if (window.ScrollTrigger) {
window.gsap.registerPlugin(window.ScrollTrigger);
}

if (scrambleLines.length) {
scrambleLines.forEach((line, index) => {
const targetText = line.textContent ? line.textContent.trim() : "";
line.textContent = "";
line.style.opacity = "0";

if (window.ScrollTrigger) {
window.ScrollTrigger.create({
trigger: line,
start: "top 82%",
once: true,
onEnter: () => {
scrambleText(line, targetText, index * 0.08);
}
});
return;
}

scrambleText(line, targetText, index * 0.25);
});
}

serviceCards.forEach((card, index) => {
const inner = card.querySelector(".service-flip-inner");

if (!inner) {
return;
}

window.gsap.set(inner, {
rotationY: -90,
transformPerspective: 1200,
transformOrigin: "50% 50%"
});

window.gsap.to(inner, {
rotationY: 0,
duration: 0.95,
ease: "power3.out",
delay: index * 0.03,
scrollTrigger: window.ScrollTrigger ? {
trigger: card,
start: "top 85%",
toggleActions: "play none none none",
once: true
} : undefined
});
});
};

const initializeScrollSections = () => {
if (!scrollSections.length) {
return;
}

if (!window.gsap || !window.ScrollTrigger) {
fadeSections.forEach((section) => {
section.classList.add("visible");
});
return;
}

window.gsap.registerPlugin(window.ScrollTrigger);

scrollSections.forEach((section) => {
window.gsap.from(section, {
autoAlpha: 0,
y: 56,
duration: 0.95,
ease: "power3.out",
scrollTrigger: {
trigger: section,
start: "top 82%",
toggleActions: "play none none none",
once: true
}
});
});
};

const initializeLotties = () => {
if (!window.lottie) {
return;
}

const lottieNodes = document.querySelectorAll(".service-lottie[data-lottie-path]");

lottieNodes.forEach((node) => {
if (node.dataset.lottieLoaded === "true") {
return;
}

window.lottie.loadAnimation({
container: node,
renderer: "svg",
loop: true,
autoplay: true,
path: node.dataset.lottiePath
});

node.dataset.lottieLoaded = "true";
});
};

const initializeInlineSvg = async () => {
const inlineSvgNodes = document.querySelectorAll("[data-inline-svg]");

for (const node of inlineSvgNodes) {
if (node.dataset.inlineSvgLoaded === "true") {
continue;
}

const source = node.dataset.inlineSvg;

if (!source) {
continue;
}

try {
const response = await window.fetch(source);

if (!response.ok) {
continue;
}

const svgMarkup = await response.text();
node.innerHTML = svgMarkup;
node.dataset.inlineSvgLoaded = "true";
} catch (error) {
console.error("Failed to inline SVG:", source, error);
}
}
};

const initializeContactForm = () => {
const form = document.querySelector("[data-contact-form]");

if (!form) {
return;
}

const submitButton = form.querySelector("[data-submit-button]");
const statusNode = form.querySelector("[data-form-status]");
const mobileInput = form.querySelector("#contact-mobile");
const emailInput = form.querySelector("#contact-email");
const originalButtonText = submitButton ? submitButton.textContent : "Send Message";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isSubmitting = false;

const setStatus = (message, type) => {
if (!statusNode) {
return;
}

statusNode.textContent = message;
statusNode.classList.remove("is-success", "is-error");

if (type) {
statusNode.classList.add(type);
}
};

form.addEventListener("submit", async (event) => {
event.preventDefault();

if (isSubmitting) {
return;
}

const formData = new FormData(form);
const payload = {
name: String(formData.get("name") || "").trim(),
email: String(formData.get("email") || "").trim(),
mobile: String(formData.get("mobile") || "").replace(/\D/g, ""),
message: String(formData.get("message") || "").trim()
};

if (!payload.name || !payload.email || !payload.mobile || !payload.message) {
setStatus("Please fill in all required fields.", "is-error");
return;
}

if (!EMAIL_REGEX.test(payload.email)) {
setStatus("Please enter a valid email address.", "is-error");

if (emailInput) {
emailInput.focus();
}

return;
}

if (!/^\d{10,15}$/.test(payload.mobile)) {
setStatus("Mobile number must be between 10 and 15 digits.", "is-error");

if (mobileInput) {
mobileInput.focus();
}

return;
}

const controller = new AbortController();
const timeoutId = window.setTimeout(() => {
controller.abort();
}, 10000);

try {
isSubmitting = true;

if (submitButton) {
submitButton.disabled = true;
submitButton.textContent = "Sending...";
}

setStatus("Submitting your message...", "");

const response = await window.fetch("/submit-form", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(payload),
signal: controller.signal
});

const result = await response.json().catch(() => ({}));

if (!response.ok) {
throw new Error(result.message || "Something went wrong while submitting the form.");
}

form.reset();
setStatus("Thanks. Your message has been sent successfully.", "is-success");
} catch (error) {
console.error("[contact-form] Submission failed", error);

if (error.name === "AbortError") {
setStatus("Request timed out. Please try again.", "is-error");
} else {
setStatus(error.message || "Unable to submit the form right now. Please try again.", "is-error");
}
} finally {
window.clearTimeout(timeoutId);
isSubmitting = false;

if (submitButton) {
submitButton.disabled = false;
submitButton.textContent = originalButtonText;
}
}
});
};

if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", () => {
revealHero();
animatePremiumHero();
animateTeamSection();
animateProofSection();
animateBrandsSection();
animateFooter();
animateFamiliarSection();
animateServicesPage();
initializeScrollSections();
initializeLotties();
initializeInlineSvg();
initializeContactForm();
});
} else {
revealHero();
animatePremiumHero();
animateTeamSection();
animateProofSection();
animateBrandsSection();
animateFooter();
animateFamiliarSection();
animateServicesPage();
initializeScrollSections();
initializeLotties();
initializeInlineSvg();
initializeContactForm();
}

const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
let lastScrollY = window.scrollY;

const closeMobileNav = () => {
if (!navbar || !navToggle || !navLinks) {
return;
}

navbar.classList.remove("nav-open");
navToggle.setAttribute("aria-expanded", "false");
navToggle.setAttribute("aria-label", "Open navigation");
document.body.classList.remove("nav-open");
};

const openMobileNav = () => {
if (!navbar || !navToggle || !navLinks) {
return;
}

navbar.classList.add("nav-open");
navToggle.setAttribute("aria-expanded", "true");
navToggle.setAttribute("aria-label", "Close navigation");
document.body.classList.add("nav-open");
};

const updateNavbarVisibility = () => {
if (!navbar) {
return;
}

if (navbar.classList.contains("nav-open")) {
navbar.classList.remove("navbar-hidden");
lastScrollY = window.scrollY;
return;
}

const currentScrollY = window.scrollY;
const isNearTop = currentScrollY < 24;

if (isNearTop || currentScrollY < lastScrollY) {
navbar.classList.remove("navbar-hidden");
} else if (currentScrollY > lastScrollY) {
navbar.classList.add("navbar-hidden");
}

lastScrollY = currentScrollY;
};

window.addEventListener("scroll", updateNavbarVisibility, { passive: true });
updateNavbarVisibility();

if (navToggle && navLinks && navbar) {
navToggle.addEventListener("click", () => {
if (navbar.classList.contains("nav-open")) {
closeMobileNav();
return;
}

openMobileNav();
});

navLinks.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", () => {
closeMobileNav();
});
});

window.addEventListener("resize", () => {
if (window.innerWidth > 900) {
closeMobileNav();
}
});

document.addEventListener("keydown", (event) => {
if (event.key === "Escape") {
closeMobileNav();
}
});
}
