import React from "react"

//Lista med Peoples (test)
// let Array1 = [];
 
// console.log(Array1);


export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [], 
        };
    }
    
    componentDidMount() {
        fetch("https://swapi.dev/api/people")
        .then (res => res.json())
        .then (json => {
            this.setState({
            isLoaded: true,
            items: json.results,
        })
        });
    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
            <div>
                <div className="Info">
                    <table>
                        {
                            items.map(item => (
                                <tbody>
                                <tr key={item.id}>
                                    <th>Name</th> 
                                    <th>Mass</th>
                                    <th>Height</th>
                                    <th>Hair color</th> 
                                    <th>Skin color</th>
                                    <th>Birth year</th>
                                    <th>Homeworld</th> 
                                    <th>Gender</th>
                                    <th>Eye color</th>
                                </tr>
                                <tr>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                {item.mass}
                                </td>
                                <td>
                                    {item.height}
                                </td>
                                <td>
                                    {item.hair_color}
                                </td>
                                <td>
                                    {item.skin_color} 
                                </td>
                                <td>
                                    {item.birth_year}
                                </td>
                                <td>
                                    {item.homeworld}
                                </td>
                                <td>
                                    {item.gender}
                                </td>
                                <td>
                                    {item.eye_color}
                                </td>
                                </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>

                <div className="buttons">
                <button className ="btn btn-previous">Previous</button>
                <button className ="btn btn-next">Next</button>
                </div>
            </div>
            );
        }
    }
}








// let People = (props) => (<div>
//     <h2>Details</h2>
//     <h3>{props.name}</h3>
//     <p>{props.height}</p>
//     <p>{props.mass}</p>
//     <p>{props.hair}</p>
//     <p>{props.skin}</p>
//     <p>{props.birth}</p>
//     <p>{props.home}</p>
//   </div>)

// let Planets = (props) => (<div>
//     <h2>Details</h2>
//     <h3>{props.rotation_period}</h3>
//     <p>{props.orbital_period}</p> 
//     <p>{props.diameter}</p> 
//     <p>{props.climate}</p> 
//     <p>{props.gravity}</p>
//     <p>{props.terrain}</p> 
//     <p>{props.surface_water}</p> 
//     <p>{props.population}</p>
//     <p>{props.residents}</p>
//     <p>{props.films}</p> 
//     <p>{props.created}</p> 
//     <p>{props.edited}</p>
//     <p>{props.url}</p> 
  // </div>)

// let Films = (props) => (<div>
//     <h2>Details</h2>
//     <h3>{props.title}</h3>
//     <p>{props.episode_id}</p>
//     <p>{props.opening_crawl}</p>
//     <p>{props.director}</p>
//     <p>{props.producer}</p>
//     <p>{props.release_date}</p>
//     <p>{props.characters}</p>
// </div>);

// let Species = (props) => (<div>
//     <h2>Details</h2>
//     <h3>{props.species}</h3>
//     <p>{props.created}</p>
//     <p>{props.edited}</p>
//     <p>{props.url}</p>

// </div>);

// let Vehicles = (props) => (<div>
//     <h2>Details</h2>
//     <h3>{props.vehicles}</h3> //EJ MED?
//     <p>{props.vehicles4}</p> //EJ MED?
//     <p>{props.vehicles6}</p> //EJ MED?
//     <p>{props.vehicles7}</p> //EJ MED?
//     <p>{props.vehicles8}</p>

// </div>);

// let Starships = (props) => (<div>
//     <h2>Details</h2>
//     <h3>{props.name}</h3>
//     <p>{props.model}</p>
//     <p>{props.manufacturer}</p>
//     <p>{props.cost_in_credit}</p>
//     <p>{props.length}</p>
//     <p>{props.max_atmosphering_speed}</p>
//     <p>{props.crew}</p>
//     <p>{props.passengers}</p>
//     <p>{props.cargo_capacity}</p>
//     <p>{props.consumables}</p>
//     <p>{props.hyperdrive_rating}</p>
//     <p>{props.MGLT}</p>
//     <p>{props.starship_class}</p>
//     <p>{props.pilots}</p>
//     <p>{props.films}</p>
//     <p>{props.created}</p>
//     <p>{props.edited}</p>
//     <p>{props.url}</p>



// </div>);
// </div>);

// export default class Cards extends React.Component {
//     render() {
//         return (
//             <div>
//                 <People name = "Airwaljkler"
//                 height ="180cm" 
//                 mass ="85 kg" 
//                 hair = "Blond" 
//                 skin = "Fair" 
//                 birth = "200 bc." 
//                 home = "Tattoine"></People>
//             </div>
//         )
//     }
// }


// //Test to fetch data

// fetch ('http://swapi.dev/api/people/1/')  
//   .then ((response) => response.json())
//   .then (people => console.log(people))

//   fetch ('http://swapi.dev/api/films/')  
//   .then ((response) => response.json())
//   .then (films => console.log(films))

//   fetch ('http://swapi.dev/api/starships/')  
//   .then ((response) => response.json())
//   .then (data => console.log(data))

//   fetch ('http://swapi.dev/api/vehicles/')  
//   .then ((response) => response.json())
//   .then (data => console.log(data))

//   fetch ('http://swapi.dev/api/species/')  
//   .then ((response) => response.json())
//   .then (data => console.log(data))

//   fetch ('http://swapi.dev/api/planets/')  
//   .then ((response) => response.json())
//   .then (data => console.log(data))


// function Table() {
//   return(
//     <div className="table">
//       <table>
//         <tbody>
//         <tr>
//           <th>Details</th>
//         </tr>
//         <tr>
//           <th>Luke Skywalker</th>
//         </tr>
//         <tr>
//           <td>Height:</td>
//           <td>180 cm</td>
//         </tr>
//         <tr>
//           <td>mass:</td>
//           <td>77</td>
//         </tr>
//         <tr>
//           <td>Hari color:</td>
//           <td>Blond</td>
//         </tr>
//         <tr>
//           <td>Height:</td>
//           <td>180 cm</td>
//         </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default Table;


// class People {
//   constructor(name, height, mass, hair_color, skin_color, birth_year, eye_color, gender, homeworld) {
//     this.name = name;
//     this.height = height;
//     this.mass = mass;
//     this.hair_color = hair_color;
//     this.skin_color = skin_color;
//     this.birth_year = birth_year;
//     this.eye_color = eye_color;
//     this.gender = gender;
//     this.homeworld = homeworld;    
//   }
// }

// const lukeSkywalker = new People("Luke Skywalker", "180 cm", "85 kg", "Blonde", "Fair", "200 bc.", "blue", "Male", "Tatooine");

// console.log(lukeSkywalker);