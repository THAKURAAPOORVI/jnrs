import React from "react";
import './Css/Adventure.css';


const Adventure = () => {
    return (
        <>
            <div style={{ backgroundColor: "black" }}>
                <div>
                    <img style={{ minWidth: "100%", }} src="../picture/tour.png" class="start" alt="..." />
                </div>
                <div className="adventure">
                    <img style={{ minWidth: "100%", }} src="../picture/adven.png" class="start" alt="..." />
                </div>
            </div>
        </>
    );
}
export default Adventure;