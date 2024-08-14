const About = () => {
  return (
    <div>
      <div className="flex box-border  w-full flex-col md:flex-row gap-4">
        <section className="order-2 md:order-1 w-8/12 text-justify Md:grid grid-cols-2">
          <h1 className="text-3xl text-center md:text-start font-semibold text-yellow-100 ">
            Ahad Ali
          </h1>
          <h1 className=" md:text-2xl text-nowrap mb-2 text-center md:text-start text-yellow-200 ">
            Junior Frontend Developer
          </h1>
          <p>
            Hello! I’m a dedicated Junior React Web Developer with a strong
            foundation in front-end development. I specialize in building
            dynamic and responsive web applications using React. My journey into
            the world of web development began with a curiosity for how websites
            are created and a desire to bring creative ideas to life through
            code. Always I enjoy my work.
          </p>
        </section>
        <section className="mx-6 my-2 md:items-center flex justify-center order-1 items-center   md:order-2 md:max-w-[250px] md:h-[250px] ">
          <img
            className=" h-full w-auto object-cover rounded-sm shadow-2xl "
            src="https://i.ibb.co/0qRFZXf/Photo-Room-20240806-124409.png"
            alt=""
          />
        </section>
      </div>
      {/*********** Education ***********/}
      <section className="text-justify ">
        <h1 className="my-2 text-2xl text-red-950 underline">Education</h1>
        <p>
          I completed diploma engineering in 2022. Now I’m studying B.Sc in
          Computer Science and Engineering from University of South Asia. My
          education has provided me with a strong theoretical foundation in
          computer science and practical experience in software development.
        </p>
      </section>
      {/*********** Goals ***********/}
      <section className="text-justify ">
        <h1 className="my-2 text-2xl text-red-950 underline">Goals</h1>
        <p>
          I’m constantly learning and staying up-to-date with the latest trends
          in web development. My goal is to become a senior developer who can
          lead projects and mentor others. I am excited about the endless
          possibilities in the tech world and look forward to contributing to
          innovative projects.
        </p>
      </section>
      {/*********** My Skills ***********/}
      <section>
        <h1 className="my-2 text-2xl text-red-950 ">My Skills:</h1>
        <div>
          <ol className="flex flex-col gap-3">
            <li>
              HTML & CSS: Crafting responsive and visually appealing layouts.
            </li>
            <li>
              React: Building efficient and reusable components for seamless
              user experiences.
            </li>
            <li>JavaScript (ES6+): Writing clean and maintainable code.</li>
            <li>
              Version Control: Proficient with Git for managing code changes.
            </li>
            <li>
              APIs: Integrating third-party APIs to enhance functionality.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default About;
