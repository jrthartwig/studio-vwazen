import headshot from "./Headshot_LB.jpeg";

const people = [
  {
    name: "Lyndy Bazile",
    role: "Artist / Muralist",
    imageUrl: headshot,
    bio: "Lyndy Bazile began her painting career in 2018 and is now a fulltime artist at Vwazen. Through her work, she aims to supports historically marginalized communities by creating art that celebrates multiplicity and evokes pride in diverse identities. Lyndy also utilizes her studio time to connect with her Haitian ancestry and to strengthen her spiritual practice.",
  },
  // More people...
];

export default function ArtistInStudio() {
  return (
    <div className="bg-white border-b-2 border-b-indigo-500/50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-4xl">
              Artist in Studio
            </h2>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              Studio Vwazen aims to have up to three artists working on site at
              any given time. Artists will have their own, personal workspace as
              well as a shared community worktable for larger projects,
              collaborations and conversations. Please send a message to let us
              know if you are interested in being an Artist In Studio!
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0">
              {people.map((person) => (
                <li key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        className="rounded-lg object-cover shadow-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500">{person.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
