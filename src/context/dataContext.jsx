import { createContext } from 'react';


export const dataContext = createContext();


/*

    Data Structure : 

    {
        categorie: {
            options: {
                color: ,
            },
            list: [
                {name: "faire ca", "date: 13/04/22"},
                {name: "faire ca", "date: 13/04/22"},
                {name: "faire ca", "date: 13/04/22"},
            ]
        },
        categorie2: {
            options: {
                color: ,
            },
            list: [
                {name: "faire ca", "date: 13/04/22"},
                {name: "faire ca", "date: 13/04/22"},
                {name: "faire ca", "date: 13/04/22"},
            ]
        }
    } 

    Check !

    ------- OU --------

    [
        {name: "faire ca", date: "13/04/22", categorie: "categorie1"},
        {name: "faire ca", date: "13/04/22", categorie: "categorie2"},
        {name: "faire ca", date: "13/04/22", categorie: "categorie3"},
    ]

*/