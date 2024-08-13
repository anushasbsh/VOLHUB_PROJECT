import { useState } from 'react';
import brochure1 from '../../assets/Images/Brochures/brochure1.png';
import brochure2 from '../../assets/Images/Brochures/brochure2.png';
import brochure3 from '../../assets/Images/Brochures/brochure3.png';
import brochure4 from '../../assets/Images/Brochures/brochure4.png';
import brochure5 from '../../assets/Images/Brochures/brochure5.png';
import brochure6 from '../../assets/Images/Brochures/brochure6.png';
import brochure7 from '../../assets/Images/Brochures/brochure7.png';
import brochure8 from '../../assets/Images/Brochures/brochure8.png';

// Map brochure names to images
const brochureImages = {
  'AV': brochure1,
  'Charity': brochure2,
  'Women': brochure3,
  'Medical': brochure4,
  'Smile': brochure5,
  'Technical': brochure6,
  'Yugam': brochure7,
  'Wildlife': brochure8,
};

// Event data
const eventsData = [
  {
    id: 1,
    title: 'Avantaa Techno Management Fest',
    brochure: 'AV',
    venue: 'Sri Krishna College of Technology, Coimbatore, Tamil Nadu, India',
  },
  {
    id: 2,
    title: 'Charity Program by NGO',
    brochure: 'Charity',
    venue: 'Chennai',
  },
  {
    id: 3,
    title: 'Women Empowerment Programme',
    brochure: 'Women',
    venue: 'Jaipur',
  },
  {
    id: 4,
    title: 'Medical Camp by Apollo Hospitals',
    brochure: 'Medical',
    venue: 'Coimbatore',
  },
  {
    id: 5,
    title: 'Charity Program by Smile Foundations',
    brochure: 'Smile',
    venue: 'Various Locations',
  },
  {
    id: 6,
    title: 'Free Technical Training for Students',
    brochure: 'Technical',
    venue: 'By Government of India',
  },
  {
    id: 7,
    title: 'Yugam Techno Cultural Sports Fest',
    brochure: 'Yugam',
    venue: 'Kumaraguru College of Technology, Coimbatore',
  },
  {
    id: 8,
    title: 'Wildlife Charity Program',
    brochure: 'Wildlife',
    venue: 'By Reliance, India',
  },
];

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle opening modal
  const openModal = (event) => setSelectedEvent(event);

  // Handle closing modal
  const closeModal = () => setSelectedEvent(null);

  // Filter events based on search query
  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f9feff] min-h-screen p-8 relative">
  {/* Search Bar */}
<div className="absolute top-8 right-8">
  <input
    type="text"
    placeholder="Search events..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="p-2 border border-gray-300 rounded w-96 bg-white text-black focus:border-blue-500 focus:outline-none"
  />
</div>




      <h1 className="text-3xl font-bold mb-8 text-[#4d2408]">Start Your Volunteering Now!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5">
        {filteredEvents.map((event) => (
          <div 
            key={event.id} 
            className="bg-white rounded-lg shadow-xl flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => openModal(event)}
          >
            <img
              src={brochureImages[event.brochure] || '/path/to/default-image.jpg'}  // Fallback image path
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex-grow p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-black font-bold mb-2">{event.title}</h2>
                <p className="text-black font-semibold">{event.venue}</p>
              </div>
              <div className="p-4 ml-10 mr-10 pl-2">
                <button className="bg-[#2980b9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <h2 className="text-black text-2xl font-bold mb-4">{selectedEvent.title}</h2>
            <p className="text-red font-semibold mb-2">{selectedEvent.venue}</p>
            <button
              onClick={closeModal}
              className="bg-green-500 hover:bg-green-700 text-white font-bold ml-80  py-2 px-4 rounded "
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsPage;
