# Personal Portfolio — Ashis Kumar Dash

A modern personal portfolio built with Angular 17+, featuring an AI-powered assistant, interactive project showcases, and a responsive single-page experience. The project is designed to highlight my work, skills, and experience while showcasing modern Angular development practices.

---

## Features

- AI-powered portfolio assistant using Gemini through Cloudflare Workers
- Responsive single-page application with a dedicated Experience page
- Auto-playing project carousels with touch swipe and pause-on-hover
- Signal-based contact form using Angular Signals
- Markdown-rendered AI responses
- Smooth scrolling and modern UI animations
- Fully responsive design
- Built with standalone Angular components
- Handcrafted UI using plain CSS without component libraries

---

## What Makes This Portfolio Different

Unlike traditional portfolio templates, this project includes:

- A real AI assistant that answers questions about my experience, projects, and skills
- Angular Signals for state management instead of RxJS-heavy patterns
- Experimental Signal Forms instead of traditional Reactive Forms
- Secure AI integration through a Cloudflare Worker proxy
- Independent auto-playing project galleries
- Custom UI built entirely with CSS without relying on UI frameworks

---

## Tech Stack

- Angular 17+
- TypeScript
- Angular Signals
- Angular Signal Forms
- Angular Router
- Plain CSS
- ngx-markdown
- Cloudflare Workers
- Google Gemini API
- Web3Forms

---

## Project Structure

```text
src/
 ├── app/
 │   ├── about/
 │   ├── contact/
 │   ├── experience/
 │   ├── home/
 │   ├── navbar/
 │   ├── work/
 │   ├── services/
 │   └── models/
 ├── assets/
 └── environments/
```

---

## Installation

```bash
git clone <repository-url>

cd my-portfolio

npm install
```

---

## Run Locally

```bash
ng serve
```

Visit:

```
http://localhost:4200
```

---

## Environment Variables

Create the Angular environment files with:

```ts
export const environment = {
  production: false,
  chatApiUrl: "YOUR_CLOUDFLARE_WORKER_URL",
  web3FormsKey: "YOUR_WEB3FORMS_KEY"
};
```

---

## Architecture

```text
Angular Application
        │
        ├── Portfolio UI
        ├── AI Chat Service
        ├── Contact Form
        │
        ├── Cloudflare Worker
        │         │
        │         └── Gemini API
        │
        └── Web3Forms
```

---

## Highlights

- Standalone Angular architecture
- Angular Signals throughout the application
- AI chat with conversation history
- Responsive layouts
- Independent project image sliders
- Optimized routing with scroll restoration
- Secure API key handling through Cloudflare Workers

---

## Future Improvements

- Streaming AI responses
- Dark mode
- Downloadable resume
- Lazy-loaded routes
- End-to-end testing

---

## License

This project is intended as a personal portfolio. Please replace all personal information before using it as a template.
