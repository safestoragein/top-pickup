        // Bangalore pickup data with categorized apartments and locations
        const pickupData = [
            {
                rank: 1,
                area: "Unknown",
                bookings: 1923,
                percentage: 60.0,
                subAreas: ["Silver Springs Layout", "1st Main Road", "AECS Layout"],
                apartments: [
                    {name: "Ground Floor", count: 11},
                    {name: "PURVA SEASONS", count: 2},
                    {name: "DLF Woodland Heights Bangalore", count: 2},
                    {name: "Provident Park Square", count: 6},
                    {name: "Nikoo Homes 2 Bhartiya City", count: 3},
                    {name: "NGR Layout", count: 2},
                    {name: "Saptagiri Enclave", count: 2},
                    {name: "Dollars Colony", count: 2},
                    {name: "Prestige Lake Ridge", count: 2},
                    {name: "Prestige Ferns Residency", count: 5},
                    {name: "Poetree Apartment", count: 2},
                    {name: "AJMERA GREEN ACRES", count: 2},
                    {name: "RISE- Elegant Homes", count: 2},
                    {name: "3RD FLOOR", count: 4},
                    {name: "Jai Royal Park", count: 2},
                    {name: "Lakshmi Layout", count: 4},
                    {name: "NCC Urban Ivory Heights", count: 2},
                    {name: "Sobha Dream Acres", count: 5},
                    {name: "Telecom Layout", count: 3},
                    {name: "Airavatam Apartments", count: 2},
                    {name: "5th Phase", count: 5},
                    {name: "Srinidhi Residency", count: 2},
                    {name: "Shriram Greenfield", count: 2},
                    {name: "OMBR Layout", count: 3},
                    {name: "HRBR Layout 1st Block", count: 2},
                    {name: "Mantri Tranquil", count: 3},
                    {name: "NRI Layout", count: 2},
                    {name: "Confident Pride", count: 3},
                    {name: "Prestige Falcon City", count: 2},
                    {name: "DLF Westend Heights Apartments", count: 4},
                    {name: "Prestige Finsbury Park", count: 3},
                    {name: "Sai Teja Fair Bower Block 1", count: 2},
                    {name: "GM Infinite ECity Town Phase 2", count: 2},
                    {name: "Brigade Metropolis", count: 3},
                    {name: "Spice Garden Layout", count: 3},
                    {name: "Montreal Manor", count: 2},
                    {name: "PRESTIGE KENSINGTON GARDENS", count: 2},
                    {name: "Epitome Crowne", count: 3},
                    {name: "Purva Venezia", count: 3},
                    {name: "SOBHA Dream Gardens (Residential Apartments in Thanisandra)", count: 2},
                    {name: "Jal Vayu Towers", count: 2},
                    {name: "HRBR Layout", count: 2},
                    {name: "Dhruva Apartments", count: 3},
                    {name: "Brigade meadows", count: 3},
                    {name: "SS Signature Apartment", count: 2},
                    {name: "Palace Garden Apartments", count: 2},
                    {name: "Salarpuria Sattva Greenage", count: 2},
                    {name: "SAM HEIGHTS", count: 2},
                    {name: "Alpine Eco Apartments", count: 3},
                    {name: "Pride Pegasus", count: 2},
                    {name: "NAGARJUNA GREENWOODS", count: 2},
                    {name: "Purva Westend", count: 2},
                    {name: "Prestige Tranquility", count: 2},
                    {name: "Thimappa Reddy Layout", count: 2},
                    {name: "Sobha Hillview Apartments", count: 3},
                    {name: "House Of Hiranandani Villas", count: 2},
                    {name: "Brigade Buena vista", count: 2},
                    {name: "Purple Woods Apartments", count: 2},
                    {name: "BDA Layout BTM 4th Stage", count: 2},
                    {name: "1st Phase", count: 2},
                    {name: "3rd Block", count: 2},
                    {name: "Nikoo Homes 2", count: 2},
                    {name: "SJR Blue Waters Clarence Block", count: 3},
                    {name: "1st Block", count: 2},
                    {name: "4th Block", count: 2},
                    {name: "PBR Residency", count: 2},
                    {name: "CSR Samruddhi Apartment", count: 2},
                    {name: "NKR Oaks", count: 2},
                    {name: "BEML Layout", count: 2},
                    {name: "Serene Brigade Cornerstone Utopia Road", count: 2},
                    {name: "Sobha Ivory Block-2", count: 3},
                    {name: "Bhadrappa Layout", count: 2}
                ],
                locations: [
                    {name: "Somasundarapalya", count: 3},
                    {name: "Margondanahalli", count: 2},
                    {name: "2nd Cross Road", count: 4},
                    {name: "Ramamurthy Nagar", count: 8},
                    {name: "Bommanahalli", count: 3},
                    {name: "1st Cross Road", count: 3},
                    {name: "Mahadevapura", count: 12},
                    {name: "Kasavanahalli", count: 4},
                    {name: "K R Puram", count: 4},
                    {name: "Ayyappa Nagar", count: 5},
                    {name: "560059", count: 2},
                    {name: "6th Cross Road", count: 2},
                    {name: "4th Cross Road", count: 7},
                    {name: "B Narayanapura", count: 2},
                    {name: "560017", count: 2},
                    {name: "Murugeshpalya", count: 3},
                    {name: "15th Main Road", count: 2},
                    {name: "2nd Main Road", count: 2},
                    {name: "560100", count: 2},
                    {name: "Kalyan Nagar", count: 5},
                    {name: "Kaggadasapura", count: 7},
                    {name: "Kodigehalli", count: 2},
                    {name: "Vasanthapura", count: 3},
                    {name: "Kasturi Nagar", count: 3},
                    {name: "3rd Cross Road", count: 5},
                    {name: "Lavelle Road", count: 2},
                    {name: "Vimanapura", count: 2},
                    {name: "S.G. Palya", count: 3},
                    {name: "Malleshwaram", count: 2},
                    {name: "Vishwapriya Nagar", count: 2},
                    {name: "Seegehalli", count: 3},
                    {name: "Zolo Eternal - Ladies PG in Ejipura | PG for Women", count: 2},
                    {name: "Ejipura", count: 2},
                    {name: "Jayanagar", count: 2},
                    {name: "7th Cross Road", count: 3},
                    {name: "J. P. Nagar", count: 5},
                    {name: "GM Palya", count: 2},
                    {name: "Sai Baba Temple Road", count: 2},
                    {name: "Doddabanahalli", count: 2},
                    {name: "Kammanahalli", count: 3},
                    {name: "Devanahalli", count: 2},
                    {name: "LBS Nagar", count: 2},
                    {name: "Hosakerehalli", count: 2},
                    {name: "Panduranga Nagar", count: 2},
                    {name: "Belathur Main Road", count: 3},
                    {name: "PARIMALA GOLDEN GATE", count: 2},
                    {name: "Kodihalli Main Road", count: 2},
                    {name: "Kudlu Gate", count: 5},
                    {name: "Sahakar Nagar", count: 2},
                    {name: "Ozone Urbana", count: 3},
                    {name: "Rajajinagar", count: 3},
                    {name: "1st Main Road", count: 2},
                    {name: "C V Raman Nagar", count: 3},
                    {name: "Vinayaka Nagar", count: 5},
                    {name: "Malleshpalya", count: 3},
                    {name: "Byrasandra Main Road", count: 2},
                    {name: "National Law School of India University", count: 3},
                    {name: "Vidyaranyapura", count: 2},
                    {name: "4th Main Road", count: 2},
                    {name: "Richmond Road", count: 2},
                    {name: "Hebbal Kempapura", count: 3},
                    {name: "Hosa Road", count: 5},
                    {name: "Bannerghatta Road", count: 2},
                    {name: "560068", count: 2},
                    {name: "Kundalahalli Gate", count: 2},
                    {name: "Devasandra industrial area", count: 2},
                    {name: "Pragathi School", count: 2},
                    {name: "Byatarayanapura", count: 2},
                    {name: "Diamond District", count: 2},
                    {name: "Babusapalya", count: 3},
                    {name: "Kattigenahalli", count: 2},
                    {name: "JC Industrial Estate", count: 2}
                ]
            },
            {
                rank: 2,
                area: "Whitefield",
                bookings: 259,
                percentage: 8.1,
                subAreas: ["ECC Road", "Whitefield Main Road", "Dodsworth Layout"],
                apartments: [
                    {name: "White Rose Layout", count: 2},
                    {name: "Prestige Lakeside Habitat", count: 4},
                    {name: "Prestige Park View", count: 2},
                    {name: "Prestige Shantiniketan Apartment Complex", count: 4},
                    {name: "Prestige Waterford", count: 2},
                    {name: "Brigade Lakefront", count: 2},
                    {name: "22024 Prestige Shantiniketan Apartment Complex", count: 2},
                    {name: "Lahari Apartments", count: 2}
                ],
                locations: [
                    {name: "3rd Cross Vinayaka Nagar Road", count: 2},
                    {name: "ECC Road", count: 32},
                    {name: "16058", count: 2},
                    {name: "Outer Circle", count: 2},
                    {name: "Nallurhalli", count: 5},
                    {name: "Immadihalli", count: 5},
                    {name: "Siddapura", count: 2},
                    {name: "Thubarahalli", count: 2},
                    {name: "Ramagondanahalli", count: 2},
                    {name: "Immadihalli Main Road", count: 2}
                ]
            },
            {
                rank: 3,
                area: "Marathahalli",
                bookings: 142,
                percentage: 4.4,
                subAreas: ["AECS Layout", "Sarjapur - Marathahalli Road", "Chandra Layout"],
                apartments: [
                    {name: "CKB Layout", count: 2},
                    {name: "Salarpuria Sanctity", count: 2},
                    {name: "AECS Layout", count: 6},
                    {name: "Mantri Flora", count: 2},
                    {name: "Purva Fountain Square", count: 3},
                    {name: "Springfields Apartments", count: 2},
                    {name: "UG Residency", count: 2},
                    {name: "PR Layout", count: 3}
                ],
                locations: [
                    {name: "2nd Cross Road", count: 2},
                    {name: "1st Cross Road", count: 2},
                    {name: "SGR Dental College Road", count: 2},
                    {name: "Sarjapur - Marathahalli Road", count: 2},
                    {name: "Doddanekundi Main", count: 2},
                    {name: "Kundalahalli", count: 2}
                ]
            },
            {
                rank: 4,
                area: "Hsr Layout",
                bookings: 135,
                percentage: 4.2,
                subAreas: ["HSR Layout", "Sector 2", "1st Sector"],
                apartments: [
                    {name: "HSR Layout", count: 11},
                    {name: "Sector 3", count: 4},
                    {name: "Sector 1", count: 8},
                    {name: "2nd Sector", count: 3},
                    {name: "Sector 2", count: 6},
                    {name: "Sector 7", count: 3},
                    {name: "ITI Layout", count: 3}
                ],
                locations: [
                    {name: "31A Main Road", count: 2},
                    {name: "4th Cross Road", count: 4},
                    {name: "Rajiv Gandhi Nagar", count: 2}
                ]
            },
            {
                rank: 5,
                area: "Electronic City",
                bookings: 111,
                percentage: 3.5,
                subAreas: ["Phase 1", "Electronics City Phase 1", "Electronic City Phase I"],
                apartments: [
                    {name: "Phase 1", count: 13},
                    {name: "Electronics City Phase 1", count: 3},
                    {name: "Celebrity Paradise Layout", count: 3},
                    {name: "S A Residency", count: 2},
                    {name: "Electronic City Phase II", count: 2},
                    {name: "Sobha Silicon Oasis", count: 2},
                    {name: "Electronic city phase 2", count: 2}
                ],
                locations: [
                    {name: "Hosa Road", count: 2},
                    {name: "Neeladri Road", count: 4},
                    {name: "Neeladri Nagar", count: 2}
                ]
            },
            {
                rank: 6,
                area: "Bellandur",
                bookings: 89,
                percentage: 2.8,
                subAreas: ["Green Glen Layout", "Outer Ring Road", "Bellandur Main Road"],
                apartments: [
                    {name: "Adarsh Palm Retreat", count: 4},
                    {name: "Raju Colony", count: 2},
                    {name: "Meda Heights", count: 2},
                    {name: "Green Glen Layout", count: 2},
                    {name: "Sobha Carnation", count: 2}
                ],
                locations: [
                    {name: "Railway Station Road", count: 2}
                ]
            },
            {
                rank: 7,
                area: "Btm Layout",
                bookings: 69,
                percentage: 2.2,
                subAreas: ["BTM Layout", "Abbaappa Layout", "VP Road"],
                apartments: [
                    {name: "BTM Layout", count: 2},
                    {name: "Galaxy Homes", count: 2},
                    {name: "Umar Residency", count: 2},
                    {name: "BTM Layout 2nd Stage", count: 2}
                ],
                locations: [
                ]
            },
            {
                rank: 8,
                area: "Koramangala",
                bookings: 69,
                percentage: 2.2,
                subAreas: ["HSR Layout 5th Sector", "7th Cross Road", "8th - Cross Road"],
                apartments: [
                    {name: "4th Block", count: 2},
                    {name: "Koramangala 1st Block", count: 3},
                    {name: "Embassy Meadows", count: 3},
                    {name: "Raheja Residency", count: 2}
                ],
                locations: [
                ]
            },
            {
                rank: 9,
                area: "Varthur",
                bookings: 66,
                percentage: 2.1,
                subAreas: ["Balagere Road", "Varthur Road", "Eidgah Road"],
                apartments: [
                    {name: "Sobha Dream Acres", count: 9},
                    {name: "Brigade Cornerstone Utopia", count: 7},
                    {name: "Prestige Lakeside Habitat", count: 2}
                ],
                locations: [
                    {name: "Varthur Lake", count: 2},
                    {name: "Myhna Maple street", count: 2}
                ]
            },
            {
                rank: 10,
                area: "Sarjapur",
                bookings: 55,
                percentage: 1.7,
                subAreas: ["Sarjapur Road", "Sarjapur Main Road", "Ambalipura - Sarjapur Road"],
                apartments: [
                    {name: "Suncity Gloria Apartments", count: 2}
                ],
                locations: [
                    {name: "Sarjapur Road", count: 7},
                    {name: "Gold's Gym Sarjapur Road - Gym in Sarjapur Road", count: 2}
                ]
            },
            {
                rank: 11,
                area: "Brookefield",
                bookings: 51,
                percentage: 1.6,
                subAreas: ["BEML Layout", "ITPL Main Road", "AECS Layout"],
                apartments: [
                    {name: "BEML Layout", count: 6},
                    {name: "Gopalan Habitat Splendour Apartments", count: 2},
                    {name: "Phase 2", count: 2}
                ],
                locations: [
                    {name: "Kundalahalli", count: 2}
                ]
            },
            {
                rank: 12,
                area: "Indiranagar",
                bookings: 50,
                percentage: 1.6,
                subAreas: ["Eshwara Layout", "1st Cross Rd", "1st Cross Road"],
                apartments: [
                    {name: "KP Towers", count: 2},
                    {name: "Defence Colony", count: 2}
                ],
                locations: [
                    {name: "1st Cross Rd", count: 2}
                ]
            },
            {
                rank: 13,
                area: "Kadugodi",
                bookings: 48,
                percentage: 1.5,
                subAreas: ["Maithri Layout", "3G Homes Crimson Layout", "AB Vajapayee Road"],
                apartments: [
                ],
                locations: [
                    {name: "Hope farm Circle", count: 2}
                ]
            },
            {
                rank: 14,
                area: "Kadubeesanahalli",
                bookings: 38,
                percentage: 1.2,
                subAreas: ["Kaverappa Layout", "New Kaverappa Layout", "Bhoganahalli Road"],
                apartments: [
                    {name: "Sree Casa Grande", count: 2}
                ],
                locations: [
                    {name: "Varthur Road", count: 2}
                ]
            },
            {
                rank: 15,
                area: "Jp Nagar",
                bookings: 34,
                percentage: 1.1,
                subAreas: ["JP Nagar 7th Phase", "JP Nagar Phase 6", "Annaiah Reddy Layout"],
                apartments: [
                    {name: "JP Nagar 6th Phase", count: 2},
                    {name: "JP Nagar 7th Phase", count: 4},
                    {name: "Annaiah Reddy Layout", count: 2},
                    {name: "JP Nagar 8th Phase", count: 4},
                    {name: "Shriram Southern Crest", count: 2}
                ],
                locations: [
                ]
            }
        ];
