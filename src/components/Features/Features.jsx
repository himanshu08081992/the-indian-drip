import {
  FiAward,
  FiHeart,
  FiRefreshCw,
  FiShield,
} from "react-icons/fi";

function Features() {
  const features = [
    {
      icon: <FiAward size={32} />,
      title: "Premium Quality",
      subtitle: "Finest Fabrics",
    },
    {
      icon: <FiHeart size={32} />,
      title: "Crafted In India",
      subtitle: "Rooted In Culture",
    },
    {
      icon: <FiRefreshCw size={32} />,
      title: "Easy Returns",
      subtitle: "Hassle Free",
    },
    {
      icon: <FiShield size={32} />,
      title: "Secure Payments",
      subtitle: "100% Protected",
    },
  ];

  return (
    <section className="bg-white border-t border-b border-gray-200 text-[#7A0C0C]">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <div className="text-[#7A0C0C]">
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;