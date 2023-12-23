"use client"
import React, { useRef, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import moment from '@/lib/moment';
import KalenderModal from './KalenderModal';
export default function Kalender({events}:any){
    const calendarRef = useRef(null)
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    console.log(calendarRef)

    const [date1, setDate1] = useState(null)
    const [selectedEvent, setSelectedEvent] = useState(false)
    const [statusModal, setStatusModal] = useState(false)

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Claro'
    });

  const changeEvent = (value:any) => {
      setDate1(value)
      setTimeout(() => {checkEvent(value)}, 100) //checkEvent(date1)
}
  const checkEvent = (date) => {
    console.log(date)
    let newEvents:any = []
    events.map(event => {
        event.date = new Date(event.date)
        
        newEvents.push(event)
    })
    console.log(newEvents)

    // Check if any object in the array has key1 equal to date
    let foundObject = false
    foundObject = newEvents.find(function(obj) {
        return obj.date.toLocaleDateString() === date.toLocaleDateString();
    });
    
        // Check the result
        if (foundObject) {
        setSelectedEvent(foundObject)
        console.log('Object found:', foundObject);
        } else {
        setSelectedEvent(false)
        console.log('Object not found.');
        }
  }

  return (
    <div className="w-[1100px] m-auto border-1 border-slate-500 rounded-md bg-white p-2">
        {statusModal && <div onClick={() => setStatusModal(!statusModal)} className='bg-slate-600/40 fixed left-0 top-0 w-screen h-screen z-[998]'></div> }
        {statusModal && <KalenderModal />}
        <div className='flex justify-between'>
            <div>

            </div>
            <div className='bg-softGray text-center px-12 py-1 rounded-md'>The rolling stones events 2023</div>
            <div></div>
        </div>
      <div className="flex justify-around p-10">
        <div>
            {selectedEvent ? (
                <>
                    <div className='font-bold'>Available on</div>
                    <h1 className="font-extrabold text-[37px] text-primary">{moment(selectedEvent.date).format('Do MMMM YYYY')}</h1>
                    <div className='flex mt-5'>
                        <img className='w-[75px] h-[75px] rounded-full mr-5' src={selectedEvent?.speaker?.photo_url} alt="" />
                        <div>
                            <h1 className='text-[15px] font-bold'>{selectedEvent?.speaker?.name}</h1>
                            <p className='text-[10px]'>{selectedEvent?.speaker?.role}</p>
                        </div>
                    </div>
                    <h1 className='mt-5 font-bold text-[26px]'>{selectedEvent.name}</h1>
                    <div className='mt-5'><i className="fa-regular fa-clock mr-2"></i>{moment(selectedEvent.date).format('h:mm')} WIB</div>
                    <div className='mt-5'><button className='bg-primary py-[17px] px-[87px] rounded-[30px]'>Join Watchlist</button></div>
                </>
            ) : (
                <>
                    <img src="/empty-events.svg" alt="empty event" />
                    <div className='text-center'>There are no event on this date</div>
                </>
            )}
        </div>
        <div>
            <h1 className="font-bold text-xl">Pick a date time</h1>
            <div className='my-5 flex justify-between items-center'>
                <button className="bg-softGray px-4 py-2 rounded-lg" onClick={()=> setStatusModal(!statusModal)}>November 2023</button>
                <div className='flex gap-4'>
                    <i className="fa-solid fa-chevron-left cursor-pointer" data-pc-section="previousbutton"></i>
                    <i className="fa-solid fa-chevron-right cursor-pointer" data-pc-section="nextbutton"></i>
                </div>
            </div>
            <Calendar ref={calendarRef} value={date1} onChange={(e) => changeEvent(e.value)} inline />
        <div>
        </div>
        </div>
      </div>
    </div>
  )
}