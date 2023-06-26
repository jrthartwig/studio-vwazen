import StudioRentBanner from "./StudioProgramBanner";

const StudioProgramForm = () => {
  return (
    <>
      <StudioRentBanner />
      <div className="mx-16 px-4 py-12">
        <form
          method="POST"
          action="https://getform.io/f/cf38ce1c-806f-4eff-8c86-9aded146a38f"
        >
          <label
            htmlFor="name"
            className="block text-xl font-medium leading-6 text-gray-900 my-4"
          >
            Name
          </label>
          <div className="relative mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Jane Smith"
            />

            <div
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>
          <label
            htmlFor="name"
            className="block text-xl font-medium leading-6 text-gray-900 my-4"
          >
            Email
          </label>
          <div className="relative mt-2">
            <input
              type="email"
              name="email"
              id="email"
              className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="you@youremail.com"
            />

            <div
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>
          <label
            htmlFor="name"
            className="block text-xl font-medium leading-6 text-gray-900 my-4"
          >
            Zip code
          </label>
          <div className="relative my-4">
            <input
              type="number"
              name="zipcode"
              id="zipcode"
              className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="46803"
            />

            <div
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>

          <div className="space-y-5">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="renaissance-point"
                  aria-describedby="comments-description"
                  name="renaissance-point"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#988558] focus:ring-[#988558]"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor="renaissance-point"
                  className="text-xl font-medium text-gray-900"
                >
                  Renaissance Point Resident?
                </label>
                <p
                  id="renaissance-point-description text-xl font-medium"
                  className="text-gray-500"
                >
                  Check here if you reside in Renaissance Point
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-2">
            <label
              htmlFor="name"
              className="block text-xl font-medium leading-6 text-gray-900 my-4"
            >
              Please list your social media and/or website!
            </label>
            <input
              type="text"
              name="socialmedia"
              id="socialmedia"
              className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="@studiovwazen"
            />

            <div
              className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
              aria-hidden="true"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-[#988558] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3c331f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-4"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default StudioProgramForm;
