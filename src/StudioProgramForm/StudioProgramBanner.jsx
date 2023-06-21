import bannerImage from "./Studio.png";

export default function StudioProgramBanner() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative border-b-2 border-b-[#988558]/50">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-24 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                Interested in Applying for the Studio Program?
              </span>
            </h1>
            <div className="mt-12">
              <ul className="list-disc">
                <li className="text-2xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                  test
                </li>
                <li className="text-2xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                  test
                </li>
                <li className="text-2xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                  test
                </li>
                <li className="text-2xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                  test
                </li>
                <li className="text-2xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                  test
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={bannerImage}
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
