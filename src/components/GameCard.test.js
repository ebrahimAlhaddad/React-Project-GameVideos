import React from "react";
import  GameCard from "./GameCard";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it('Game Card shows game information if all is valid', ()=>{
    //Prepare input
    var platform_obj = [];
    var platform_1 = {
        platform:{
            name:"platform_1"
        }
    };
    var platform_2 = {
        platform:{
            name:"platform_2"
        }
    };
    platform_obj.push(platform_1);
    platform_obj.push(platform_2);
    var genre_obj = [
        {
            name: "genre_1"
        },
        {
            name:"genre_2"
        }
    ];
    var game = {
        name:"name",
        rating:"4",
        released:"01/01/2001",
        background_image:"http://background_url/",
        platforms:platform_obj,
        genres:genre_obj
    };

    //Act
    const {getByTestId, queryByTestId, container} = render(<GameCard key={game.id} game={game}/>);

    expect(getByTestId("GameCard-image").src).toBe("http://background_url/");
    expect(getByTestId("GameCard-name").textContent).toBe("name");
    expect(getByTestId("GameCard-rating").textContent).toBe("☆4");
    expect(getByTestId("GameCard-date").textContent).toBe("Release Date: 01/01/2001");
    expect(getByTestId("GameCard-platforms").textContent).toBe(" platform_1, platform_2");
    expect(getByTestId("GameCard-genres").textContent).toBe(" genre_1, genre_2");

});

it("GameCard renders with missing image",()=>{
        var missing_image_url = "https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg";
        //Prepare input
        var platform_obj = [];
        var platform_1 = {
            platform:{
                name:"platform_1"
            }
        };
        var platform_2 = {
            platform:{
                name:"platform_2"
            }
        };
        platform_obj.push(platform_1);
        platform_obj.push(platform_2);
        var genre_obj = [
            {
                name: "genre_1"
            },
            {
                name:"genre_2"
            }
        ];
        var game = {
            name:"name",
            rating:"4",
            released:"01/01/2001",
            //background_image:"http://background_url/",
            platforms:platform_obj,
            genres:genre_obj
        };
    
        //Act
        const {getByTestId} = render(<GameCard key={game.id} game={game}/>);
    
        expect(getByTestId("GameCard-image").src).toBe(missing_image_url);
        expect(getByTestId("GameCard-name").textContent).toBe("name");
        expect(getByTestId("GameCard-rating").textContent).toBe("☆4");
        expect(getByTestId("GameCard-date").textContent).toBe("Release Date: 01/01/2001");
        expect(getByTestId("GameCard-platforms").textContent).toBe(" platform_1, platform_2");
        expect(getByTestId("GameCard-genres").textContent).toBe(" genre_1, genre_2");
});

it('GameCard renders when platforms are missing', ()=>{
    //Prepare input
    var genre_obj = [
        {
            name: "genre_1"
        },
        {
            name:"genre_2"
        }
    ];
    var game = {
        name:"name",
        rating:"4",
        released:"01/01/2001",
        background_image:"http://background_url/",
        //platforms:platform_obj,
        genres:genre_obj
    };

    //Act
    const {getByTestId} = render(<GameCard key={game.id} game={game}/>);

    expect(getByTestId("GameCard-image").src).toBe("http://background_url/");
    expect(getByTestId("GameCard-name").textContent).toBe("name");
    expect(getByTestId("GameCard-rating").textContent).toBe("☆4");
    expect(getByTestId("GameCard-date").textContent).toBe("Release Date: 01/01/2001");
    expect(getByTestId("GameCard-platforms").textContent).toBe("unavailable");
    expect(getByTestId("GameCard-genres").textContent).toBe(" genre_1, genre_2");

});

it('GameCard renders when genres are missing', ()=>{
    //Prepare input
    var platform_obj = [];
    var platform_1 = {
        platform:{
            name:"platform_1"
        }
    };
    var platform_2 = {
        platform:{
            name:"platform_2"
        }
    };
    platform_obj.push(platform_1);
    platform_obj.push(platform_2);
    var game = {
        name:"name",
        rating:"4",
        released:"01/01/2001",
        background_image:"http://background_url/",
        platforms:platform_obj,
        //genres:genre_obj
    };

    //Act
    const {getByTestId} = render(<GameCard key={game.id} game={game}/>);

    expect(getByTestId("GameCard-image").src).toBe("http://background_url/");
    expect(getByTestId("GameCard-name").textContent).toBe("name");
    expect(getByTestId("GameCard-rating").textContent).toBe("☆4");
    expect(getByTestId("GameCard-date").textContent).toBe("Release Date: 01/01/2001");
    expect(getByTestId("GameCard-platforms").textContent).toBe(" platform_1, platform_2");
    expect(getByTestId("GameCard-genres").textContent).toBe("unavailable");

});

