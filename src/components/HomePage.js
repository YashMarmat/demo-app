import React from 'react'
import { Row, Col } from 'react-bootstrap'
import data from '../data'

const HomePage = () => {

    const imageHandler = (medicine) => {
        if (medicine === "tablet") {
            return <i className="fas fa-tablets text-warning fa-4x"></i>
        }
        if (medicine === "injection") {
            return <i className="fas fa-syringe text-info fa-4x"></i>
        }
        if (medicine === "capsule") {
            return <i className="fas fa-capsules fa-4x"></i>
        }
    }

    return (
        <div>
            <h5>MEDICATIONS</h5>
            <Row>
                <Col xs={5}><h2>Active Medications ({data.medications})</h2></Col>
                <Col><span className="text-info">Patient Name</span> <p>{data.pName}</p></Col>
                <Col><span className="text-info">Date of Birth</span> <p>{data.dob}</p></Col>
                <Col><span className="text-info">Date of Issue</span> <p>{data.date_of_issue}</p></Col>
            </Row>
            <hr style={{ borderTop: "1px dashed grey" }} />
            <hr style={{ borderTop: "1px dashed grey" }} />
            {data.results.map((each, idx) => (
                <div>
                    <ul>
                        <p><b>{each.medicine_name.toLocaleUpperCase()}</b></p>
                        <Row>
                            <Col>
                                <p>{imageHandler(each.medicine_type)}</p>
                                <span className="text-info">Reason for Medication</span>
                                <p>{each.reason_for_medication}</p>
                            </Col>
                            <Col>
                                <span className="text-info">Direction / Notes</span>
                                <p>{each.directions_to_use}</p>

                                <span className="text-info"><em>Medication Timings</em></span>
                                <span style={{ display: "flex" }}>
                                    <i class="fas fa-sun"></i>
                                    <div
                                        className="mx-2 card"
                                        style={{ width: "100%", border: "1px solid", borderColor: "#C6ACE7" }}
                                    >
                                        <p>{each.medicine_consumption_timings.length < 2 ?
                                            <span>
                                                {each.medicine_consumption_timings.map((each, idx) => (
                                                    <span key={idx} className="mx-2">
                                                        <span
                                                            className="mr-2"
                                                            style={{ float: "right" }}>{each}</span>
                                                    </span>
                                                ))}
                                            </span> :
                                            <span>
                                                {each.medicine_consumption_timings.map((each, idx) => (
                                                    <span key={idx} className="mx-2">
                                                        {
                                                            <span>{each}</span>
                                                        }
                                                    </span>
                                                ))}
                                            </span>
                                        }</p>
                                    </div>
                                    <i class="fas fa-moon"></i>
                                </span>

                            </Col>
                            <Col>
                                <span className="text-info">Possible Side Effects</span>
                                {each.side_effects.map((every, idx) => (
                                    <span key={idx}>
                                        <ul>
                                            <li>
                                                {every}
                                            </li>
                                        </ul>
                                    </span>
                                ))}

                                {each.medical_help_symptoms.length > 0 ?
                                    <span>
                                        <div className="text-info mt-4">Get Medical Help If</div>
                                        <div>{each.medical_help_symptoms.join(", ")}</div>
                                    </span>
                                    : ""}
                            </Col>
                        </Row>
                        <hr style={{ borderTop: "1px dashed grey" }} />
                    </ul>
                </div>
            ))}
            <button
                className="btn btn-success mb-4"
                onClick={() => window.print()}
            >
                Print Report
            </button>
        </div>
    )
}

export default HomePage
