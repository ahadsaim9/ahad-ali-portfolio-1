const Resume = () => {
  return (
    <div>
      <div className=" flex justify-center items-center mx-auto w-44 md:w-56 border-b-blue-950 h-10 pt-5 border-b-4  mb-4 pb-2 ">
        <h1 className="text-center md:text-3xl text-2xl  mb-4 text-blue-950 font-semibold italic">
          My Resume
        </h1>
      </div>
      <section className="w-3/4 mx-auto">
        <img
          className="w-full h-auto"
          src="https://i.ibb.co.com/cxpHTKG/Ahad-Ali-Resume-2024.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default Resume;
