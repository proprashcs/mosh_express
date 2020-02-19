const seeder = require('mongoose-seed');
const Course = require('../models/course')

// Connect to MongoDB via Mongoose
const Course = seeder.connect('mongodb://localhost/vidly', function () {

    // Load Mongoose models
    seeder.loadModels([
        Course,
        // 'app/model2File.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Course'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });

    });
});
exports.Course = Course; 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Course',
        'documents': [
            {
                "id": 0,
                "description": "Angular Ngrx Course",
                "iconUrl": 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
                "courseListIcon": 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
                "description": "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
                "category": 'BEGINNER',
                "lessonsCount": 6,
                "promo": true
            },
            {
                "id": 1,
                "description": "Angular for Beginners",
                "iconUrl": 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
                "courseListIcon": 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
                "description": "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
                "category": 'BEGINNER',
                "lessonsCount": 10,
                "promo": true
            },
            {
                "id": 2,
                "description": 'Angular Security Course - Web Security Fundamentals',
                "description": "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
                "iconUrl": 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
                "courseListIcon": 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
                "category": 'ADVANCED',
                "lessonsCount": 11,
                "promo": false
            },
            {
                "id": 3,
                "description": 'Angular PWA - Progressive Web Apps Course',
                "description": "<p class='course-description'>Learn Angular Progressive Web Applications, build the future of the Web Today.",
                "iconUrl": 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
                "courseListIcon": 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png',
                "category": 'ADVANCED',
                "lessonsCount": 8,
                "promo": false
            },
            {
                "id": 4,
                "description": 'Angular NgRx Store Reactive Extensions Architecture Course',
                "description": "Learn how to the Angular NgRx Reactive Extensions and its Tooling to build a complete application.",
                "iconUrl": 'https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-angular.png',
                "courseListIcon": 'https://angular-academy.s3.amazonaws.com/thumbnails/ngrx-small.png',
                "category": 'ADVANCED',
                "promo": false
            },
            {
                "id": 5,
                "description": 'Angular Advanced Library Laboratory: Build Your Own Library',
                "description": "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm",
                "iconUrl": 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
                "courseListIcon": 'https://angular-academy.s3.amazonaws.com/thumbnails/angular-advanced-lesson-icon.png',
                "category": 'ADVANCED',
                "promo": false
            },
            {
                "id": 6,
                "description": 'The Complete Typescript Course',
                "description": "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.",
                "iconUrl": 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
                "courseListIcon": 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-lesson.png',
                "category": 'BEGINNER',
                "promo": false
            },
            {
                "id": 7,
                "description": 'Rxjs and Reactive Patterns Angular Architecture Course',
                "description": "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
                "iconUrl": 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
                "courseListIcon": 'https://angular-academy.s3.amazonaws.com/course-logos/observables_rxjs.png',
                "category": 'BEGINNER',
                "promo": false
            },
            {
                "id": 8,
                "description": "Angular Material Course",
                "iconUrl": "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
                "description": "Build Applications with the official Angular Widget Library",
                "category": 'ADVANCED',
                "promo": false
            },
        ]
    }
];