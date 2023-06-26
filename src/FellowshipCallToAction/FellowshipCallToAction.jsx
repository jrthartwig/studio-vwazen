import { Link } from "react-router-dom";

const FellowshipCallToAction = () => {
  return (
    <div className="bg-white border-b-2 border-b-[#988558]/50">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Selected Fellowship artists will be notified and announced on Jan
            1st 2024!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            The 2024 Artist Fellowship at Studio Vwazen provides artists with a
            safe and supportive work environment to develop their studio
            practice. During this three month Fellowship, artists will have a
            dedicated studio workspace as well as opportunities for
            collaboration and exhibition.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/apply-to-artist-fellowship"
              className="rounded-md bg-[#988558] px-6 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#988558]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Apply to Artist Fellowship
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FellowshipCallToAction;
