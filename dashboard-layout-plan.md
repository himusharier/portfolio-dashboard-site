# Angular 19 Admin Dashboard Layout Plan

## Goal
Create a clean, modern, reusable dashboard layout using Angular 19 with:
- Topbar
- Sidebar
- Middle content area (router-driven)

## Task Plan

1. Define layout requirements and UX rules
2. Scaffold Angular 19 app with routing and standalone components
3. Build shell layout with Topbar + Sidebar + Content area
4. Add responsive behavior for desktop/tablet/mobile
5. Apply modern design system (spacing, typography, color tokens)
6. Add navigation structure and route placeholders
7. Polish accessibility, states, and interactions
8. Validate quality (lint, responsive checks, basic tests)
9. Package as reusable common dashboard layout foundation

## Detailed Breakdown

### 1) Requirement baseline (0.5 day)
- Confirm navigation depth, sidebar behavior, and topbar actions.
- Define content container rules: max width, padding, scroll behavior.
- Finalize breakpoints and mobile behavior expectations.

### 2) Project setup with Angular 19 (0.5 day)
- Create Angular 19 app using standalone architecture.
- Enable Angular routing and strict TypeScript settings.
- Add base folders: core, shared, layout, features.

### 3) Core layout implementation (1 day)
- Create dashboard shell component with 3 zones: topbar, sidebar, main content.
- Use CSS Grid/Flex strategy:
  - Desktop: fixed sidebar + topbar + fluid content.
  - Mobile: hidden/collapsible sidebar + sticky topbar.
- Wire router outlet into middle content region.

### 4) Topbar module (0.5 day)
- Add logo/title area, search/action slot, profile menu placeholder.
- Add sticky behavior and proper z-index layering.
- Keep topbar API reusable with inputs for title/actions.

### 5) Sidebar module (0.5 day)
- Support icon + label navigation items with active route states.
- Add collapsed mode and hover/tooltip behavior for compact view.
- Add grouped sections (Dashboard, Management, Reports, Settings).

### 6) Clean modern dashboard styling (1 day)
- Define design tokens in global styles:
  - Color palette (neutral base + one accent)
  - Spacing scale
  - Radius scale
  - Elevation/shadow levels
  - Typography scale
- Use subtle surfaces, clear contrast, soft borders, and generous whitespace.
- Add motion: smooth sidebar collapse, menu transitions, hover/focus states.

### 7) Responsive and accessibility pass (0.5 day)
- Keyboard navigation for sidebar and topbar controls.
- Proper ARIA labels for toggles/menus.
- Verify color contrast and focus visibility.
- Test at common widths: 1440, 1024, 768, 375.

### 8) Route scaffold and content templates (0.5 day)
- Add placeholder pages to verify layout consistency.
- Create reusable content wrapper for page heading + actions + body.
- Ensure deep routes still preserve shell layout.

### 9) Quality checks and handoff (0.5 day)
- Run lint/build checks and fix warnings.
- Add minimal component tests for layout shell behavior.
- Document usage: how to add new sidebar items and feature pages.

## Suggested Deliverables
1. Reusable AppShell layout with topbar/sidebar/content slots.
2. Responsive, accessible navigation experience.
3. Starter feature pages using shared layout patterns.
4. Style token system for consistent modern dashboard visuals.

## Acceptance Criteria
1. Desktop shows persistent sidebar and fixed topbar, with scrolling content area.
2. Mobile/tablet supports sidebar toggle without layout breakage.
3. Active route highlighting works correctly in sidebar.
4. Layout remains consistent across feature pages via router outlet.
5. Visual style is clean, modern, and production-ready.
