/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('location-list', {
    title: 'Tourism',
    pageHeader: {
    title: 'Tourism',
    strapline: 'Discover the beauty of our destination and plan your trip now!'
    },
    sidebar: "Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places outside their usual environment for personal or business/professional purposes.",
    locations: [{
    name: 'Hyderabad',
    address: 'Hyderabad is the capital of southern Indias Telangana state',
    rating: 4,
    facilities: ['Charminar','Golconda fort','Salar Jung Museum','Birla Mandir','Nehru Zoological park'],
    distance: '650 km²'
    }, {
    name: 'Warangal',
    address: 'Warangal was the capital of the Kakatiya dynasty from the 12th to 14th centuries',
    rating: 4,
    facilities: ['Sri bhadrakali temple','Warngal fort','Thousand pillar temple','Pakhal lake','Laknavarm cheruvu'],
    distance: '407 km²'
    }, {
    name: 'Mahabubnagar',
    address: ' Mahabubnagar District of the Indian state of Telangana named after the 6th Nizam, Mahboob Ali Khan',
    rating: 3,
    facilities: ['Pillalamari','KCR eco urban park','Koli sagar project'],
    distance: '2,738 km²'
    }]
    });
    };

module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
    title: 'Hydrabad',
    pageHeader: {
    title: 'Hydrabad'
    },
    sidebar: {
    context: 'Hydrabad is a home to many upscale restaurants and shops.A major center for the technology industry .Its historic sites includes Golconda fort',
        
    callToAction: 'This is the information tells about Hydrabad'
    },
    location: {
    name: 'Hydrabad',
    address: 'Hyderabad is the capital of southern Indias Telangana state',
    rating: 4,
    facilities: ['Charminar','Golconda fort','Salar Jung Museum','Birla Mandir','Nehru Zoological park'],
    coords: {
    lat: 51.455041,
    lng: -0.9690884
    },
    openingTimes: [{
    days: 'All days',
    opening: 'Morning',
    closing: 'Evening',
    closed: false
    }, {
    days: 'Sunday - Saturday',
    opening: 'Afternoon',
    closing: 'Night',
    closed: false
    }],
    reviews: [{
    author: 'Ram',
    rating: 5,
    timestamp: '16 October 2023',
    reviewText: 'Hydrabad is a vast city,excellent Light and Sound Show which was organised by Fort authorities.'
    }, {
    author: 'Krishna',
    rating: 3,
    timestamp: '15 October 2023',
    reviewText: 'My favourate in Hyderabad is Hussain Sagar Lake and well managed and maintained Laser show which is example of excellent mark of science and technology.'
    }]
        
    }
    });
    };

        module.exports.locationInfo1 = function(req, res) {
            res.render('location-info1', {
            title: 'Warangal',
            pageHeader: {
            title: 'Warangal'
            },
            sidebar: {
            context: 'It is one of eleven cities in the country to have been chosen for the Heritage City Development and Augmentation Yojana scheme by the Government of India.',
            
            callToAction: 'This is the information about Warangal.'
            },
            location: {
            name: 'Warangal',
            address: 'Warangal was the capital of the Kakatiya dynasty from the 12th to 14th centuries',
            rating: 3,
            facilities: ['Sri bhadrakali temple','Warngal fort','Thousand pillar temple','Pakhal lake','Laknavarm cheruvu'],
            coords: {
            lat: 51.455041,
            lng: -0.9690884
            },
            openingTimes: [{
            days: 'All days',
            opening: 'Morning',
            closing: 'Evening',
            closed: false
            }, {
            days: 'Sunday - Saturday',
            opening: 'Morning',
            closing: 'Night',
            closed: false
            }, ],
            reviews: [{
            author: 'Ram',
            rating: 5,
            timestamp: '5 October 2023',
            reviewText: 'Fort Warangal is one of the iconic landmarks in the city. The remains tell a beautiful story of the Kakatiya dynasty and the era'
            }, {
            author: 'Krishna',
            rating: 3,
            timestamp: '4 October 2023',
            reviewText: 'warangal is one of the best historical place in telangana.there is a lot of beautiful places, great temples and forts and parks'
            }]
            
            }
            });
            };

            module.exports.locationInfo2 = function(req, res) {
                res.render('location-info2', {
                title: 'Mahabobnagar',
                pageHeader: {
                title: 'Mahabobnagar'
                },
                sidebar: {
                context: 'Mahabubnagar is southern district of Hyderabad State under Nizam and bordered with River Krishna in the south and surrounded by the Nalgonda, Hyderabad, Kurnool, Raichur and Gulbarga districts.',
                
                callToAction: 'This is the information about Mahabobnagar.'
                },
                location: {
                name: 'Mahabobnagar',
                address: 'Mahabubnagar District of the Indian state of Telangana named after the 6th Nizam, Mahboob Ali Khan',
                rating: 3,
                facilities: ['Pillalamari','KCR eco urban park','Koli sagar project'],
                coords: {
                lat: 51.455041,
                lng: -0.9690884
                },
                openingTimes: [{
                days: 'All days',
                opening: 'Morning',
                closing: 'Evening',
                closed: false
                }, {
                days: 'Sunday - Saturday',
                opening: 'Afternoon',
                closing: 'Night',
                closed: false
                },],
                reviews: [{
                author: 'Ram',
                rating: 5,
                timestamp: '16 July 2023',
                reviewText: 'It was amazing to see such a big tree land(Pillalamari). I recommend you all, to reach it and spend half a day exploring it...'
                },]
                
                }
                });
                };

                module.exports.addReview = function(req, res) {
                    res.render('location-review-form', {
                    title: 'Review any palce you visited on Tourism',
                    pageHeader: {
                    title: 'Hydrabad'
                    }
                    });
                    };