import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="relative bg-gray-700 bg-cover bg-center">
            <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 lg:py-36 text-white">
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold">
                        Basti Ki Pathshala — <span className="text-yellow-300">Education at the community level</span>
                    </h1>
                    <p className="mt-4 text-sm md:text-lg text-gray-100/90">
                        Join us in our mission to break the barriers of education in underserved communities. With your support, we can provide quality education to children living in slum areas, empowering them with the knowledge and skills they need to build a brighter future.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            to="/volunteer"
                            className="inline-flex items-center gap-2 bg-yellow-300 text-black px-5 py-2 rounded shadow font-semibold"
                        >
                            Volunteer <ArrowRight size={16} />
                        </Link>

                        <a
                            href="#donate"
                            className="inline-flex items-center gap-2 border border-yellow-300 text-yellow-300 px-5 py-2 rounded hover:bg-yellow-50/10"
                        >
                            Donate
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 block">
                    <path d="M0,30 C360,0 1080,60 1440,30 L1440 60 L0 60 Z" fill="white" />
                </svg>
            </div>
        </div>
    )
}

export default Hero
