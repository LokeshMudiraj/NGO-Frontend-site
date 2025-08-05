import Marquee from "react-fast-marquee";
import { Users, Heart, BookOpen, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const testimonials = [
    { text: "This program changed my daughter's life — she now loves school.", author: "Anita, Parent" },
    { text: "I look forward to classes every day and my reading improved a lot.", author: "Rahul, Student" },
    { text: "Volunteering here is incredibly rewarding; the kids are full of curiosity.", author: "Meera, Volunteer" },
    { text: "The after-school program keeps our children engaged and safe.", author: "Sunil, Community Leader" },
    { text: "We received books & kits that helped our children's learning at home.", author: "Rina, Parent" }
];



const Home = () => {
    return (
        <div className="text-gray-900">
            <Hero />
            <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-base sm:text-lg text-gray-600 lg:max-w-6xl sm:max-w-2xl mx-auto leading-relaxed">
                   At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education in underserved communities. We are dedicated to providing quality education to children living in slum areas, ensuring that every child has the opportunity to thrive and succeed. Our goal is to create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential.
                </p>
            </section>

            <section className="bg-gray-50 py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Our Impact</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: <Users className="text-red-500" size={40} />, stat: "1,200+", label: "Children Reached" },
                            { icon: <Heart className="text-red-500" size={40} />, stat: "150+", label: "Active Volunteers" },
                            { icon: <BookOpen className="text-red-500" size={40} />, stat: "200+", label: "Events & Workshops" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 sm:p-8 rounded-lg shadow hover:shadow-md transition flex flex-col items-center text-center"
                            >
                                {item.icon}
                                <div className="text-2xl sm:text-3xl font-bold mt-4">{item.stat}</div>
                                <div className="text-gray-600 mt-1">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-8 sm:py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">What People Say</h3>
                    <p className="text-center text-gray-600 max-w-2xl mx-auto">
                        Voices from parents, students and volunteers — real stories from our community.
                    </p>
                </div>
            </section>
            <section className="bg-gray-100 py-8 sm:py-12">
                <Marquee pauseOnHover gradient={false} speed={30}>
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white mx-2 sm:mx-4 p-4 rounded shadow w-64 sm:w-72 h-44 sm:h-48 flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="text-red-500" />
                                <p className="italic text-gray-700 mt-2 text-sm sm:text-base">
                                    "{t.text}"
                                </p>
                            </div>
                            <p className="text-xs sm:text-sm font-semibold">— {t.author}</p>
                        </div>
                    ))}
                </Marquee>
            </section>
            <section className="py-12 sm:py-16 mt-20 mb-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">Join us in making a difference</h3>
                    <p className="mb-6 text-sm sm:text-base">
                        Your time or donation directly supports learning materials, teacher training,
                        and opportunities for children to grow.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/volunteer" className="bg-yellow-300 text-black px-6 py-2 rounded text-sm sm:text-base hover:scale-105">
                            Volunteer
                        </Link>
                        <button className="border border-white px-6 py-2 rounded text-sm sm:text-base bg-gray-200 hover:scale-105">
                            Donate
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home