'use client';

import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import viLocale from '@fullcalendar/core/locales/vi';

const Calendar = React.forwardRef<
  any,
  any
>(({className, ...props}, ref) => {

  return(
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
      titleFormat={{
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }}
      slotLabelFormat={[{
        hour: 'numeric',
        minute: '2-digit',
        meridiem: 'short',
      }]}
      slotMinTime={"08:00:00"}
      slotMaxTime={"17:00:00"}
      locale={viLocale}
      allDaySlot={false}
      expandRows={true}
      height={'102%'}
      eventMinHeight={20}
      {...props}
    />
  )
});
Calendar.displayName = "Calendar";

export default Calendar;