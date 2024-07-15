'use client';

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import viLocale from '@fullcalendar/core/locales/vi';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

const Calendar = React.forwardRef<
  any,
  any
>(({ className, ...props }, ref) => {

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView={'timeGridWeek'}
      headerToolbar={
        {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }
      }
      eventTimeFormat= {{ // like '14:30:00'
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }}
      eventDisplay={'block'}
      slotMinTime={'09:00:00'}
      slotMaxTime={'17:00:00'}
      displayEventEnd={true}
      locale={viLocale}
      allDaySlot={false}
      expandRows={true}
      height={'102%'}
      eventMinHeight={20}
      eventDidMount={(info) => {
        tippy(info.el, {
          trigger: 'click',
          allowHTML: true,
          theme: 'light',
          appendTo: document.body,
          content:
            `
              <div>
                <h3>${info.event.extendedProps.dentalService.name}</h3>
                <h5>${info.event.start}</h5>
                <button>Hello</button>
              </div>
            `,
          interactive: true,
        })
      }}
      eventContent={(info) => {
        // @ts-ignore
        const start = new Date(info.event._instance?.range.start)
        // @ts-ignore
        const end = new Date(info.event._instance?.range.end)
        // @ts-ignore
        const duration = Math.floor((end - start) / (1000 * 60));
        return ( duration > 30 ?
          <>
            <b>{info.timeText}</b>
            <p>{info.event.extendedProps.dentalService.name}</p>
            <p>{info.event.extendedProps.patient.name}</p>
          </> :
            <>
              <b>{info.timeText} - {info.event.extendedProps.dentalService.name}</b>
            </>

        )
      }}

      {...props}
    />
  )
});
Calendar.displayName = "Calendar";

export default Calendar;