import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(SplitText, ScrambleTextPlugin)

function splitPreserveChildren(el, type) {
    const parts = []
    const key = type === "chars" ? "chars" : "words"
  
    ;[...el.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim()
        if (!text) return
        const wrap = document.createElement("span")
        wrap.textContent = node.textContent
        node.replaceWith(wrap)
        const split = new SplitText(wrap, { type })
        parts.push(...split[key])
      } else {
        // Récupère les classes gradient éventuelles sur l'élément enfant
        const gradientClasses = [...node.classList].filter((c) =>
          c.startsWith("text-gradient")
        )
  
        const split = new SplitText(node, { type })
        const children = split[key]
  
        // Transfère la classe gradient sur chaque span généré
        if (gradientClasses.length) {
          children.forEach((span) => span.classList.add(...gradientClasses))
        }
  
        parts.push(...children)
      }
    })
  
    return parts
  }

const ANIMATIONS = {
  rain: (el) => {
    const chars = splitPreserveChildren(el, "chars")
    gsap.from(chars, { y: -50, opacity: 0, rotateX: 90, stagger: 0.04, duration: 0.55, ease: "back.out(1.7)" })
  },
  blur: (el) => {
    const words = splitPreserveChildren(el, "words")
    gsap.from(words, { y: 28, opacity: 0, filter: "blur(8px)", stagger: 0.1, duration: 0.65, ease: "power3.out" })
  },
  mask: (el) => {
    const { lines } = new SplitText(el, { type: "lines", linesClass: "line-inner" })
    gsap.from(lines, { y: "105%", opacity: 0, stagger: 0.14, duration: 0.75, ease: "power4.out" })
  },
  scramble: (el) => {
    const final = el.textContent
    gsap.to(el, { duration: 1.4, scrambleText: { text: final, chars: "01XYZ#@░▒アイ", speed: 0.5 } })
  },
  pop: (el) => {
    const chars = splitPreserveChildren(el, "chars")
    gsap.from(chars, { scale: 0, opacity: 0, transformOrigin: "50% 50%", stagger: 0.05, duration: 0.45, ease: "elastic.out(1, 0.5)" })
  },
}

const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return
        ANIMATIONS[target.dataset.anim]?.(target)
        observer.unobserve(target)
      })
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  )
  
  document.querySelectorAll("[data-anim]").forEach((el) => observer.observe(el))