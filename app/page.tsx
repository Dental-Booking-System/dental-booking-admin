'use client';

import Calendar from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';

export default function IndexPage() {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8080/appointments/stream');
    eventSource.onmessage = (event) => {
      const newEvent = JSON.parse(event.data);
      // @ts-ignore
      setEvent((prev) => [...prev, newEvent]);
    };
    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };

  }, []);


  return (
    <main className="flex-1 p-2 md:p-6">
      <Calendar
        events={function(info: any, successCallback: any, failureCallback: any) {
          const start = info.start.toISOString();
          const end = info.end.toISOString();
          auth.currentUser?.getIdToken().then(token => {
            fetch(`http://localhost:8080/api/appointments?start=${start}&end=${end}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }).then(res => {
              res.json().then(events => {
                let eventList = Array.prototype.slice.call(events)
                eventList = eventList.map(event => {
                  const end = new Date(new Date(event.start).getTime() + event.duration * 60 * 1000).toISOString();
                  return {
                    ...event,
                    title: event.dentalService.name + ` - ${event.patient.name}`,
                    end: end,
                  }
                })
                successCallback(eventList);
              })
            }).catch(err => {
              failureCallback(err);
            })
          })

        }}
      />

    </main>
  );
}
