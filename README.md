#  Codepen-like Code Editor
#[CodeCraft](https://pencrafts.netlify.app/) 

This project is a Codepen-like code editor built with React, Tailwind CSS, and CodeMirror. It allows users to write and preview HTML, CSS, and JavaScript code in real-time.

## Features
- **CodeMirror Integration**: Provides syntax highlighting and code editing for HTML, CSS, and JavaScript.
- **Live Preview**: Displays the output of the code in real-time.
- **Responsive Layout**: Built with Tailwind CSS for a modern and adaptive design.
- **Customizable Themes**: Utilizes CodeMirror themes like `material` for a visually appealing editor.
- **Dynamic Storage**: Supports saving and retrieving code using hooks or local storage.

---

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- Node.js (>=16.x.x)
- npm (>=8.x.x) or yarn

---

### Installation
1. Clone the repository:
   git clone https://github.com/WebproPandey/CodeCraft.git
   cd code-editor
2. Install dependencies:
   npm install

---

### Dependencies
The project relies on the following libraries:
- **react**: Core library for building the user interface.
- **react-dom**: React DOM rendering library.
- **react-router-dom**: Handles routing between pages.
- **react-codemirror2**: Integrates CodeMirror with React for a robust code editor.
- **codemirror**: Provides the underlying code editing functionality.
- **tailwindcss**: Utility-first CSS framework for styling.

---

### Usage

#### Run the Development Server
To start the development server, run:
```bash
npm start
```
The app will be available at `http://localhost:5173`.

---

### Project Structure
```
src/
├── components/
│   ├── Editor.js       // Code editor component
│   ├── Preview.js      // Live preview component
│   ├── Header.js       // Application header
│   └── Footer.js       // Application footer
├── hooks/
│   └── useLocalStorage.js // Custom hook for managing local storage
├── pages/
│   ├── HomePage.js     // Main page layout
│   └── StartPage.js    // Landing page
├── styles/
│   └── index.css       // Tailwind CSS configuration
└── App.js              // Entry point for the React application
```

---

### CodeMirror Configuration
Import and configure CodeMirror in your `Editor` component as follows:
```jsx
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <ControlledEditor
      value={value}
      onBeforeChange={handleChange}
      options={{
        mode: language,
        theme: "material",
        lineNumbers: true,
      }}
    />
  );
};

export default Editor;
```

---

### Styling with Tailwind CSS
Make sure Tailwind CSS is properly configured. Add the following to your `tailwind.config.js`:
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Include Tailwind's base, components, and utilities in your `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Deployment
To build the app for production:
```bash
npm run build
```
The output will be in the `build` folder. Deploy it to your preferred hosting platform.

---

### Future Enhancements
- Add support for additional languages like Python and Markdown.
- Implement authentication using OAuth.
- Enable sharing and collaboration on code snippets.

---

### Contributing
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

---

### License
This project is licensed under the MIT License. See the LICENSE file for details.

---

### Acknowledgments
- [CodeMirror](https://codemirror.net/) for the powerful code editor.
- [React](https://reactjs.org/) for the amazing UI framework.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first styling approach.

---

Happy Coding!

