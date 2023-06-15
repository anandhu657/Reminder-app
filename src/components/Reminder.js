import React, { useState } from "react";

function Reminder() {
    const [reminder, setReminder] = useState([]);
    const [newReminder, setNewReminder] = useState('');

    const handleInput = (event) => {
        setNewReminder(event.target.value)
    }

    const handleAddReminder = () => {
        if (newReminder.trim()) {
            setReminder([...reminder, newReminder])
            setNewReminder("")
        }
    }

    const handleDeleteReminder = (index) => {
        console.log(index)
        setReminder(reminder.filter((item, itemIndex) => itemIndex !== index))
    }

    return (
        <div className="container">
            <div className="col-lg-8 col-12 mx-auto mt-5 py-4 shadow bg-body rounded">
                <h1 className="text-center">Reminder App</h1>
                <div className="d-grid gap-2 d-md-flex mx-3 mt-5">
                    <input
                        type="text"
                        value={newReminder}
                        placeholder="Enter a Reminder"
                        className="form-control me-2 p-2"
                        onChange={handleInput}
                    />
                    <button
                        className="btn btn-primary fw-bold text-nowrap"
                        onClick={handleAddReminder}
                    >Add Reminder</button>
                </div>
                {
                    reminder.length > 0 ? (
                        <ul className="list-group mx-3 mt-4">
                            {
                                reminder.map((reminder, index) =>
                                    <li
                                        className="list-group-item d-flex justify-content-between align-items-center text-wrap fw-bold my-2 rounded shadow-sm"
                                        key={index}>
                                        {reminder}
                                        <button className="btn btn-danger ms-2" onClick={() => handleDeleteReminder(index)}>Delete</button>
                                    </li>
                                )
                            }
                        </ul>
                    ) : <p className="text-center fw-bold mt-5">No Reminders found</p>
                }
            </div>
        </div>
    );
}

export default Reminder;