import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-white text-gray-900">
            <section className="py-14 md:py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
                                We <span className="text-yellow-400"> Work Together</span>
                            </h2>
                            <p className="text-gray-700 mb-4">
                                At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do. Under the banner of ‘We Work Together,’ we embrace the power of unity, recognizing that real change comes from collective action. Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities. Together, we strive towards a common goal: to empower every child with the opportunity to thrive. Through shared vision, shared values, and shared effort, we pave the way for a brighter, more inclusive future for all.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="/assets/image-2048x1306.jpg"
                            className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="overflow-hidden rounded-xl shadow-lg order-2 md:order-1">
                        <img
                            src="/assets/IMG-20240218-WA0084.jpg"
                            className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="order-1 md:order-2 flex flex-col items-center justify-center text-center">
                        <div className="max-w-3xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-700 mb-4">
                                At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education in underserved communities. We are dedicated to providing quality education to children living in slum areas, ensuring that every child has the opportunity to thrive and succeed.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our goal is to create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential. Through innovative teaching methods, community engagement, and strategic partnerships, we empower children with the knowledge and skills necessary to build a brighter future for themselves and their communities.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our mission extends beyond the classroom as we work tirelessly to bridge the educational gap and foster long-term, sustainable change in the lives of marginalized families. Together, we strive to rewrite the narrative of education, one child at a time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div className="max-w-3xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h3>
                            <p className="text-gray-700 mb-4">
                                Basti Ki Pathshala Foundation began with a simple yet powerful vision: to transform the lives of children living in slum areas through education. Founded under the Indian Societies Act of 1860, our journey started with a deep-seated belief in the potential of every child, regardless of their circumstances.
                            </p>
                            <p className="text-gray-700 mb-4">
                                It all began when Sunita, inspired by their own experiences and driven by a passion for social justice, embarked on a mission to address the educational inequalities prevalent in underserved communities. Armed with determination and fueled by compassion, they rallied a team of like-minded individuals who shared their vision of a brighter, more equitable future.
                            </p>
                            <p className="text-gray-700 mb-4">
                                From humble beginnings, our organization has grown into a beacon of hope, touching the lives of countless children and families along the way. Each milestone achieved, each barrier overcome, has only strengthened our resolve to continue our mission of empowerment and transformation.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our story is still being written, with each chapter filled with hope, resilience, and determination. As we look towards the future, we remain steadfast in our mission to break down barriers, uplift communities, and create a world where every child has the opportunity to thrive.
                            </p>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="/assets/IMG_20240126_132350-1.jpg"
                            className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
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
export default About
