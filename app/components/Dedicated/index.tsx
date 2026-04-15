const features = [
    {
        title: "Small Groups",
        desc: "Join a small group of like-minded travellers eager to explore safely and confidently.",
        icon: "👥",
    },
    {
        title: "100% Guaranteed Departures",
        desc: "Every departure is guaranteed. If it's safe, your adventure is happening.",
        icon: "🧳",
    },
    {
        title: "Locally Based Guides",
        desc: "Our guides know the region like the back of their hand.",
        icon: "🧭",
    },
    {
        title: "Support Local Communities",
        desc: "Our tours benefit local communities through meaningful relationships.",
        icon: "💛",
    },
    {
        title: "Flexibility & Fun",
        desc: "Well-planned itineraries with flexibility to make your experience unique.",
        icon: "🤸",
    },
    {
        title: "Travel Responsibly",
        desc: "We prioritize responsible travel and positive impact on the places we visit.",
        icon: "⛰️",
    },
];

const Dedicated = () => {
    return (
        <div className="py-24">

            <div className="mx-auto max-w-7xl px-6">

                {/* HEADING */}
                <div className="text-center mb-20 max-w-3xl mx-auto">

                    {/* CHANGED: Main Title set to Yellow */}
                    <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-yellow-500 mb-6">
                        Plan Your Trip On Your Finger Tips!!
                    </h2>

                    <p className="text-lg text-gray-700">
                        <span className="font-bold text-[#02033b]">Hi Hills:</span> Crafting memorable trekking adventures and relaxing
                        travel experiences in the Himalayas.
                    </p>

                    <p className="text-lg text-gray-700 mt-3">
                        Let’s plan your next escape together.
                    </p>

                    {/* Decorative line under title */}
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6 rounded-full"></div>

                </div>

                {/* FEATURES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center">

                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#02033b] w-[280px] h-[280px] rounded-full text-center flex flex-col items-center justify-center p-8 shadow-xl transition duration-300 hover:scale-105 border-4 border-yellow-500/20"
                        >
                            <div className="text-4xl mb-4">
                                {item.icon}
                            </div>

                            {/* Feature Title - kept Yellow for contrast against dark blue */}
                            <h3 className="text-sm font-bold text-white leading-relaxed uppercase tracking-wide mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-white leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default Dedicated;
