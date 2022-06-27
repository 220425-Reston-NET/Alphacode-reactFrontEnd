import React, { useState } from 'react';
import './Scheduler.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
// import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';

function Scheduler() {
    const [value, onChange] = useState(new Date());

  return (
    // <div>
    //     <Calendar onChange={onChange} value={value} />
    // </div>   
    <ScheduleComponent>
              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

export default Scheduler