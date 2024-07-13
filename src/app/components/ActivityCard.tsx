import React from "react";

const ActivityCard = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="w-80 h-80 bg-logored rounded-2xl">
                    <img src="/activity1.jpg" alt="Activity 1" className="w-full h-2/5 max-h-96 left-0 object-cover rounded-t-2xl"/>
                </div>
                <div className="bg-white w-80 h-40 rounded-b-2xl">
                    <h1 className="text-center text-2xl text-logored font-semibold pt-4">Activity 1</h1>
                    <p className="text-center text-lg text-logored font-semibold pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
}

export default ActivityCard;