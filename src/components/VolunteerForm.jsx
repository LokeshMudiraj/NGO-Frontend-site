import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteerForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        availability: "",
        skills: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!form.name || !form.email) {
            toast.error("Please provide your name and email.");
            return;
        }


        try {
            setSubmitting(true);
            toast.success("Thank you for registering as a volunteer!");
            setForm({
                name: "",
                email: "",
                phone: "",
                availability: "",
                skills: "",
                message: "",
            });
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4">
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="bg-white shadow-md rounded-xl p-6 md:p-8">
                <header className="mb-4 md:mb-6 text-center">
                    <h2 className="text-2xl font-extrabold">Join Us as a Volunteer</h2>
                    <p className="text-gray-600 mt-1 text-sm max-w-xl mx-auto">
                        Help children learn and grow — share your time, skills or resources.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="flex flex-col md:col-span-1">
                        <span className="text-sm font-medium text-gray-700 mb-1">Full name</span>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                        />
                    </label>
                    <label className="flex flex-col md:col-span-1">
                        <span className="text-sm font-medium text-gray-700 mb-1">Email</span>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            required
                            placeholder="example@gmail.com"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                        />
                    </label>
                    <label className="flex flex-col md:col-span-1">
                        <span className="text-sm font-medium text-gray-700 mb-1">Phone</span>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="Optional"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                        />
                    </label>
                    <label className="flex flex-col md:col-span-1">
                        <span className="text-sm font-medium text-gray-700 mb-1">Availability</span>
                        <input
                            name="availability"
                            value={form.availability}
                            onChange={handleChange}
                            placeholder="e.g. Weekends, Mon–Fri (4–6pm)"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                        />
                    </label>
                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium text-gray-700 mb-1">Skills</span>
                        <input
                            name="skills"
                            value={form.skills}
                            onChange={handleChange}
                            placeholder="e.g. teaching, design, fundraising"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-200"
                        />
                    </label>
                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium text-gray-700 mb-1">Anything else?</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us more about you..."
                            rows={5}
                            className="w-full border border-gray-200 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-red-200"
                        />
                    </label>
                    <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 items-center justify-center">
                        <button
                            type="submit"
                            disabled={submitting}
                            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-2 rounded-md font-medium shadow-sm hover:brightness-95 transition ${submitting ? "opacity-80 cursor-wait" : ""
                                }`}
                        >
                            {submitting ? "Submitting..." : "Submit"}
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setForm({ name: "", email: "", phone: "", availability: "", skills: "", message: "" })
                            }
                            className="w-full sm:w-auto border border-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition"
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default VolunteerForm