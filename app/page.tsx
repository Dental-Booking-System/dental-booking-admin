'use client';

import Calendar from '@/components/ui/calendar';
import useSSE from '@/components/hooks/useSSE';
import { SetStateAction, useEffect, useState } from 'react';
import { set } from 'zod';

export default function IndexPage() {
  const [event, setEvent] = useState([]);


  useEffect(() => {
    const eventSource = new EventSource('http://localhost:8080/api/appointments/stream');

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
          fetch(`http://localhost:8080/api/appointments?start=${start}&end=${end}`).then(res => {
            res.json().then(events => {
              let eventList = Array.prototype.slice.call(events)
              successCallback(eventList);
            })
          }).catch(err => {
            failureCallback(err);
          })
        }}
      />

    </main>
  );
}
