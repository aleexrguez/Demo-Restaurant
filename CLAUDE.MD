# Architecture: Template System + Feature Scope

## 🧠 Core Principle

This project is NOT a SaaS application.

This is a **template-based system** to build high-quality websites for local restaurant businesses.

Structure follows:

- TEMPLATE → reusable across clients
- CLIENT CONFIG → customization via JSON
- COMPONENTS → modular and reusable

---

## 🧱 Project Structure

src/
├── components/             # Reusable UI blocks (Hero, Menu, CTA, etc.)
├── layouts/                # Page layouts (MainLayout, etc.)
├── pages/                  # Astro pages (home, menu, contact)
├── sections/               # Page sections (HeroSection, GallerySection, etc.)
├── content/
│   └── clients/            # JSON per client (source of truth)
├── styles/                 # Global styles
├── utils/                  # Small pure utilities

---

## 🧭 Architectural Rules

- This is a **template system, not a custom build per client**
- All business data must come from JSON
- No hardcoded restaurant data inside components
- Components must be reusable across multiple clients
- Avoid duplication at all costs

---

## ⚙️ Tech Stack

- Astro (primary framework)
- React (only for interactive islands)
- Tailwind CSS
- TypeScript
- JSON (client configuration)

---

## 🚫 Constraints

- Do NOT turn this into a SPA
- Do NOT introduce global state libraries (Zustand, Redux, etc.)
- Do NOT overengineer architecture
- Do NOT build unnecessary abstractions
- Do NOT add dependencies without strong justification

---

## 🎯 Development Philosophy

### 1. Speed over perfection
- Deliver fast
- Iterate later
- Avoid analysis paralysis

### 2. Reusability over customization
- Every solution must work for multiple clients
- Avoid client-specific hacks

### 3. Simplicity over cleverness
- Code must be obvious
- Avoid complex patterns

---

## 🎨 UI / UX Rules

- Mobile-first
- Clean, premium look
- Clear CTA (WhatsApp, call, reservation)
- Fast loading (critical)
- Minimal animations

---

## 📦 Content System (CRITICAL)

- Each client has a JSON file:
