import { createContext } from 'react';


const dataContext = createContext([]);


/*

    Data Structure : 

    {
        categorie: [
            {name: "faire ca", "date: 13/04/22"},
            {name: "faire ca", "date: 13/04/22"},
            {name: "faire ca", "date: 13/04/22"},
        ],
        categorie2: [
             {name: "faire ca", "date: 13/04/22"},
            {name: "faire ca", "date: 13/04/22"},
            {name: "faire ca", "date: 13/04/22"},
        ]
    } 

    Check !

    ------- OU --------

    [
        {name: "faire ca", date: "13/04/22", categorie: "categorie1"},
        {name: "faire ca", date: "13/04/22", categorie: "categorie2"},
        {name: "faire ca", date: "13/04/22", categorie: "categorie3"},
    ]

*/