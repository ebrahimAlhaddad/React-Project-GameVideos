export default function valueToGenre(id){
    let name = '';
    switch (id){
        case '4':
        name = 'Action';
        break;

        case '51':
        name = 'Indie';
        break;

        case '3':
            name = 'Adventure';
            break;
        
        case '5':
            name = 'RPG';
            break;
        
        case '2':
            name = 'Shooter';
            break;

        case '10':
            name ='Strategy';
            break;
        
        case '40':
            name = 'Casual';
            break;
        
        case '14':
            name = 'Simulation';
            break;
        
        case '11':
            name = 'Arcade';
            break;
        
        case '7':
            name = 'Puzzle';
            break;
        
        case '83':
            name = 'Platformer';
            break;
        
        case '1': 
            name='Racing';
            break;
        
        case '15':
            name = 'Sports';
            break;
        
        case '59':
            name='Massively Multiplayer';
            break;
        
        case '19':
            name ='Family';
            break;
        
        case '6':
            name='Fighting';
            break;
        
        case '28':
            name='Board Games';
            break;
        
        case '34':
            name='Educational';
            break;
        
        case '17':
            name='Card';
            break;

        default:
            name = 'None';
            break;
    }
    return name;
}