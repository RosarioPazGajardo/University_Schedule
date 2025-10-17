import React from 'react';

const Timetable = () => {
  const schedule = [
    { day: 'Monday', time: '11:30 - 13:00', subject: 'Mechanics I Tutorials', room: 'A.1.15', color: 'bg-amber-200' },
    { day: 'Monday', time: '14:15 - 15:45', subject: 'Chemistry Lecture', room: 'A.013', color: 'bg-pink-200' },
    { day: 'Tuesday', time: '09:45 - 11:15', subject: 'Physics for Engineers Lecture', room: 'K.0506', color: 'bg-sky-200' },
    { day: 'Tuesday', time: '11:30 - 13:00', subject: 'Math Lecture', room: 'Audimax 2', color: 'bg-blue-200' },
    { day: 'Tuesday', time: '13:15 - 14:45', subject: 'Math Lecture', room: 'Audimax 2', color: 'bg-blue-200' },
    { day: 'Tuesday', time: '15:00 - 17:15', subject: 'Electrical Engineering Lecture', room: 'M.1582', color: 'bg-yellow-200' },
    { day: 'Wednesday', time: '08:00 - 09:30', subject: 'Starting TUHH', room: 'A.010', color: 'bg-green-200' },
    { day: 'Wednesday', time: '11:30 - 13:00', subject: 'Intro to Engineering Science Lecture', room: 'A.013', color: 'bg-lime-200' },
    { day: 'Wednesday', time: '15:00 - 18:15', subject: 'German', room: 'E.1022', color: 'bg-red-200' },
    { day: 'Thursday', time: '08:00 - 09:30', subject: 'Math Group Exercises', room: 'A.001', color: 'bg-blue-200' },
    { day: 'Thursday', time: '09:45 - 11:15', subject: 'Chemistry Lecture', room: 'H.009', color: 'bg-pink-200' },
    { day: 'Thursday', time: '11:30 - 13:00', subject: 'Math Lecture', room: 'Audimax 2', color: 'bg-blue-200' },
    { day: 'Thursday', time: '14:10 - 14:55', subject: 'Physics for Engineers Group Exercise', room: 'A.013', color: 'bg-sky-200' },
    { day: 'Friday', time: '08:00 - 09:30', subject: 'Electrical Engineering Group Exercise', room: 'D.0.013', color: 'bg-yellow-200' },
    { day: 'Friday', time: '09:45 - 11:15', subject: 'Mechanics I Group Exercises', room: 'A.019', color: 'bg-amber-200' },
    { day: 'Friday', time: '11:30 - 13:00', subject: 'Math Tutorials', room: '—', color: 'bg-blue-200' },
    { day: 'Friday', time: '13:15 - 14:45', subject: 'Intro to Engineering Science Lecture', room: '—', color: 'bg-lime-200' }
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Weekly Timetable</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {days.map((day) => (
          <div key={day} className="bg-gray-100 rounded-2xl shadow p-3">
            <h2 className="text-lg md:text-xl font-semibold text-center mb-2">{day}</h2>
            {schedule.filter(item => item.day === day).map((item, idx) => (
              <div key={idx} className={`${item.color} rounded-xl p-2 mb-2 shadow transition-transform hover:scale-105`}> 
                <p className="font-medium text-sm md:text-base">{item.time}</p>
                <p className="text-sm md:text-base">{item.subject}</p>
                <p className="text-xs text-gray-600">Room: {item.room}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
