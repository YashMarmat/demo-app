const data = {
    "medications": "3",
    "pName": "Edward Kenwey",
    "dob": "12 July 1994",
    "date_of_issue": "16 July 2021",
    "results": [
        {
            "medicine_type": "tablet",
            "medicine_name": "Ibuprofen 600mg tab",
            "reason_for_medication": "For treatment of lower back pain",
            "directions_to_use": "1 tablet by mouth, 4 times a day with food every 4 hours",
            "medicine_consumption_timings": ["08:00AM", "12:00PM", "04:00PM", "08:00PM"],
            "side_effects": ["Headache", "Dizziness"],
            "medical_help_symptoms": ["Experiencing chest pain", "shortness of breath", "rapid weight gain"]
        },
        {
            "medicine_type": "injection",
            "medicine_name": "Insulin, Glargine, Human 100 unt/ml inj",
            "reason_for_medication": "Reduce blood pressure",
            "directions_to_use": `
                                    1 injection at bedtime
                                    Inject 10 ml vial under the skin as directed for
                                    28 days inject 25 units under the skin at bedtime
                                    do not mix with other insulins/discard open vials
                                    after 28 days.
                                `,
            "medicine_consumption_timings": ["08:00PM"],
            "side_effects": ["Headache", "Fatigue", "Nausea"],
            "medical_help_symptoms": ["Experiencing itching skin", "wheezing", "fast heart rate"]
        },
        {
            "medicine_type": "capsule",
            "medicine_name": "Terazosin hcl 2mg capsule",
            "reason_for_medication": "For treatment of symptoms of an enlarged prostate",
            "directions_to_use": "3 capsules before bed",
            "medicine_consumption_timings": ["08:00PM"],
            "side_effects": ["Dizziness", "Headache", "Constipation", "Loss of appetite", "Fatigue"],
            "medical_help_symptoms": []
        },
    ]
}


export default data