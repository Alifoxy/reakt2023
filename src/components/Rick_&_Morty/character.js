import React from 'react';

export const DescRMchar = () => {
    const url1 = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    const url2 = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    const url3 = 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    const url4 = 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
    const url5 = 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
    const url6 = 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'
    return (
        <div>

           <div>
               <h3>id: 1,
                   name: "Rick Sanchez",
                   status: "Alive",
                   species: "Human",
                   gender: "Male",</h3>
               <img src={url1} alt="Rick"/>
           </div>

            <div>
                <h3>id: 2,
                    name: "Morty Smith",
                    status: "Alive",
                    species: "Human",
                    gender: "Male",</h3>
                <img src={url2} alt="Morty"/>
            </div>

            <div>
                <h3>id: 3,
                    name: "Summer Smith",
                    status: "Alive",
                    species: "Human",
                    gender: "Female",</h3>
                <img src={url3} alt="Summer"/>
            </div>

            <div>
                <h3>id: 4,
                    name: "Beth Smith",
                    status: "Alive",
                    species: "Human",
                    gender: "Female",</h3>
                <img src={url4} alt="Beth"/>
            </div>

            <div>
                <h3>id: 5,
                    name: "Jerry Smith",
                    status: "Alive",
                    species: "Human",
                    gender: "Male",</h3>
                <img src={url5} alt="Jerry"/>
            </div>

            <div>
                <h3>id: 6,
                    name: "Abadango Cluster Princess",
                    status: "Alive",
                    species: "Alien",
                    gender: "Female",</h3>
                <img src={url6} alt="Abadango"/>
            </div>
        </div>
    );
};

export default DescRMchar;