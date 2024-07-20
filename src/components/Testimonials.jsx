import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testy, index) => (
          <div key={index} className="flex w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <div>
                <p>{testy.text}</p>
              </div>
              <div className="flex mt-8 justify-start items-center">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-500"
                  src={testy.image}
                  alt={testy.user}
                />
                <div>
                  <h6>{testy.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testy.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
