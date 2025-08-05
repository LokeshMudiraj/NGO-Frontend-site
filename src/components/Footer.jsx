import { Mail, Phone, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-12">
            <div className="max-w-7xl mx-auto px-4 grid gap-10 md:grid-cols-3 items-center text-center md:text-left">

                <div className="flex flex-col items-center md:items-start">
                    <img
                        src="/assets/Basti_Ki_Pathshala-_Official_Logo-removebg-preview-removebg-preview.png"
                        className="h-16 w-auto mb-4"
                    />
                    <p className="text-sm max-w-xs">
                        Empowering children through education in underserved communities.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-3 justify-center md:justify-start hover:text-yellow-400 transition-colors">
                            <Mail size={18} /> info@bastikipathshala.org
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start hover:text-yellow-400 transition-colors">
                            <Phone size={18} /> +91 98765 43210
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="#"
                            className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="#"
                            className="p-3 rounded-full bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                        >
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-10"></div>

            <div className="text-center text-xs py-4 bg-gray-900">
                &copy; 2025
                <span className="text-yellow-400 font-semibold"> Basti Ki Pathshala Foundation</span> — All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
