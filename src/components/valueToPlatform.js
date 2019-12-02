export default function valueToPlatform(id){
    let name = '';
    switch (id){
        case '4':
        name = 'PC';
        break;

        case '1':
        name = 'Xbox One';
        break;

        case '18':
        name = 'Playstation 4';
        break;

        case '3':
        name = 'iOS';
        break;

        case '21':
        name = 'Anddroid';
        break;

        case '5':
        name = 'macOS';
        break;

        case '6':
        name = 'Linux';
        break;

        case '7':
        name = 'Nintendo Switch';
        break;

        case '8':
        name = 'Nintendo 3DS';
        break;

        case '9':
        name = 'Nintendo DS';
        break;

        case '13':
        name = 'Nintendo DSi';
        break;

        case '14':
        name = 'Xbox 360';
        break;

        case '80':
        name = 'Xbox';
        break;

        case '16':
        name = 'Playstation 3';
        break;

        case '15':
        name = 'Playstation 2';
        break;

        case '27':
        name = 'Playstation';
        break;

        case '19':
        name = 'PS Vita';
        break;

        case '17':
        name = 'PSP';
        break;

        case '10':
        name = 'Wii U';
        break;

        case '11':
        name = 'Wii';
        break;

        case '105':
        name = 'GameCube';
        break;

        case '83':
        name = 'Nintendo 64';
        break;

        case '24':
        name = 'Game boy Advance';
        break;

        case '43':
        name = 'Game boy Color';
        break;

        case '26':
        name = 'Game Boy';
        break;

        case '79':
        name = 'SNES';
        break;

        case '49':
            name='NES';
            break;

        case '171':
            name='Web';
            break;
        
        default:
            name='None';
            break;
    }
    return name;
}