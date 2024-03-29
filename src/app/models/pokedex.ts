export class Pokedex {

    constructor(
        private _id: number=0, 
        private _name: string = '', 
        private _image: string = '',
        private _hp: number = 0, 
        private _attack: number =0, 
        private _defence: number=0, 
        private _spAttack: number=0, 
        private _spDefence : number=0, 
        private _speed : number=0) {
    }

    public get id(): number { return this._id; }
    public set id (value: number) { this._id = value; }
    
    public get name(): string { return this._name; }
    public set name (value: string) { this._name = value; }
    
    public get image(): string { return this._image; }
    public set image (value: string) { this._image = value; }
    
    public get hp(): number {return this._hp; }
    public set hp (value: number) { this._hp = value; }
    
    public get attack(): number { return this._attack; }
    public set attack (value: number) { this._attack = value; }
    
    public get defence(): number { return this._defence; }
    public set defence (value: number) { this._defence = value; }
    
    public get spAttack(): number { return this._spAttack; }
    public set spAttack (value: number) { this._spAttack = value; }
    
    public set spDefence (value: number) { this._spDefence = value; }
    public get spDefence(): number { return this._spDefence; }
    
    public get speed(): number { return this._speed; }
    public set speed (value: number) { this._speed = value; }
        
    
}


