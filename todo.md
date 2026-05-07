# Tour Malaysia - Project TODO

## Setup & Infrastructure
- [x] Initialize project scaffold (React 19 + Tailwind 4 + tRPC + DB)
- [x] Create todo.md

## Design System & Global Layout
- [x] Set up liquid glass morphism CSS theme (frosted glass, backdrop blur, gradients)
- [x] Configure global fonts (Google Fonts - Space Grotesk, Playfair Display, Inter)
- [x] Build top navigation with glass effect and smooth scroll links
- [x] Build footer with links and social icons

## Hero Section
- [x] Full-screen image slideshow hero with parallax effect
- [x] Animated headline and CTA buttons with glass card style
- [x] Scroll-down indicator with animation
- [x] Stats bar (destinations, rating, travelers)

## Destination Explorer
- [x] Destination data (9 Malaysia locations with images, descriptions, highlights)
- [x] Interactive destination cards with hover animations and glass morphism
- [x] Destination detail modal with highlights, activities, best months, budget
- [x] Filter by region (Peninsular, Borneo, Islands)

## Travel Timing Guide
- [x] Monthly weather calendar for Malaysia
- [x] Best time to visit per destination
- [x] Season cards with visual indicators (sun, rain, temperature)
- [x] Interactive month selector with rainfall bar chart
- [x] Best destinations per selected month

## Budget Calculator
- [x] Budget type selector (Budget / Mid-range / Luxury)
- [x] Duration input (number of days)
- [x] Cost breakdown: accommodation, food, transport, activities
- [x] Animated cost summary with visual breakdown bars
- [x] Destination-specific cost estimates
- [x] Money-saving tips per budget tier

## AI Chatbot Assistant
- [x] Floating chat button with glass morphism style
- [x] Chat interface with message history
- [x] tRPC backend procedure connecting to LLM
- [x] System prompt with Malaysia travel knowledge (Maya persona)
- [x] Suggested questions in empty state
- [x] Typing indicator animation

## Animations & Visual Effects
- [x] Scroll-triggered animations (fade-in, slide-up via IntersectionObserver)
- [x] Parallax effects on hero background
- [x] Smooth page transitions (Framer Motion)
- [x] Hover micro-interactions on cards
- [x] Image slideshow with crossfade transitions
- [x] Floating orb animations

## Image & Video Assets
- [x] Gather and upload 12 Malaysia destination images (CDN)
- [x] Gallery section with mosaic grid layout

## Testing
- [x] Vitest unit tests for AI chat router (4 tests)
- [x] Vitest unit tests for auth logout (1 test)


## Currency Conversion
- [x] Add 5 common currencies (USD, EUR, GBP, AUD, SGD, MYR)
- [x] Implement currency selector next to estimated total
- [x] Display converted amounts with proper symbols
- [x] Show daily average in selected currency

## Stripe Payment Integration
- [x] Set up Stripe feature with webdev_add_feature
- [x] Create travel packages/products database schema
- [ ] Build travel package showcase page with Stripe pricing
- [ ] Implement Stripe checkout flow for one-time purchases
- [ ] Implement Stripe subscription plans for travel memberships
- [ ] Create payment success/failure pages
- [ ] Add order history and invoice management for users
- [ ] Write Stripe integration tests
