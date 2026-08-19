# Advanced JavaScript Course Materials

Learner-facing materials for the Advanced JavaScript workshop on functions, callbacks, arrow functions, `this`, classes, and prototypes.

## Contents

- `demos/` — nine runnable examples in course order
- `exercises/` — six starter files for the hands-on labs
- `solutions/` — completed versions of the six exercises
- `AdvancedJS.pdf` — the course slide deck
- `student/` — the student workbook in Markdown and PDF, including notes, labs, and optional practice
- `package.json` — metadata that lets Node.js recognize the complete files as JavaScript modules

## What you need

The easiest way to follow this course is with a current desktop browser such as Chrome, Edge, or Firefox. You do not need to install Node.js or use `npm`.

If you received these materials through GitHub, select **Code**, then **Download ZIP**, and unzip the downloaded file. Keep this README, the student workbook, and the `exercises/` folder handy during class.

## Start here: run JavaScript in the browser

The instructor will demonstrate short examples in the browser's JavaScript console. Here is how to open the same workspace:

1. Open a new browser tab and enter `about:blank` in the address bar.
2. Open the JavaScript console:
   - **Chrome or Edge on macOS:** press **Command-Option-J**.
   - **Chrome or Edge on Windows or Linux:** press **Control-Shift-J**.
   - **Firefox on macOS:** press **Command-Option-K**.
   - **Firefox on Windows or Linux:** press **Control-Shift-K**.
3. Click the **Console** tab if it is not already selected.
4. Type the following line next to the `>` prompt and press **Enter**:

   ```js
   1 + 1
   ```

   You should see `2`. That means the console is ready.
5. Copy one JavaScript code block from the student workbook, paste it into the console, and press **Enter**. To type a multiline example by hand, press **Shift-Enter** when you want a new line without running the code yet.

When a program uses `console.log`, the browser may show the printed value followed by `undefined`. The `undefined` is usually just the return value of `console.log`; it is not an error.

Some examples build on code from the preceding block, so reload only when the instructor tells you to start fresh. If the console says an identifier “has already been declared,” reload the blank page and rerun the complete example section from its beginning. The console's clear button hides old output, but reloading is what gives an example a fresh set of variables.

For a lab, open the matching starter file in `exercises/` with a text editor. Make your changes there, then copy the starter code into a freshly reloaded browser console to try it. Afterward, compare your work with the matching file in `solutions/`.

Open `demos/03-button.html` directly in the browser for the event-listener example. Double-click the file, open the browser console, click **Click Me**, and look for `Button was clicked!` in the console.

## Optional: run the complete files with Node.js

The complete files in `demos/` and `solutions/` include automated checks written for Node.js. Do not paste those files into the browser unchanged; use the browser-friendly code blocks in the workbook instead.

If you already have Node.js 20 or later and want to run the complete files, open a terminal in this repository folder and first check that Node is available:

```bash
node --version
```

Then run a file directly:

```bash
node demos/01-first-class-functions.js
node demos/09-prototypes-and-inheritance.js
node solutions/01-function-values.js
```

The included `package.json` tells Node.js how to read the files, but it contains no dependencies or npm commands. No `npm install` step is needed.
