import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SummaryPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3002/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointment Summary</h2>
        {appointments.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="py-4 flex justify-between items-center"
              >
                <span className="text-gray-700 font-medium">{appointment.title}</span>
                <span className="text-sm text-gray-500">
                  {new Date(appointment.start_time).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No appointments available.</p>
        )}
      </div>
    </div>
  );
};

export default SummaryPage;