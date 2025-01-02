import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalendarDisplay from './CalenderDisplay';
import AppointmentForm from './AppointmentForm';

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    doctor_id: '',
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3002/appointments');
      const formattedEvents = response.data.map((appointment) => ({
        id: appointment.id,
        title: appointment.title,
        start: new Date(appointment.start_time),
        end: new Date(appointment.end_time),
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.doctor_id) {
      alert('Please fill all required fields.');
      return;
    }

    const newEvent = {
      title: formData.title,
      start_time: selectedSlot.start,
      end_time: selectedSlot.end,
      doctor_id: parseInt(formData.doctor_id),
    };

    try {
      const response = await axios.post('http://localhost:3002/appointments', newEvent);
      fetchAppointments(); 
      setSelectedSlot(null);
      setFormData({ title: '', doctor_id: '' });
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  const handleEventDrop = async ({ event, start, end }) => {
    try {
      await axios.put(`http://localhost:3002/appointments/${event.id}`, {
        start_time: start,
        end_time: end,
      });
      fetchAppointments();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleEventDelete = async (event) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        await axios.delete(`http://localhost:3002/appointments/${event.id}`);
        fetchAppointments();
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  return (
    <div className="bg-[#e8f0ff] container mx-auto p-2">
      <h2 className="text-2xl font-bold mb-4">Appointments Calendar</h2>
      <CalendarDisplay
        events={events}
        onEventDrop={handleEventDrop}
        onEventDelete={handleEventDelete}
        onSlotSelect={handleSelectSlot}
      />
      {selectedSlot && (
        <AppointmentForm
          formData={formData}
          onFormChange={handleFormChange}
          onFormSubmit={handleFormSubmit}
          onClose={() => setSelectedSlot(null)}
        />
      )}
    </div>
  );
};


export default CalendarPage;