import React from 'react';
import HorizontalScroller from './horizontalscroller';
const App = () => {
  const svgsPaths = [
    { path: "/next-icon.svg", name: "Next.js" },
    { path: "/react-icon.svg", name: "React" },
    { path: "/js-icon.svg", name: "JavaScript" },
    { path: "/django-icon.svg", name: "Django" },
    { path: "/tailwind-icon.svg", name: "Tailwind CSS" },
    { path: "/firebase-icon.svg", name: "Firebase" },
    { path: "/python-icon.svg", name: "Python" },
    { path: "/selenium-icon.svg", name: "Selenium" },
    { path: "/git-icon.svg", name: "Git" },
    { path: "/css-icon.svg", name: "CSS" },
    { path: "/html-icon.svg", name: "HTML" },
    { path: "/postgresql-icon.svg", name: "PostgreSQL" },
  ];

  return (
    <div>
      {/* <h1>Infinite Horizontal Scroller</h1> */}
      <HorizontalScroller svgsPaths={svgsPaths} />
    </div>
  );
};

export default App;
