
export default function Home() {
  return (
    <main className="flex justify-evenly pt-14">

      <div>
        <h1 className="text-3xl font-bold">Jin Francis Cabia</h1>
        <p className="text-white/[.75] font-semibold text-sm"
        >
          Recent Software Graduate</p>

        <p className="text-[#ECDFCC]/[.6] text-sm pt-4">
        I think codings cool</p>

      </div>


    {/* About me */}
      <div className="w-1/2 space-y-4 text-[#ECDFCC]/[.6] text-sm">
        <p>
        Growing up, I developed a passion for technology and programming through gaming with my brother. When I was 13, I began exploring Scratch,
         a block-based programming language, 
        which ignited my interest in software development.
        I took my first formal computer science class in Highschool. Through this course, I learned the fundamentals of programming in <strong className="text-white/[0.75]">  C#, Python, HTML, CSS, and JavaScript. </strong>
        </p>

        <p>
        To deepen my skills, <strong className="text-white/[0.75]"> I pursued a computer science course in Grades 10, 11, and 12</strong>  where it taught me the fundamentals of programming in C#, Python HTML, CSS and JavaScript
        and joined the <strong className="text-white/[0.75]"> Schulich Ignite </strong> 
        extracurricular program, where I gained hands-on experience with game development in Python using Pygame.
        </p>

        <p>
        Currently, I have just finished my studies in Software Development at SAIT,
         there I developed my capstone project being a progressive web app for <strong className="text-white/[0.75] underline transition duration-300 ease-in-out hover:text-yellow-200 "> Gong Cha Shawnessy</strong>  where we virtualized the menu.
         After completing the two year Diploma Im eager to apply my knowledge in a real-world setting and am 
        <strong className="text-white/[0.75]"> actively seeking internships or software development roles </strong>
        to 
        jumpstart my career. Im passionate about learning, driven to expand my skills and open to any developer roles.
        </p>
      </div>
      
    </main>
  );
}
