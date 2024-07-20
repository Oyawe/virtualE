import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle } from "lucide-react";

const Workflow = () => {
  return (
    <div className=" mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Accelerate your
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            coding workflow.
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code} alt="code" />
        </div>

        <div className="pt-10 w-full lg:w-1/2">
          {checklistItems.map((items, index) => (
            <div key={index} className="flex">
              <div className="text-green-400 mx-6 h-10 w-10 p-2 bg-neutral-900 justify-center items-center rounded-full">
                <CheckCircle />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{items.title}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {items.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
