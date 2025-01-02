import React from 'react';
import '../App.css'

const AppointmentForm = ({ formData, onFormChange, onFormSubmit, onClose }) => {

  const generateTimeSlots = () => {
    const slots = [];
    let currentTime = new Date();
    currentTime.setMinutes(0, 0, 0); 

    for (let i = 0; i < 24; i++) {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const timeString = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
      slots.push(timeString);
      currentTime.setHours(currentTime.getHours() + 1); 
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white rounded-lg p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          ✖
        </button>
        <h3 className="text-xl font-bold mb-4">Schedule Appointment</h3>
        <form onSubmit={onFormSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onFormChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Doctor ID:</label>
            <input
            type="number"
            name="doctor_id"
            value={formData.doctor_id}
            onChange={onFormChange}
            required
            className="w-full px-3 py-2 rounded bg-gray-800 text-white no-spin"
          />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Start Time:</label>
            <select
              name="start_time"
              value={formData.start_time}
              onChange={onFormChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
            >
              <option value="">Select Start Time</option>
              {timeSlots.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
