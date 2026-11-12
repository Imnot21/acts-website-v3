# ACTS Computer College — version 3: Dark tech / computer college

## Design direction (follow strictly; must look clearly different from other versions)
- Look: dark mode, modern tech-school vibe. Background #07140E (near-black green), surface #0E2219, text #EAF2EC, muted #A9BDB1, accent yellow #F2E21B for CTAs, green #1F9D63 for links/highlights. No neon glows, no gradients.
- Type: "Sora" for headlines (600/700), "Inter" for body (400/500). Rounded pill buttons (border-radius 999px). Cards allowed only with radius 20px and a surface tone step (no borders, no shadows).
- Hero: headline + subtext + two pill CTAs; campus photo (school.webp) inside a large rounded 24px frame with a green #0B5E3A backing. On phone: compact headline (max 2–3 lines), CTAs stacked full width, photo below.
- Why ACTS: horizontal swipeable row of six cards on phones (CSS scroll-snap, no JS), 3x2 grid on desktop. Each card has a simple inline SVG line icon (consistent 1.75 stroke, drawn by you; no emoji).
- Programs: segmented tab control "Senior High | College" (small script.js, accessible tabs with role=tablist, arrow keys; content visible without JS as stacked sections).
- President: portrait in a circle on #0B5E3A disc with quote beside.
- Mobile: header with seal + "ACTS" and a menu button opening a slide-down menu.

## Hard rules (all versions)
- Static site: `index.html` + `styles.css` (+ small `script.js` only if needed, e.g. mobile menu). No frameworks, no build step, no Tailwind CDN. Relative paths only (GitHub Pages subfolder).
- **MOBILE FIRST.** Write base CSS for a 360–390px phone, then enhance with `@media (min-width: ...)` queries (e.g. 640px, 960px, 1200px). Never use max-width media queries for layout. Touch targets >= 44px, body text >= 16px, no horizontal scroll at 360px, thumb-reachable primary action on phones.
- Images in `assets/`: seal.png (round school seal, 320px, transparent), logo-yellow.webp (wordmark on yellow badge), school.webp (campus building photo, transparent sky), cover-shs.png and cover-programs.png (old banners, optional), president.avif (president portrait on transparent bg), favicon-64.png.
- Semantic HTML, alt text, visible focus states, AA contrast, `prefers-reduced-motion` respected, `<title>` and meta description, favicon link.
- No emoji, no gradient blobs, no glassmorphism, no fake stats/testimonials/reviews beyond the content below. No monospace fonts. No tiny uppercase letter-spaced labels above headings.
- Footer must include the line: "Unofficial redesign concept. Official site: actscc.edu.ph" (link to https://actscc.edu.ph).

## Content (use this real content; overview only, one page)
School: ACTS Computer College, Santa Cruz (Sta. Cruz), Laguna, Philippines. Founded 1987 — first computer school in Sta. Cruz, Laguna. Christian culture. Brand colours: forest green #0B5E3A, deep green #06371F, warm yellow #F2E21B.

1. Header: seal + "ACTS Computer College", nav anchors (About, Programs, President, Contact), CTA "Register". Mobile: compact header with menu or simple anchors.
2. Hero: message = free, quality Senior High + affordable college since 1987 in Sta. Cruz, Laguna. Campus photo school.webp. Two CTAs: "Senior High Registration" -> https://actscc.edu.ph/public/online-registrations/senior-high-registration and "College Registration" -> https://actscc.edu.ph/public/online-registrations/college-registration.
3. Why ACTS: intro "ACTS Computer College has established its great reputation providing excellent services and quality education for free and affordable opportunities. The institution offers both programs for Senior High School and College with its excellent Christian culture shaping not only minds but hearts of every ACTS student."
   Six points: Quality Education — A curriculum aligned with national goals and global standards. / Experienced Faculty — Instructors who are seasoned professionals dedicated to student success. / Modern Facilities — Air-conditioned, multimedia-ready classrooms and updated computer labs. / Scholarships — GO ASAP scholarships are granted to all SHS graduates entering college. / Programs — BSIT, BEED, BSED, BSEntrep, and more across SHS and college levels. / History — Established in 1987 as the first computer school in Sta. Cruz, Laguna.
4. Programs: Senior High School (free, quality education; competent, caring, licensed professional teachers; engaging classroom activities, extra-curriculars, friendly competitions) and College (BSIT, BEED, BSED, BSEntrep; qualified professors with Masters and Doctoral degrees; globally competitive graduates). Departments: Computer Studies, Teacher Education, Business Administration.
5. President's message: PROF. RUBEN F. MACALINAO, MBA, MM, photo president.avif. "Welcome to ACTS Computer College — a place where passion meets purpose and learning transforms lives. At ACTS, we don't just train minds — we mold leaders. ACTS is more than a school; it is a family grounded in faith, service, and excellence. Let us journey together as we build brighter futures, one student at a time."
6. CTA: "Over 4,000+ students have started their journey with us — you're next!" / "Let's talk about your future." / "Whether it's admissions, scholarships, or your next big move — we're just a message away."
7. Contact/footer: Registration and Admission Office — Email actscc87@yahoo.com (mailto), Landline (049) 501-1484 (tel), Mobile 0998 852 6488 | 0917 867 3073 (tel). Facebook https://www.facebook.com/ACTSCC, YouTube https://www.youtube.com/@ACTSComputerCollegeACTSCC1987.
