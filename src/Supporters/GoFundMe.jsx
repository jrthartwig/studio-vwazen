const GoFundMe = () => {
  return (
    <div className="bg-white sm:rounded-lg">
      <div className="px-8 mx-12 my-12 text-center">
        <h3 className="text-3xl font-bold leading-6 text-center text-black/50">
          We are accepting donations!
        </h3>
        <div className="mt-8 text-md text-gray-500">
          <p>
            We are currently accepting donations on GoFundMe to support
            programming for 2023. This includes but is not limited to artist and
            event expenses, as the studio continues to grow.
          </p>
        </div>
        <div className="my-8 text-sm">
          <a
            href="#"
            className="font-medium text-lg text-[#988558] hover:text-[#988558]/50"
          >
            Donate now
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoFundMe;
