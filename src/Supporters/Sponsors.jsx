const Sponsors = () => {
  const cards = [
    {
      name: "Indiana Arts Commission",
      description:
        "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
    },
    {
      name: "Community Foundation of Greater Fort Wayne",
      description:
        "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
    },
    {
      name: "FW Nano Dev",
      description:
        "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
    },
  ];
  return (
    <div className="relative isolate overflow-hidden bg-[#988558] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Current Sponsors
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-black/50 p-6 ring-1 ring-inset ring-white/10"
            >
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
