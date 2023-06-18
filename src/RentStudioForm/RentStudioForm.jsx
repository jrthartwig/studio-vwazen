import StudioRentBanner from "./StudioRentBanner";

const RentStudioForm = () => {
  return (
    <>
      <StudioRentBanner />
      <div className="mx-16 px-4 py-12">
        <form
          method="POST"
          action="https://getform.io/f/953eeaa3-31e5-45f0-84cf-87f53b0f0af9"
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900 my-4"
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
            className="block text-sm font-medium leading-6 text-gray-900 my-4"
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
            className="block text-sm font-medium leading-6 text-gray-900 my-4"
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
                  className="font-medium text-gray-900"
                >
                  Renaissance Point Resident?
                </label>
                <p id="renaissance-point-description" className="text-gray-500">
                  Check here if you reside in Renaissance Point
                </p>
              </div>
            </div>
          </div>

          <div className="my-4">Time Period Preference</div>

          <label
            htmlFor="desired-start-month"
            className="block text-sm font-medium leading-6 text-gray-900 my-4"
          >
            Desired Start Month
          </label>
          <select
            id="desired-start-month"
            name="desired-start-month"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="January"
          >
            <option>Please select a Month...</option>

            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
          </select>
          <label
            htmlFor="desired-start-month"
            className="block text-sm font-medium leading-6 text-gray-900 my-4"
          >
            Desired End Month
          </label>
          <select
            id="desired-end-month"
            name="desired-end-month"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="January"
          >
            <option>Please select a Month...</option>

            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
          </select>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900 my-4"
          >
            Please list your social media and/or website!
          </label>
          <div className="relative mt-2">
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

export default RentStudioForm;
