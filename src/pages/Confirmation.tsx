import { useSearchParams } from "react-router";
import { useMemo } from 'react';

export default function BookingConfirmation() {
  const [searchParams] = useSearchParams();
  
  const booking = useMemo(() => ({
    id: searchParams.get('bookingId'),
    name: searchParams.get('name'),
    email: searchParams.get('email'),
    service: searchParams.get('eventTypeSlug'),
    date: searchParams.get('date'),
    startTime: searchParams.get('startTime'),
    endTime: searchParams.get('endTime'),
    timeZone: searchParams.get('timeZone'),
  }), [searchParams]);

  // Format the service name (haircut-beard → Haircut Beard)
  const serviceName = booking.service
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  // Format the date
  const formattedDate = booking.date 
    ? new Date(booking.date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long', 
        day: 'numeric',
        year: 'numeric'
      })
    : '';

  return (
    <div className="min-h-screen bg-rich-black px-5 py-12">
      {/* Success Icon */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500 
                      flex items-center justify-center">
        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h1 className="text-2xl text-center text-white mb-2">
        You're all set, {booking.name?.split(' ')[0]}!
      </h1>
      
      <p className="text-neutral-500 text-center mb-8">
        Confirmation sent to {booking.email}
      </p>
      
      {/* Appointment Card */}
      <div className="bg-[#141414] rounded-xl p-5 border border-neutral-800">
        <h2 className="text-lg text-white mb-4">{serviceName}</h2>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-500">Date</span>
            <span className="text-neutral-200">{formattedDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Time</span>
            <span className="text-neutral-200">
              {booking.startTime} - {booking.endTime}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">Booking ID</span>
            <span className="text-neutral-400 font-mono text-xs">
              {booking.id}
            </span>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="mt-6 space-y-3">
        <button className="w-full bg-neutral-800 text-white py-3 rounded-xl">
          Add to Calendar
        </button>
        <a href="/" className="block text-center text-neutral-500 text-sm">
          Return to Home
        </a>
      </div>
    </div>
  );
}