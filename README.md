# forms

A small static HTML/CSS/JS practice project: a single-page "Application for SC" (Student Council) form with fields for name, registration number, department, CGPA, position applying for, and two free-text questions. JavaScript intercepts the submit event, prevents the default page reload, and either shows a "Thank you" message or (in commented-out code) builds a JSON object from the form fields and logs it to the console. There is no backend — nothing is actually sent or stored anywhere.

## Tech Stack

- HTML, CSS, vanilla JavaScript
- No frameworks, no backend, no build tooling

## Structure

```
index.html   - form markup
style.css    - styling (background image bg.png)
script.js    - submit-event handling (client-side only)
bg.png, SC.ico - static assets
```

Coursework/practice exercise, not a deployed or production form.
