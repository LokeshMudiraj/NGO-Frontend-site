import VolunteerForm from '../components/VolunteerForm';

const Volunteer = () =>  {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Volunteer With Us</h2>
        <VolunteerForm />
      </div>
    </section>
  );
}

export default Volunteer
