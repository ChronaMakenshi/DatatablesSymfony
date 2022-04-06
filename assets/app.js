/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';
import 'datatables.net';
import 'datatables.net-bs5';

const data = [
    [
        "1", "Livres blanc", 12, new Date('2022-04-06')
    ],
    [
        "2", "Livres rouge", 25, new Date('2022-04-27')
    ]
];

$("#datatable").DataTable({
    data: data
});
