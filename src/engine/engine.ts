import fs from 'fs';
import { promisify } from 'util';
import assert from 'assert';
import { homeDataDirectory } from './platform';
import { join } from 'path';
import { StateResolver } from './state-resolver';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const mkdir = promisify(fs.mkdir);

import { Service } from 'typedi';

@Service()
export class Engine<TState extends new() => TState> {

    private gameState?: TState;

    private lastSavedGameFilePath?: string;

    constructor(private readonly name: string, private readonly stateCtor: TState) {
        assert.strictEqual(name.length >= 1, true, 'The name given to the engine must be greater than 1 character.');
    }

    public async saveGameState(fileName = this.name + '.json') {
        const state = JSON.stringify(this.gameState, null, 2);
        const gameRoot = homeDataDirectory()(this.name);
        const savesDirectory = join(gameRoot, 'saves');
        await mkdir(savesDirectory, { recursive: true });
        const fp = join(savesDirectory, fileName);
        await writeFile(fp, state);
        this.lastSavedGameFilePath = fp;
        
    }

    public async loadGameState(filePath: string) {
        const f = await readFile(filePath);
        const gameState = JSON.parse(f.toString()) as TState;
        return StateResolver.resolve(gameState, this.stateCtor);
    }

    public async loadLastGameState() {
        if (!this.lastSavedGameFilePath) {
            throw new Error('No last saved game present.');
        }
        return await this.loadGameState(this.lastSavedGameFilePath);
    }
}