it('Game Card renders with missing name', ()=>{
    //Prepare input
    var platform_obj = [];
    var platform_1 = {
        platform:{
            name:"platform_1"
        }
    };
    var platform_2 = {
        platform:{
            name:"platform_2"
        }
    };
    platform_obj.push(platform_1);
    platform_obj.push(platform_2);
    var genre_obj = [
        {
            name: "genre_1"
        },
        {
            name:"genre_2"
        }
    ];
    var game = {
        //name:"name",
        rating:"4",
        released:"01/01/2001",
        background_image:"http://background_url/",
        platforms:platform_obj,
        genres:genre_obj
    };

    //Act
    const {getByTestId} = render(<GameCard key={game.id} game={game}/>);

    expect(getByTestId("GameCard-image").src).toBe("http://background_url/");
    expect(getByTestId("GameCard-name").textContent).toBe("unavailable");
    expect(getByTestId("GameCard-rating").textContent).toBe("☆4");
    expect(getByTestId("GameCard-date").textContent).toBe("Release Date: 01/01/2001");
    expect(getByTestId("GameCard-platforms").textContent).toBe(" platform_1, platform_2");
    expect(getByTestId("GameCard-genres").textContent).toBe(" genre_1, genre_2");

});

it('Game Card renders with missing date', ()=>{
    //Prepare input
    var platform_obj = [];
    var platform_1 = {
        platform:{
            name:"platform_1"
        }
    };
    var platform_2 = {
        platform:{
            name:"platform_2"
        }
    };
    platform_obj.push(platform_1);
    platform_obj.push(platform_2);
    var genre_obj = [
        {
            name: "genre_1"
        },
        {
            name:"genre_2"
        }
    ];
    var game = {
        name:"name",
        rating:"4",
        //released:"01/01/2001",
        background_image:"http://background_url/",
        platforms:platform_obj,
        genres:genre_obj
    };

    //Act
    const {getByTestId} = render(<GameCard key={game.id} game={game}/>);

    expect(getByTestId("GameCard-image").src).toBe("http://background_url/");
    expect(getByTestId("GameCard-name").textContent).toBe("name");
    expect(getByTestId("GameCard-rating").textContent).toBe("☆4");
    expect(getByTestId("GameCard-date").textContent).toBe("Release Date: unavailable");
    expect(getByTestId("GameCard-platforms").textContent).toBe(" platform_1, platform_2");
    expect(getByTestId("GameCard-genres").textContent).toBe(" genre_1, genre_2");

});

it('Game Card renders with missing rating', ()=>{
    //Prepare input
    var platform_obj = [];
    var platform_1 = {
        platform:{
            name:"platform_1"
        }
    };
    var platform_2 = {
        platform:{
            name:"platform_2"
        }
    };
    platform_obj.push(platform_1);
    platform_obj.push(platform_2);
    var genre_obj = [
        {
            name: "genre_1"
        },
        {
            name:"genre_2"
        }
    ];
    var game = {
        name:"name",
        //rating:"4",
        released:"01/01/2001",
        background_image:"http://background_url/",
        platforms:platform_obj,
        genres:genre_obj
    };

    //Act
    const {getByTestId} = render(<GameCard key={game.id} game={game}/>);

    expect(getByTestId("GameCard-image").src).toBe("http://background_url/");
    expect(getByTestId("GameCard-name").textContent).toBe("name");
    expect(getByTestId("GameCard-rating").textContent).toBe("unavailable");
    expect(getByTestId("GameCard-date").textContent).toBe("Release Date: 01/01/2001");
    expect(getByTestId("GameCard-platforms").textContent).toBe(" platform_1, platform_2");
    expect(getByTestId("GameCard-genres").textContent).toBe(" genre_1, genre_2");

});

it('Game Card renders children', ()=>{
    //Prepare input
    var platform_obj = [];
    var platform_1 = {
        platform:{
            name:"platform_1"
        }
    };
    var platform_2 = {
        platform:{
            name:"platform_2"
        }
    };
    platform_obj.push(platform_1);
    platform_obj.push(platform_2);
    var genre_obj = [
        {
            name: "genre_1"
        },
        {
            name:"genre_2"
        }
    ];
    var game = {
        name:"name",
        rating:"4",
        released:"01/01/2001",
        background_image:"http://background_url/",
        platforms:platform_obj,
        genres:genre_obj
    };
    //Act
    const {getByTestId, queryByTestId} = render(
    <GameCard game={game}>
        {
            ()=>{
                return(<a 
                    data-testid="GameCard-button"
                    className="btn btn-warning">
                          Add to favorite
                </a>);
            }
        }
    </GameCard>);

    expect(queryByTestId("GameCard-button")).toBeTruthy;
    expect(getByTestId("GameCard-button").textContent).toBe("Add to favorite");
});
