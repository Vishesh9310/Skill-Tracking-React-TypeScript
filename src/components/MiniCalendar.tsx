import React from 'react'

interface Props {
    currentWeekDates: string[];
}

const MiniCalendar: React.FC<Props> = ({ currentWeekDates }) => {
    return (
        <div className="grid grid-cols-7 gap-2 text-center p-4 bg-gray-100 rounded-xl shadow">
            {currentWeekDates.map((date) => (
                <div key={date} className='text-sm font-semibold p-2 bg-white rounded shadow'>
                    {new Date(date).toLocaleDateString('en-IN', {
                        weekday: 'short',
                        day: 'numeric',
                    })}
                </div>
            ))}
        </div>
    );
};

export default MiniCalendar;