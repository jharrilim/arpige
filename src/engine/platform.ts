import { platform, homedir } from 'os';
import { join } from 'path';

function capitalizeFirstLetter (s: string) {
    const str = s.toLowerCase();
    str[0].toUpperCase();
    return str;
}

/**
 * Returns a function that generates a path to
 * `%USERPROFILE%\AppData\Local\Somedir` on Windows, and
 * `~/.somedir` on Unix distros.
 * 
 * @export
 * @returns {(s: string) => string}
 */
export function homeDataDirectory () {
    const home = homedir();
    switch (platform()) {
        case 'win32':
            return (s: string) => join(home, 'AppData', 'Local', capitalizeFirstLetter(s));
        default:
            return (s: string) => join(home, '.' + s.toLowerCase());
    }
}
