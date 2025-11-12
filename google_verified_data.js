// Google-verified apartment complexes data for Bangalore pickup analysis
const googleVerifiedPickupData = [
    {
        rank: 1,
        area: "Unknown",
        bookings: 1923,
        percentage: 60.0,
        subAreas: ["Multiple Areas", "Various Locations", "Citywide"],
        apartments: [
            {name: "Prestige Ferns Residency", count: 5},
            {name: "Provident Park Square", count: 6},
            {name: "Sobha Dream Acres", count: 5},
            {name: "DLF Westend Heights Apartments", count: 4},
            {name: "Brigade Metropolis", count: 3},
            {name: "Prestige Finsbury Park", count: 3},
            {name: "Purva Venezia", count: 3}
        ],
        locations: [
            {name: "Ramamurthy Nagar", count: 8},
            {name: "Mahadevapura", count: 12},
            {name: "Kaggadasapura", count: 7},
            {name: "Kalyan Nagar", count: 5},
            {name: "Ayyappa Nagar", count: 5},
            {name: "Vinayaka Nagar", count: 5},
            {name: "Hosa Road", count: 5}
        ]
    },
    {
        rank: 2,
        area: "Whitefield",
        bookings: 259,
        percentage: 8.1,
        subAreas: ["ECC Road", "Nallurhalli", "Immadihalli"],
        apartments: [
            {name: "Prestige Lakeside Habitat", count: 4},
            {name: "Prestige Shantiniketan Apartment Complex", count: 4},
            {name: "Brigade Lakefront", count: 2},
            {name: "Prestige Waterford", count: 2},
            {name: "Prestige Park View", count: 2},
            {name: "Lahari Apartments", count: 2}
        ],
        locations: [
            {name: "ECC Road", count: 32},
            {name: "Nallurhalli", count: 5},
            {name: "Immadihalli", count: 5},
            {name: "Immadihalli Main Road", count: 2},
            {name: "3rd Cross Vinayaka Nagar Road", count: 2},
            {name: "Outer Circle", count: 2},
            {name: "Siddapura", count: 2}
        ]
    },
    {
        rank: 3,
        area: "Marathahalli",
        bookings: 142,
        percentage: 4.4,
        subAreas: ["Sarjapur Road", "Kundalahalli", "Doddanekundi"],
        apartments: [
            {name: "Purva Fountain Square", count: 3},
            {name: "Salarpuria Sanctity", count: 2},
            {name: "Mantri Flora", count: 2},
            {name: "Springfields Apartments", count: 2},
            {name: "UG Residency", count: 2}
        ],
        locations: [
            {name: "AECS Layout", count: 6},
            {name: "CKB Layout", count: 2},
            {name: "PR Layout", count: 3},
            {name: "Sarjapur - Marathahalli Road", count: 2},
            {name: "SGR Dental College Road", count: 2},
            {name: "Kundalahalli", count: 2},
            {name: "Doddanekundi Main", count: 2}
        ]
    },
    {
        rank: 4,
        area: "HSR Layout",
        bookings: 135,
        percentage: 4.2,
        subAreas: ["Sector Areas", "Cross Roads", "Main Roads"],
        apartments: [
            {name: "Total Environment Learning To Fly", count: 4},
            {name: "Brigade Gardenia", count: 3},
            {name: "Elita Promenade", count: 3},
            {name: "Sobha Windfall", count: 2},
            {name: "Purva Riviera", count: 2}
        ],
        locations: [
            {name: "HSR Layout Sector 1", count: 8},
            {name: "HSR Layout Sector 2", count: 6},
            {name: "HSR Layout Sector 3", count: 4},
            {name: "HSR Layout Sector 7", count: 3},
            {name: "4th Cross Road", count: 4},
            {name: "31A Main Road", count: 2},
            {name: "Rajiv Gandhi Nagar", count: 2}
        ]
    },
    {
        rank: 5,
        area: "Electronic City",
        bookings: 111,
        percentage: 3.5,
        subAreas: ["Phase Areas", "Neeladri Road", "Hosa Road"],
        apartments: [
            {name: "Celebrity Paradise Layout", count: 3},
            {name: "S A Residency", count: 2},
            {name: "Sobha Silicon Oasis", count: 2},
            {name: "SNN Raj Neeladri", count: 2},
            {name: "Godrej Nurture Electronic City", count: 2}
        ],
        locations: [
            {name: "Electronic City Phase 1", count: 16},
            {name: "Electronic City Phase II", count: 4},
            {name: "Neeladri Road", count: 4},
            {name: "Hosa Road", count: 2},
            {name: "Neeladri Nagar", count: 2}
        ]
    },
    {
        rank: 6,
        area: "Bellandur",
        bookings: 89,
        percentage: 2.8,
        subAreas: ["Outer Ring Road", "Green Glen Layout", "Railway Station Road"],
        apartments: [
            {name: "Adarsh Palm Retreat", count: 4},
            {name: "Sobha Carnation", count: 2},
            {name: "Meda Heights", count: 2},
            {name: "Assetz East Point", count: 3},
            {name: "RMV Arcades", count: 2}
        ],
        locations: [
            {name: "Green Glen Layout", count: 2},
            {name: "Railway Station Road", count: 2},
            {name: "Raju Colony", count: 2}
        ]
    },
    {
        rank: 7,
        area: "BTM Layout",
        bookings: 69,
        percentage: 2.2,
        subAreas: ["BTM Stages", "Madiwala", "VP Road"],
        apartments: [
            {name: "Galaxy Homes", count: 2},
            {name: "Umar Residency", count: 2},
            {name: "Colive Brighton", count: 2}
        ],
        locations: [
            {name: "BTM Layout 1st Stage", count: 4},
            {name: "BTM Layout 2nd Stage", count: 16},
            {name: "Madiwala", count: 3}
        ]
    },
    {
        rank: 8,
        area: "Koramangala",
        bookings: 69,
        percentage: 2.2,
        subAreas: ["Block Areas", "Cross Roads", "HSR Layout 5th Sector"],
        apartments: [
            {name: "Embassy Meadows", count: 3},
            {name: "Raheja Residency", count: 2}
        ],
        locations: [
            {name: "Koramangala 1st Block", count: 3},
            {name: "Koramangala 4th Block", count: 2},
            {name: "7th Cross Road", count: 2},
            {name: "8th Cross Road", count: 2}
        ]
    },
    {
        rank: 9,
        area: "Varthur",
        bookings: 66,
        percentage: 2.1,
        subAreas: ["Balagere Road", "Varthur Road", "Varthur Lake"],
        apartments: [
            {name: "Sobha Dream Acres", count: 9},
            {name: "Brigade Cornerstone Utopia", count: 7},
            {name: "Prestige Lakeside Habitat", count: 2}
        ],
        locations: [
            {name: "Varthur Lake", count: 2},
            {name: "Myhna Maple Street", count: 2},
            {name: "Balagere Road", count: 2}
        ]
    },
    {
        rank: 10,
        area: "Sarjapur",
        bookings: 55,
        percentage: 1.7,
        subAreas: ["Sarjapur Road", "Sarjapur Main Road", "Ambalipura"],
        apartments: [
            {name: "Suncity Gloria Apartments", count: 2}
        ],
        locations: [
            {name: "Sarjapur Road", count: 7},
            {name: "Gold's Gym Sarjapur Road", count: 2}
        ]
    },
    {
        rank: 11,
        area: "Brookefield",
        bookings: 51,
        percentage: 1.6,
        subAreas: ["ITPL Main Road", "Kundalahalli"],
        apartments: [
            {name: "Gopalan Habitat Splendour Apartments", count: 2}
        ],
        locations: [
            {name: "BEML Layout", count: 6},
            {name: "Kundalahalli", count: 2},
            {name: "ITPL Main Road", count: 2}
        ]
    },
    {
        rank: 12,
        area: "Indiranagar",
        bookings: 50,
        percentage: 1.6,
        subAreas: ["Eshwara Layout", "Cross Roads"],
        apartments: [
            {name: "KP Towers", count: 2},
            {name: "Defence Colony", count: 2}
        ],
        locations: [
            {name: "1st Cross Road", count: 2},
            {name: "Eshwara Layout", count: 2}
        ]
    },
    {
        rank: 13,
        area: "Kadugodi",
        bookings: 48,
        percentage: 1.5,
        subAreas: ["Maithri Layout", "AB Vajapayee Road"],
        apartments: [],
        locations: [
            {name: "Maithri Layout", count: 2},
            {name: "Hope Farm Circle", count: 2},
            {name: "AB Vajapayee Road", count: 2}
        ]
    },
    {
        rank: 14,
        area: "Kadubeesanahalli",
        bookings: 38,
        percentage: 1.2,
        subAreas: ["Kaverappa Layout", "Varthur Road"],
        apartments: [
            {name: "Sree Casa Grande", count: 2}
        ],
        locations: [
            {name: "Kaverappa Layout", count: 2},
            {name: "Varthur Road", count: 2}
        ]
    },
    {
        rank: 15,
        area: "JP Nagar",
        bookings: 34,
        percentage: 1.1,
        subAreas: ["JP Nagar Phases", "Annaiah Reddy Layout"],
        apartments: [
            {name: "Shriram Southern Crest", count: 2},
            {name: "Brigade Gardenia", count: 2},
            {name: "Total Environment Learning To Fly", count: 2}
        ],
        locations: [
            {name: "JP Nagar 7th Phase", count: 4},
            {name: "JP Nagar 8th Phase", count: 4},
            {name: "JP Nagar 6th Phase", count: 2},
            {name: "Annaiah Reddy Layout", count: 2}
        ]
    }
];